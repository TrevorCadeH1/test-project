import { cookies } from 'next/headers'
import ClientPage from './clientpage'

type Product = {
  id: string
  name: string
  manufacturerNumber: string
  imageUrl: string
  price: string
  unit: string
  productid?: string
  qty?: number
}

type ServerPricingData = {
  productid: string
  price: string
  unit: string
  full_price?: string
  qty?: number
}

// Fallback pricing for if API call fails
const fallbackPricing: Record<string, { price: string; unit: string }> = {
  "1": { price: "$100", unit: "1000 Each" },
  "2": { price: "$5.14", unit: "Each" },
  "3": { price: "$11.85", unit: "Each" },
  "4": { price: "$50", unit: "1000 Each" },
  "5": { price: "$36.56", unit: "Set" },
  "6": { price: "$11.12", unit: "Each" },
  "7": { price: "$54.33", unit: "Set" },
  "8": { price: "$52.13", unit: "Set" },
  "9": { price: "$34.25", unit: "Set" }
}

// Server-side function to fetch products
async function getServerSideProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${process.env.WURTH_API_BASE_URL}/rest/getrandomgroups`, {
      headers: {
        'X-AUTH-TOKEN': process.env.WURTH_API_TOKEN!
      },
      next: { revalidate: 300 }
    })
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }
    
    const data = await response.json()
    const allItems: any[] = Array.isArray(data.groups)
      ? data.groups.flatMap((group: any) => group.itemSkuList || [])
      : []
    
    if (allItems.length > 0) {
      const apiProducts = allItems.slice(0, 9).map((item, idx) => {
        const key = (idx + 1).toString()
        const { price, unit } = fallbackPricing[key] || { price: "$0", unit: "Each" }

        let qty = 1
        const productId = item.productid || item.id?.toString() || `${654309 + idx}`
        
        // Products that show full price
        if (productId === '654309') {
          qty = 1000
        } else if (idx === 0 || idx === 3) {
          qty = 1000
        } else {
          qty = item.txt_min_order_amount ? parseInt(item.txt_min_order_amount) : 
               item.txt_order_qty_increments ? parseInt(item.txt_order_qty_increments) : 1
        }

        return {
          id: item.id?.toString() || `product-${idx}`,
          name: item.item_name || `Product ${idx + 1}`, 
          manufacturerNumber: item.txt_wurth_lac_item || `MFG-${idx + 1}`,
          imageUrl: item.img || '/wswu1.png',
          price,
          unit,
          productid: productId,
          qty
        } as Product
      })
      return apiProducts
    } else {
      return createFallbackProducts()
    }
  } catch (error) {
    console.error('Server-side product fetch failed:', error)
    return createFallbackProducts()
  }
}

// Function to create fallback products if API call fails
function createFallbackProducts(): Product[] {
  return Array.from({ length: 9 }, (_, idx) => {
    const key = (idx + 1).toString()
    const { price, unit } = fallbackPricing[key]

    const qty = (idx === 0 || idx === 3) ? 1000 : 1
    
    return {
      id: `fallback-${idx + 1}`,
      name: `Blum Hardware Product ${idx + 1}`,
      manufacturerNumber: `BLUM-${idx + 1}`,
      imageUrl: '/wswu1.png',
      price,
      unit,
      productid: `${654309 + idx}`,
      qty
    }
  })
}

// Server-side function to fetch pricing for non-authenticated users
async function getServerSidePricing(products: { productid: string; qty: number }[]): Promise<ServerPricingData[] | null> {
  try {
    const response = await fetch(`${process.env.WURTH_API_BASE_URL}/rest/pricecheck`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': process.env.WURTH_API_TOKEN!
      },
      body: JSON.stringify({ products }),
      next: { revalidate: 300 }
    })

    if (!response.ok) {
      console.error('Price check API error:', response.status, response.statusText)
      throw new Error(`Price check failed: ${response.status}`)
    }

    const data = await response.json()
    
    if (data.items && Array.isArray(data.items)) {
      const requestQtyMap = products.reduce((acc, product) => {
        acc[product.productid] = product.qty
        return acc
      }, {} as Record<string, number>)

      const transformedPrices: ServerPricingData[] = data.items.map((item: any) => {
        const productid = item.productid
        const qty = requestQtyMap[productid] || item.qty
        const totalPrice = item.extended
        const unitPrice = item.price || item.list_price

        if (qty > 1) {
          return {
            productid,
            price: `$${unitPrice}`,
            unit: item.price_unit,
            full_price: `$${totalPrice.toFixed(2)}`,
            qty
          }
        } else {
          return {
            productid,
            price: `$${totalPrice.toFixed(2)}`,
            unit: item.price_unit,
            full_price: undefined,
            qty
          }
        }
      })
      return transformedPrices
    }
    return null
  } catch (error) {
    console.error('Server-side pricing fetch failed:', error)
    return null
  }
}

async function isAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies()
    // Check for specific authorization cookie
    return cookieStore.has('xid_00924')
  } catch {
    return false
  }
}

export default async function Page() {
  // Check if user is authenticated
  const isAuth = await isAuthenticated()
  
  // Fetch products on server-side
  const serverProducts = await getServerSideProducts()

  
  let serverPricing: ServerPricingData[] | null = null
  if (serverProducts.length > 0) {
    const priceCheckProducts = serverProducts.map(p => ({
      productid: p.productid!,
      qty: p.qty!
    }))
    serverPricing = await getServerSidePricing(priceCheckProducts)
  }

  return (
    <ClientPage 
      initialAuth={isAuth}
      serverProducts={serverProducts}
      serverPricing={serverPricing}
    />
  )
}
