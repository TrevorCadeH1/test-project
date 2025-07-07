'use client'

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import SimpleCarousel from "./carousel"
import { IoIosArrowRoundForward } from "react-icons/io"
import { FiDownload } from "react-icons/fi"
import { MdFavoriteBorder } from "react-icons/md"
import Footer from "./footer"
import Header from "./header"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


type Product = {
  id: string
  name: string
  manufacturerNumber: string
  imageUrl: string
  price: string
  unit: string
}

const pricing: Record<string, { price: string; unit: string }> = {
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

export default function CareersPage() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [products, setProducts] = useState<Product[]>([])
    const blumScrollRef = useRef<HTMLDivElement>(null)
    const DiscountScrollRef = useRef<HTMLDivElement>(null)
    const images = ['/web1.avif', '/web2.avif', '/web3.avif', '/web4.avif']

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch(
                    'https://wbscdev.wurthbaersupply.com/rest/getrandomgroups',
                    {
                        method: 'GET',
                        headers: {
                            'X-AUTH-TOKEN': 'e89d6c2370505652668abf9cc40194bc',
                        }
                    }
                )
                if (!res.ok) {
                    throw new Error(`API error: ${res.status}`)
                }

                const data = await res.json()
                const allItems: any[] = Array.isArray(data.groups)
                    ? data.groups.flatMap((group: any) => group.itemSkuList || [])
                    : []

                if (allItems.length > 0) {
                    
                    const apiProducts = allItems.slice(0, 9).map((item, idx) => {
                        const key = (idx + 1).toString()
                        const { price, unit } = pricing[key] || { price: "$0", unit: "Each" }

                        return {
                            id: item.id?.toString() || `product-${idx}`,
                            name: item.item_name || `Product ${idx + 1}`, 
                            manufacturerNumber: item.txt_wurth_lac_item || `MFG-${idx + 1}`,
                            imageUrl: item.img || '/wswu1.png', 
                            price,
                            unit
                        } as Product
                    })
                    setProducts(apiProducts)
                } else {
                    const fallbackProducts = Array.from({ length: 9 }, (_, idx) => {
                        const key = (idx + 1).toString()
                        const { price, unit } = pricing[key]
                        return {
                            id: `fallback-${idx + 1}`,
                            name: `Blum Hardware Product ${idx + 1}`,
                            manufacturerNumber: `BLUM-${idx + 1}`,
                            imageUrl: '/wswu1.png',
                            price,
                            unit
                        }
                    })
                    setProducts(fallbackProducts)
                }
            } catch (error) {
                const fallbackProducts = Array.from({ length: 9 }, (_, idx) => {
                    const key = (idx + 1).toString()
                    const { price, unit } = pricing[key]
                    return {
                        id: `error-${idx + 1}`,
                        name: `Blum Hardware Product ${idx + 1}`,
                        manufacturerNumber: `BLUM-${idx + 1}`,
                        imageUrl: '/wswu1.png',
                        price,
                        unit
                    }
                })
                setProducts(fallbackProducts)
            }
        }

        fetchProducts()
    }, [])

    const getPerEachPrice = (price: string, unit: string) => {
        const num = parseFloat(price.replace(/[$,]/g, ''))
        const match = unit.match(/(\d+)/)
        const count = match ? parseInt(match[1], 10) : 1
        return `$${(num / count).toFixed(2)}`
    }

    return (
        <div className="responsive-max-width">
            {/* Header Section */}
            <Header />
            <div className="bg-gradient-to-t from-stone-900 to-amber-900 p-2 md:pb-1 md:pl-6 md:pr-6 md:pt-4">
        
            {/* First Row: Carousel Section */}
            <div className="responsive-max-width grid grid-cols-1 gap-2">
                <div className="w-full">
                    <SimpleCarousel
                        images={images}
                        height="aspect-[16/5] md:h-[600px]"
                        className="w-full max-w-full mx-auto"
                        currentSlide={currentSlide}
                        setCurrentSlide={setCurrentSlide}
                    />
                </div>
            </div>
            <div className="flex justify-center space-x-2 py-3 md:py-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors hover:cursor-pointer ${
                            index === currentSlide
                                ? 'bg-white'
                                : 'border border-white hover:bg-amber-950/50'
                        }`}
                    />
                ))}
            </div>
        </div>

        {/* Second Row: Three Images Section */}
        <div className="responsive-max-width grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-8 px-2 md:px-0">
            <div className="aspect-square">
                <Image
                    src="/web6.png"
                    alt="Web 6"
                    width={300}
                    height={300}
                    className="w-full h-full md:w-[600px] md:h-[580px] md:ml-3 object-cover border-b-60 border-neutral-800 rounded"
                />
            </div>
            <div className="aspect-square relative">
                <Image
                    src="/web4.png"
                    alt="Web 4"
                    width={300}
                    height={300}
                    className="w-full h-full md:w-[600px] md:h-[580px] object-cover border-b-60 border-neutral-800 rounded"
                />
                <Link href="https://baersupply.vercel.app/category/2220/sawstop-and-accessories">
                <button className="absolute bottom-4 -ml-20 md:mb-1 md:ml-0 md:bottom-13 left-1/2 md:left-20 transform -translate-x-1/2 font-semibold bg-red-600 text-white px-3 py-1.5 rounded flex items-center gap-2 hover:cursor-pointer text-sm print:hidden">
                    Shop Now <IoIosArrowRoundForward className="text-xl md:text-2xl" />
                </button>
                </Link>
                <a
                    href="/web7.pdf"
                    target="_blank"
                >
                <button className="absolute bottom-2 right-2 mb-1 md:mb-0 md:bottom-14 md:right-7 text-white font-semibold flex items-center gap-2 bg-neutral-800 px-3 py-1.5 rounded hover:cursor-pointer text-sm print:hidden">
                    Download Promo <FiDownload className="" />
                </button>
                </a>
            </div>
            <div className="aspect-square relative">
                <Image
                    src="/web5.avif"
                    alt="Web 5"
                    width={300}
                    height={300}
                    className="w-full h-full md:w-[600px] md:h-[580px] object-cover border-b-60 border-neutral-800 rounded md:-ml-1"
                />
                <Link href="https://www.compusystems.com/servlet/ar?evt_uid=270&oi=u%2BUw2R3QYSTHoIiGjo9vog%3D%3D&company_code=WUR231">
                <button className="absolute bottom-4 md:bottom-14 left-1/2 md:left-20 transform -translate-x-1/2 font-semibold bg-red-600 text-white px-3 py-1.5 rounded flex items-center gap-2 hover:cursor-pointer text-sm print:hidden">
                    Shop Now <IoIosArrowRoundForward className="text-xl md:text-2xl" />
                </button>
                </Link>
            </div>
        </div>

        {/* Third Row: Daily Discounts Sections */}
        <div className="responsive-max-width mt-4 md:mt-4 flex items-center justify-center">
            <div className="relative pl-2 md:pl-10 w-full mr-2 md:mr-20">
                <h1 className="text-2xl md:text-5xl font-bold text-black text-center md:text-left md:ml-190 mb-6 md:mb-10">
                    Daily Discounts
                </h1>
            <div className="relative mt-4 md:mt-8 pl-2 md:pl-10 pr-2 md:pr-8">
            <button
                type="button"
                className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:cursor-pointer hover:bg-white hover:border-black shadow rounded-full p-2 border border-neutral-200 transition disabled:opacity-30 print:hidden"
                onClick={() => DiscountScrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
            >
                <IoIosArrowBack className ="w-[25px] h-[25px]"/>
            </button>

            <div
                ref={DiscountScrollRef}
                id="discount-product-scroll"
                className="flex gap-4 overflow-x-auto md:pr-10 md:pl-2 hide-scrollbar"
                style={{ scrollBehavior: 'smooth' }}
            >
                {products.length ? (
                products.map(p => (
                    <div
                    key={p.id}
                    className="bg-white rounded-xl border border-neutral-200 w-[200px] md:w-[250px] flex-shrink-0 flex flex-col items-center p-3 md:p-4"
                    >
                    <Image
                        src={p.imageUrl}
                        alt={p.name}
                        width={150}
                        height={150}
                        className="w-32 md:w-40 h-40 md:h-50 object-contain mb-2"
                    />
                    <div className="flex items-center w-full mb-2">
                        <span className="bg-gray-100 text-black text-xs px-2 py-1 rounded font-medium mr-auto">
                        Blum, Inc.
                        </span>
                        <button className="border border-neutral-400 rounded px-2 md:px-4 py-1 text-xs md:text-sm text-black flex hover:bg-neutral-100 items-center print:hidden">
                        <input
                            type="checkbox"
                            className="mr-1 md:mr-2 w-3 h-3 rounded-full border-1 border-neutral-400 appearance-none checked:bg-black transition-colors hover:cursor-pointer"
                        />
                        Compare
                        </button>
                    </div>
                    <div className="text-black text-xs md:text-sm text-start leading-tight mt-2 line-clamp-2">
                        {p.name}
                    </div>
                    <div className="text-neutral-500 text-xs md:text-sm text-left w-full">
                        {p.manufacturerNumber}
                    </div>
                    <div className="flex flex-col items- w-full text-left">
                        <span className="text-black font-light text-base md:text-lg">
                            {p.price} <span className="font-light text-sm md:text-base">/ {p.unit}</span>
                        </span>
                        <span className="text-black font-light text-sm md:text-md">
                            {getPerEachPrice(p.price, p.unit)}
                            <span className="text-black text-sm md:text-md">/Each</span>
                        </span>
                    </div>
                    <button className="w-full bg-black text-white py-2 rounded font-semibold mt-2 mb-2 hover:cursor-pointer hover:bg-black/80 transition text-sm print:hidden">
                        Add to cart
                    </button>
                    <div className="flex items-center justify-between w-full print:hidden">
                        <button className="w-[130px] md:w-[170px] border border-neutral-300 text-black py-2 rounded flex items-center hover:cursor-pointer justify-center hover:bg-neutral-100 transition text-xs md:text-sm">
                        Add to proposal
                        </button>
                        <button>
                        <MdFavoriteBorder className="text-xl md:text-2xl hover:cursor-pointer hover:bg-neutral-100 transition-colors" />
                        </button>
                    </div>
                    </div>
                ))
                ) : (
                <div className="text-black p-4">Loading products…</div>
                )}
            </div>

            <button
                type="button"
                className="hidden md:block absolute -right-7 top-1/2 -translate-y-1/2 bg-white/80 hover:cursor-pointer hover:bg-white hover:border-black shadow rounded-full p-2 border border-neutral-300 transition disabled:opacity-30 print:hidden"
            onClick={() => DiscountScrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
            >
                <IoIosArrowForward className ="w-[25px] h-[25px]"/>
            </button>
            </div>
            </div>
        </div>
    
        {/* Fourth Row: Blum Products Section */}
        <div className="responsive-max-width bg-orange-500 mt-4 md:mt-8 w-full h-auto md:h-[1325px]">
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 mt-4 gap-4 md:gap-0">
                <div className="flex items-center justify-center rounded-lg mr-2 md:mr-0 md:rounded-l-lg ml-2 md:ml-10 mt-4 md:mt-7 bg-orange-blend w-auto md:w-[1000px] h-auto md:h-[650px]">
                    <div className="flex flex-col justify-center items-start px-4 md:px-10 py-6 md:py-8 w-full">
                        <Image
                            src="/blum.png"
                            alt="Blum Logo"
                            width={120}
                            height={50}
                            className="mb-6 md:mb-20 w-20 md:w-30 h-auto"
                        />
                        <h1 className="text-white font-bold text-xl md:text-[2.5rem] mb-4 md:mb-5 leading-tight">
                            Blum: Pioneering Solutions for Today's Cabinetry Demands
                        </h1>
                        <p className="text-white text-sm md:text-lg mb-6 md:mb-40">
                            Blum is a worldwide leader in drawer and door motion technology, recognized for setting the highest standards in quality, innovation, and user-focused design within the cabinet hardware industry. With a focus on advanced motion systems—such as drawer runners, hinges, and lift mechanisms—Blum transforms everyday cabinetry into a seamless and efficient experience throughout the home. Its hinge hardware and drawer slide solutions are industry benchmarks, known for their exceptional precision, long-lasting durability, and smooth, quiet performance. Always at the cutting edge, Blum continually redefines motion technology with pioneering products that combine engineering excellence, ergonomic functionality, and intuitive design.
                        </p>
                    </div>
                </div>
                    
                <div className="flex items-center justify-center rounded-lg md:rounded-r-lg mr-2 md:-mr-12 mt-0 md:mt-7">
                    <Image
                        src="/blum2.png"
                        alt="Blum Products"
                        width={600}
                        height={600}
                        className="w-full ml-2 md:ml-0 h-[300px] md:w-[820px] md:h-[650px] object-cover rounded-lg md:rounded-r-lg md:rounded-l-none"
                    />
                </div>
            </div>

        {/* Fourth Row Part 2: Blum Product Cards Section */}
        <div className="responsive-max-width relative mt-4 md:mt-8 pl-2 md:pl-12 pr-2 md:pr-11">
        <button
            type="button"
            className="hidden md:block absolute ml-1 left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:cursor-pointer hover:bg-white hover:border-black shadow rounded-full p-2 border border-neutral-300 transition disabled:opacity-30 print:hidden"
            onClick={() => blumScrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
        >
            <IoIosArrowBack className ="w-[25px] h-[25px]"/>
        </button>

        <div
            ref={blumScrollRef}
            id="blum-product-scroll"
            className="flex gap-4 overflow-x-auto md:pr-10 hide-scrollbar"
            style={{ scrollBehavior: 'smooth' }}
        >
            {products.length ? (
            products.map(p => (
                <div
                key={p.id}
                className="bg-white rounded-xl w-[200px] md:w-[250px] flex-shrink-0 flex flex-col items-center p-3 md:p-4"
                >
                <Image
                    src={p.imageUrl}
                    alt={p.name}
                    width={150}
                    height={150}
                    className="w-32 md:w-40 h-40 md:h-50 object-contain mb-2"
                />
                <div className="flex items-center w-full mb-2">
                    <span className="bg-gray-100 text-black text-xs px-2 py-1 rounded font-medium mr-auto">
                    Blum, Inc.
                    </span>
                    <button className="border border-neutral-400 rounded px-2 md:px-4 py-1 text-xs md:text-sm text-black flex hover:bg-neutral-100 items-center print:hidden">
                    <input
                        type="checkbox"
                        className="mr-1 md:mr-2 w-3 h-3 rounded-full border-1 border-neutral-400 appearance-none checked:bg-black transition-colors hover:cursor-pointer"
                    />
                    Compare
                    </button>
                </div>
                <div className="text-black text-xs md:text-sm text-start leading-tight mt-2 line-clamp-2">
                    {p.name}
                </div>
                <div className="text-neutral-500 text-xs md:text-sm text-left w-full">
                    {p.manufacturerNumber}
                </div>
                <div className="flex flex-col items- w-full text-left">
                    <span className="text-black font-light text-base md:text-lg">
                        {p.price} <span className="font-light text-sm md:text-base">/ {p.unit}</span>
                    </span>
                    <span className="text-black font-light text-sm md:text-md">
                        {getPerEachPrice(p.price, p.unit)}
                        <span className="text-black text-sm md:text-md">/Each</span>
                    </span>
                </div>
                <button className="w-full bg-black text-white py-2 rounded font-semibold mt-2 mb-2 hover:bg-black/80 transition text-sm print:hidden">
                    Add to cart
                </button>
                <div className="flex items-center justify-between w-full print:hidden">
                    <button className="w-[130px] md:w-[170px] border border-neutral-300 text-black py-2 rounded flex items-center justify-center hover:bg-neutral-100 transition text-xs md:text-sm">
                    Add to proposal
                    </button>
                    <button>
                    <MdFavoriteBorder className="text-xl md:text-2xl hover:cursor-pointer hover:bg-neutral-100 transition-colors" />
                    </button>
                </div>
                </div>
            ))
            ) : (
            <div className="text-black p-4">Loading products…</div>
            )}
        </div>

        <button
            type="button"
            className="hidden md:block absolute right-0 top-1/2 mr-0.25 -translate-y-1/2 bg-white/80 hover:cursor-pointer hover:bg-white hover:border-black shadow rounded-full p-2 border border-neutral-300 transition disabled:opacity-30 print:hidden"
            onClick={() => blumScrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
        >
            <IoIosArrowForward className ="w-[25px] h-[25px]"/>
        </button>

        <div className="flex items-center justify-center mt-6 md:mt-10 ml-2 md:ml-10 pb-4 md:pb-0">
            <Link href="https://baersupply.vercel.app/brand/331830/Blum-Inc.-m-331830">
            <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:cursor-pointer hover:bg-white/95 print:hidden">
                Shop Blum
            </button>
            </Link>
        </div>
        </div>
        </div>

        {/* Fifth Row: Featured Categories Section */}
        <div className="responsive-max-width mt-20 flex items-center justify-center">
            <h1 className="text-2xl md:text-5xl font-bold text-black">
                Featured Categories
            </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-0 mt-8 md:mt-20 px-2 md:px-0">
            <div className="flex flex-col items-center justify-center mx-2 md:ml-5 my-2 md:my-0">
                <div className="bg-gray-blend rounded-full flex items-center justify-center w-[90px] h-[90px] md:w-[170px] md:h-[170px]">
                    <Link href="https://baersupply.vercel.app/category/1874/abrasives" className="print:hidden">
                    <Image
                        src="/abrasives.png"
                        alt="Abrasives"
                        width={90}
                        height={90}
                        className="rounded-full object-contain bg-gray-100 w-[70px] h-[70px] md:w-[120px] md:h-[120px]"
                    />
                    </Link>
                </div>
                <span className="mt-2 text-center font-medium text-black text-xs md:text-base">Abrasives</span>
            </div>
            <div className="flex flex-col items-center justify-center mx-2 md:ml-5 my-2 md:my-0">
                <div className="bg-gray-blend rounded-full flex items-center justify-center w-[90px] h-[90px] md:w-[170px] md:h-[170px]">
                    <Link href="https://baersupply.vercel.app/category/1896/wood-glues" className="print:hidden">
                    <Image
                        src="/wood-glue.png"
                        alt="Wood-glue"
                        width={90}
                        height={90}
                        className="rounded-full object-none bg-gray-100 w-[70px] h-[70px] md:w-[120px] md:h-[120px]"
                    />
                    </Link>
                </div>
                <span className="mt-2 text-center font-medium text-black text-xs md:text-base">Wood Glues</span>
            </div>
            <div className="flex flex-col items-center justify-center mx-2 md:ml-5 my-2 md:my-0">
                <div className="bg-gray-blend rounded-full flex items-center justify-center w-[90px] h-[90px] md:w-[170px] md:h-[170px]">
                    <Link href="https://baersupply.vercel.app/category/2240/saw-blades" className="print:hidden">
                    <Image
                        src="/saw-blades.avif"
                        alt="Saw-blades"
                        width={90}
                        height={90}
                        className="rounded-full object-contain bg-gray-100 w-[70px] h-[70px] md:w-[120px] md:h-[120px]"
                    />
                    </Link>
                </div>
                <span className="mt-2 text-center font-medium text-black text-xs md:text-base">Saw Blades</span>
            </div>
            <div className="flex flex-col items-center justify-center mx-2 md:ml-5 my-2 md:my-0">
                <div className="bg-gray-blend rounded-full flex items-center justify-center w-[90px] h-[90px] md:w-[170px] md:h-[170px]">
                    <Link href="https://baersupply.vercel.app/category/2132/hinges" className="print:hidden">
                    <Image
                        src="/hinges.png"
                        alt="Hinges"
                        width={90}
                        height={90}
                        className="rounded-full object-contain bg-gray-100 w-[70px] h-[70px] md:w-[120px] md:h-[120px]"
                    />
                    </Link>
                </div>
                <span className="mt-2 text-center font-medium text-black text-xs md:text-base">Hinges</span>
            </div>
            <div className="flex flex-col items-center justify-center mx-2 md:ml-5 my-2 md:my-0">
                <div className="bg-gray-blend rounded-full flex items-center justify-center w-[90px] h-[90px] md:w-[170px] md:h-[170px]">
                    <Link href="https://baersupply.vercel.app/category/2149/base-and-wall-cabinet-pull-out-systems" className="print:hidden">
                    <Image
                        src="/wall-cab.png"
                        alt="Wall-cab"
                        width={90}
                        height={90}
                        className="rounded-full object-contain bg-gray-100 w-[70px] h-[70px] md:w-[120px] md:h-[120px]"
                    />
                    </Link>
                </div>
                <span className="mt-2 text-center font-medium text-black text-xs md:text-base">Base & Wall Cabinet Pull-Out Systems</span>
            </div>
            <div className="flex flex-col items-center justify-center mx-2 md:ml-5 my-2 md:my-0">
                <div className="bg-gray-blend rounded-full flex items-center justify-center w-[90px] h-[90px] md:w-[170px] md:h-[170px]">
                    <Link href="https://baersupply.vercel.app/category/2169/trash-pull-outs" className="print:hidden">
                    <Image
                        src="/trash-pull-outs.png"
                        alt="Trash-pull-outs"
                        width={90}
                        height={90}
                        className="rounded-full object-contain bg-gray-100 w-[70px] h-[70px] md:w-[120px] md:h-[120px]"
                    />
                    </Link>
                </div>
                <span className="mt-2 text-center font-medium text-black text-xs md:text-base">Trash Pull-Outs</span>
            </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-0 mt-4 md:mt-8 px-2 md:ml-40">
            <div className="flex flex-col items-center justify-center mx-2 md:-ml-10 my-2 md:my-0">
                <div className="bg-gray-blend rounded-full flex items-center justify-center w-[90px] h-[90px] md:w-[170px] md:h-[170px]">
                    <Link href="https://baersupply.vercel.app/category/2184/lighting" className="print:hidden">
                    <Image
                        src="/lighting.png"
                        alt="Lighting"
                        width={90}
                        height={90}
                        className="rounded-full object-contain bg-gray-100 w-[70px] h-[70px] md:w-[120px] md:h-[120px]"
                    />
                    </Link>
                </div>
                <span className="mt-2 text-center font-medium text-black text-xs md:text-base">Lighting</span>
            </div>
            <div className="flex flex-col items-center justify-center mx-2 md:-ml-22 my-2 md:my-0">
                <div className="bg-gray-blend rounded-full flex items-center justify-center w-[90px] h-[90px] md:w-[170px] md:h-[170px]">
                    <Link href="https://baersupply.vercel.app/category/2258/shelf-closet-and-garage-organization" className="print:hidden">
                    <Image
                        src="/shelf-closet.png"
                        alt="Shelf-closet"
                        width={90}
                        height={90}
                        className="rounded-full object-contain bg-gray-100 w-[70px] h-[70px] md:w-[120px] md:h-[120px]"
                    />
                    </Link>
                </div>
                <span className="mt-2 text-center font-medium text-black text-xs md:text-base">Shelf, Closet & Garage Organization</span>
            </div>
            <div className="flex flex-col items-center justify-center mx-2 md:-ml-30 my-2 md:my-0">
                <div className="bg-gray-blend rounded-full flex items-center justify-center w-[90px] h-[90px] md:w-[170px] md:h-[170px]">
                    <Link href="https://baersupply.vercel.app/category/2278/shop-and-safety-supplies" className="print:hidden">
                    <Image
                        src="/shop-safety.png"
                        alt="Shop-safety"
                        width={90}
                        height={90}
                        className="rounded-full object-contain bg-gray-100 w-[70px] h-[70px] md:w-[120px] md:h-[120px]"
                    />
                    </Link>
                </div>
                <span className="mt-2 text-center font-medium text-black text-xs md:text-base">Shop and Safety Supplies</span>
            </div>
            <div className="flex flex-col items-center justify-center mx-2 md:-ml-45 my-2 md:my-0">
                <div className="bg-gray-blend rounded-full flex items-center justify-center w-[90px] h-[90px] md:w-[170px] md:h-[170px]">
                    <Link href="https://baersupply.vercel.app/category/2334/spray-equipment" className="print:hidden">
                    <Image
                        src="/spray-equipment.png"
                        alt="Spray-equipment"
                        width={90}
                        height={90}
                        className="rounded-full object-contain bg-gray-100 w-[70px] h-[70px] md:w-[120px] md:h-[120px]"
                    />
                    </Link>
                </div>
                <span className="mt-2 text-center font-medium text-black text-xs md:text-base">Spray Equipment</span>
            </div>
            <div className="flex flex-col items-center justify-center mx-2 md:-ml-60 my-2 md:my-0">
                <div className="bg-gray-blend rounded-full flex items-center justify-center w-[90px] h-[90px] md:w-[170px] md:h-[170px]">
                    <Link href="https://baersupply.vercel.app/category/2175/lift-systems-lid-supports-and-stays" className="print:hidden">
                    <Image
                        src="/lift-systems.png"
                        alt="Lift-systems"
                        width={90}
                        height={90}
                        className="rounded-full object-contain bg-gray-100 w-[70px] h-[70px] md:w-[120px] md:h-[120px]"
                    />
                    </Link>
                </div>
                <span className="mt-2 text-center font-medium text-black text-xs md:text-base">Lift Systems, Lid Supports and Stays</span>
            </div>
        </div>

    {/* Sixth Row: Why Shop With Us? Section */}
    <div className="responsive-max-width mt-10 md:mt-30 flex items-center justify-center">
        <h1 className="text-2xl md:text-5xl font-bold text-black">
            Why Shop With Us?
        </h1>
    </div>
    <div className="flex flex-col md:flex-row gap-2 md:gap-7 mt-6 md:mt-12 items-stretch justify-center">
        <div className="bg-blue-blend rounded-2xl w-full md:w-[425px] h-[120px] md:h-[175px] flex flex-col justify-between p-2 md:p-4 mb-2 md:mb-0">
            <div className="flex items-start">
                <Image
                    src="/wswu1.png"
                    alt="Buy Your Way"
                    width={48}
                    height={48}
                    className="ml-2 mr-2 md:mr-4 rounded-md w-8 h-8 md:w-16 md:h-16"
                />
                <span className="text-blue-700/75 text-base md:text-[1.75rem] ml-2 md:ml-4 mt-2 md:mt-4">BUY "YOUR WAY"</span>
            </div>
            <div className="ml-2 md:ml-4 mt-2 md:mt-4 text-black text-xs md:text-base">
                Order 24/7 by web, contact our sales reps or<br /> call by phone.
            </div>
        </div>
        <div className="bg-blue-blend rounded-2xl w-full md:w-[425px] h-[120px] md:h-[175px] flex flex-col justify-between p-2 md:p-4 mb-2 md:mb-0">
            <div className="flex items-start">
                <Image
                    src="/wswu2.png"
                    alt="Buy Your Way"
                    width={48}
                    height={48}
                    className="ml-2 mr-2 md:mr-4 rounded-md w-8 h-8 md:w-16 md:h-16"
                />
                <span className="text-blue-700/75 text-base md:text-[1.75rem] ml-2 md:ml-4 mt-2 md:mt-4">ONE STOP SHOP</span>
            </div>
            <div className="ml-2 md:ml-4 mt-2 md:mb-4 text-black text-xs md:text-base">
                What you need, when you need it, all in one place.
            </div>
        </div>
        <div className="bg-blue-blend rounded-2xl w-full md:w-[425px] h-[120px] md:h-[175px] flex flex-col justify-between p-2 md:p-4 mb-2 md:mb-0">
            <div className="flex items-start">
                <Image
                    src="/wswu3.png"
                    alt="Buy Your Way"
                    width={48}
                    height={48}
                    className="ml-2 mr-2 md:mr-4 rounded-md w-8 h-8 md:w-16 md:h-16"
                />
                <span className="text-blue-700/75 text-base md:text-[1.75rem] ml-2 md:ml-4 mt-2 md:mt-4">NEXT DAY DELIVERY</span>
            </div>
            <div className="ml-2 md:ml-4 mt-2 md:mb-4 text-black text-xs md:text-base">
                Orders are shipped next day.
            </div>
        </div>
        <div className="bg-blue-blend rounded-2xl w-full md:w-[425px] h-[120px] md:h-[175px] flex flex-col justify-between p-2 md:p-4 mb-2 md:mb-0">
            <div className="flex items-start">
                <Image
                    src="/wswu4.png"
                    alt="Buy Your Way"
                    width={48}
                    height={48}
                    className="ml-2 mr-2 md:mr-4 rounded-md w-8 h-8 md:w-16 md:h-16"
                />
                <span className="text-blue-700/75 text-base md:text-[1.6rem] ml-2 md:ml-0 mt-2 md:mt-4 text-nowrap">EXPERT SUPPORT TEAM</span>
            </div>
            <div className="ml-2 md:ml-4 mt-2 md:mt-4 text-black text-xs md:text-base">
                Advice and support from knowledagble<br /> proffesionals.
            </div>
        </div>
    </div>

    {/* Seventh Row: Footer Section */}
    <Footer />
    </div>
)
};