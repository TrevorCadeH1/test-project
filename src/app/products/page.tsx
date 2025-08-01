'use client';

import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import { MdOutlineGridOn } from "react-icons/md";
import { MdFormatListBulleted } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const products = [
  {
    id: 1,
    name: "Hinge Accessories Deep Thread System Screws POZI Drive #7 Gauge 1/2\" Length - 1,000 Box Qty",
    category: "Screws",
    sku: "BP6611300HG",
    price: 100.00,
    priceUnit: "1000 Each",
    unitPrice: 0.100,
    description: "Deep thread system screws with POZI drive, #7 gauge, 1/2\" length.",
    image: "Screw.png"
  },
  {
    id: 2,
    name: "110 Deg + CLIP Top BLUMOTION, Soft-Close Hinges For Door Overlays Up To 22 mm, Dowel",
    category: "Hinges",
    sku: "BP73B3580",
    price: 5.140,
    priceUnit: "Each",
    unitPrice: 5.140,
    description: "110 degree soft-close hinges for door overlays up to 22mm, dowel.",
    image: "Hinge.png"
  },
  {
    id: 3,
    name: "CLIP Top BLUMOTION Angled Hinges +45 Deg Angled 110 Deg Opening Hinge with BLUMOTION Soft-Closing, 45mm Boring Pattern, Full Overlay, Nickel-Plated, Inserta",
    category: "Hinges",
    sku: "BP79B3598",
    price: 11.850,
    priceUnit: "Each",
    unitPrice: 11.850,
    description: "Angled hinges with BLUMOTION, 45mm boring pattern, full overlay, nickel-plated, Inserta.",
    image: "Hinge2.png"
  },
  {
    id: 4,
    name: "No. 8 Deep Thread Wood Screw 2\" Length - 1,000 Box Qty",
    category: "Screws",
    sku: "BP8200Z1000",
    price: 50.00,
    priceUnit: "1000 Each",
    unitPrice: 0.050,
    description: "No. 8 deep thread wood screw, 2\" length, 1,000 per box.",
    image: "Screw2.png"
  },
  {
    id: 5,
    name: "Blum TANDEM Plus BLUMOTION 563F Undermount Drawer Slides Full Extension Drawer Slides 18\"",
    category: "Drawer Slides",
    sku: "BP563F4570B",
    price: 36.560,
    priceUnit: "Set",
    unitPrice: 36.560,
    description: "18\" full extension undermount drawer slides with BLUMOTION.",
    image: "Slide.png"
  },
  {
    id: 6,
    name: "95 Deg Onyx Black CLIP Top BLUMOTION Soft-Close Blind Corner Hinges, Inserta",
    category: "Hinges",
    sku: "BP79B9590-ONYX",
    price: 11.120,
    priceUnit: "Each",
    unitPrice: 11.120,
    description: "95 degree onyx black soft-close blind corner hinge, Inserta.",
    image: "Clip.png"
  },
  {
    id: 7,
    name: "18\" 569F HEAVY DUTY TANDEM BLUMOTION SLD - Blum BP569F4570B",
    category: "Drawer Slides",
    sku: "BP569F4570B",
    price: 54.330,
    priceUnit: "Set",
    unitPrice: 54.330,
    description: "18\" 569F heavy duty TANDEM BLUMOTION slide.",
    image: "Slide2.png"
  },
  {
    id: 8,
    name: "18\" 569H HEAVY DUTY TANDEM BLUMOTION SLD - Blum BP569H4570B",
    category: "Drawer Slides",
    sku: "BP569H4570B",
    price: 52.130,
    priceUnit: "Set",
    unitPrice: 52.130,
    description: "18\" 569H heavy duty TANDEM BLUMOTION slide.",
    image: "Slide3.png"
  },
  {
    id: 9,
    name: "Blum TANDEM plus BLUMOTION 563H Undermount Drawer Slides Full Extension Soft-Close, 21\" Length",
    category: "Drawer Slides",
    sku: "BP563H5330B",
    price: 34.250,
    priceUnit: "Set",
    unitPrice: 34.250,
    description: "21\" full extension soft-close undermount drawer slides.",
    image: "Slide4.png"
  }
];

type ViewMode = 'grid' | 'list';

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialSku = searchParams.get('sku') || '';
  const [searchTerm, setSearchTerm] = useState(initialSku);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState('name');
  
  useEffect(() => {
    const sku = searchParams.get('sku');
    if (sku && sku !== searchTerm) {
      setSearchTerm(sku);
    }
  }, [searchParams, searchTerm]);

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'priceDesc':
          return b.price - a.price;
        case 'category':
          return a.category.localeCompare(b.category);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48">
        <Image
          src={`/${product.image}`}
          alt={product.name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 min-h-[3rem] overflow-hidden">
          <span className="block leading-tight">
            {product.name.length > 80 ? `${product.name.substring(0, 80)}...` : product.name}
          </span>
        </h3>
        <p className="text-sm text-gray-600 mb-2">{product.sku}</p>
        <p className="text-sm text-gray-600 mb-3 overflow-hidden">
          <span className="block leading-5 max-h-10">
            {product.description.length > 120 ? `${product.description.substring(0, 120)}...` : product.description}
          </span>
        </p>
        <div className="flex justify-between items-center mb-3">
          <div>
            <div className="text-lg font-bold text-gray-900">
              {formatPrice(product.price)}
            </div>
            <div className="text-xs text-gray-500">
              per {product.priceUnit}
            </div>
            {product.unitPrice !== product.price && (
              <div className="text-xs text-gray-500">
                Unit: {formatPrice(product.unitPrice)}
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-black text-white px-4 py-2 rounded-md hover:cursor-pointer hover:bg-black/80 transition-colors duration-200 flex items-center justify-center gap-2">
            <MdOutlineShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

  const ProductListItem = ({ product }: { product: typeof products[0] }) => (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="flex">
        <div className="w-32 h-32 flex-shrink-0">
          <Image
            src={`/${product.image}`}
            alt={product.name}
            width={128}
            height={128}
            className="object-contain w-full h-full p-2"
          />
        </div>
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-gray-900 flex-1 mr-4">
              {product.name}
            </h3>
            <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded whitespace-nowrap">
              {product.category}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-2">{product.sku}</p>
          <p className="text-sm text-gray-600 mb-3">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-lg font-bold text-gray-900">
                {formatPrice(product.price)}
              </div>
              <div className="text-xs text-gray-500">
                per {product.priceUnit}
                {product.unitPrice !== product.price && (
                  <span> • Unit: {formatPrice(product.unitPrice)}</span>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-black text-white px-4 py-2 rounded-md hover:cursor-pointer hover:bg-black/80 transition-colors duration-200 flex items-center gap-2">
                <MdOutlineShoppingCart size={16} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Products</h1>
          <p className="text-gray-600">
            Browse our selection of high-quality hardware and accessories
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative h-full">
                <CiSearch className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products, SKUs, or descriptions..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md h-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-48 flex items-center h-10">
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md h-10"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="lg:w-48 flex items-center h-10">
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md h-10"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Sort by Name</option>
                <option value="price">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="category">Category</option>
              </select>
            </div>

            {/* View Toggle */}
            <div className="grid grid-cols-2 border border-gray-300 rounded-md h-10 overflow-hidden">
              <button
                className={`flex items-center justify-center px-3 py-2 h-full ${viewMode === 'grid' ? 'bg-red-100 text-red-600' : 'text-gray-600'} rounded-l-md hover:cursor-pointer transition-colors duration-200`}
                onClick={() => setViewMode('grid')}
              >
                <MdOutlineGridOn size={20} />
              </button>
              <button
                className={`flex items-center justify-center px-3 py-2 h-full ${viewMode === 'list' ? 'bg-red-100 text-red-600' : 'text-gray-600'} rounded-r-md hover:cursor-pointer transition-colors duration-200`}
                onClick={() => setViewMode('list')}
              >
                <MdFormatListBulleted size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        ) : (
          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
          }>
            {filteredProducts.map(product => (
              viewMode === 'grid'
                ? <ProductCard key={product.id} product={product} />
                : <ProductListItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  );
}