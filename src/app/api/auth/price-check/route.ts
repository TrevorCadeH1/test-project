import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { products, token } = await request.json()
    
    if (!products || !Array.isArray(products) || products.length === 0) {
      return Response.json(
        { success: false, message: 'Products array is required' },
        { status: 400 }
      )
    }

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'X-AUTH-TOKEN': 'e89d6c2370505652668abf9cc40194bc'
    }

    // Add authorization header if token is provided
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    const response = await fetch(
      'https://wbscdev.wurthbaersupply.com/rest/pricecheck',
      {
        method: 'POST',
        headers,
        body: JSON.stringify({ products })
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      return Response.json(
        { success: false, message: `Price check failed: ${response.status}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log('Price check response data:', data)

    const prices = Array.isArray(data) ? data : (data.items || data.products || [])

    const requestQtyMap = products.reduce((acc, product) => {
      acc[product.productid] = product.qty
      return acc
    }, {} as Record<string, number>)

    const transformedPrices = prices.map((item: any) => {
      const productid = item.productid || item.id
      const qty = requestQtyMap[productid] || item.qty || item.quantity || 1
      const unitPrice = item.price || item.unitPrice || 0.1
      
      let fullPrice = item.full_price
      if (!token && qty > 1) {
        fullPrice = (unitPrice * qty).toFixed(0)
      }

      return {
        productid,
        price: `$${unitPrice}`,
        unit: item.price_unit || item.unit || item.uom || 'Each',
        full_price: fullPrice ? `$${fullPrice}` : undefined,
        qty
      }
    })

    return Response.json({
      success: true,
      prices: transformedPrices
    })

  } catch (error) {
    return Response.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}