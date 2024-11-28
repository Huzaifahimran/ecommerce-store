import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import Image from 'next/image'

export default function ProductListings() {
  const products = [
    { id: 1, name: "Classic White Tee", price: 29.99, image: "/images/white_tee.webp" },
    { id: 2, name: "Cargo Trousers", price: 59.99, image: "/images/cargo-trousers.webp" },
    { id: 3, name: "Essential Black Hoodie", price: 199.99, image: "/images/hoodie.webp" },
    { id: 4, name: "Summer Dress", price: 49.99, image: "/images/dress2.jpg" },
    { id: 5, name: "Valima Dress", price: 89.99, image: "/images/dress1.jpg" },
    { id: 6, name: "Wool Sweater", price: 79.99, image: "/images/wool_sweater.jpg" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Our Products</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Showing {products.length} products</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="w-full md:w-64 space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
                  <Input 
                    type="text" 
                    placeholder="Search products" 
                    className="w-full bg-gray-50 border-gray-200 focus:border-gray-300 focus:ring-gray-300" 
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Category</h3>
                  <Select>
                    <SelectTrigger className="w-full bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="tops">Tops</SelectItem>
                      <SelectItem value="bottoms">Bottoms</SelectItem>
                      <SelectItem value="dresses">Dresses</SelectItem>
                      <SelectItem value="shoes">Shoes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
                  <Slider defaultValue={[0, 100]} max={200} step={1} className="my-4" />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-600">$0</span>
                    <span className="text-sm text-gray-600">$200</span>
                  </div>
                </div>
                <Button className="w-full bg-pink-600 text-white hover:bg-pink-700 transition-colors">
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="group bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={500}
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                    <Button className="w-full bg-pink-600 text-white hover:bg-pink-700 transition-colors">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <Button variant="outline" className="border-gray-200 hover:bg-gray-800 hover:text-white">
                  Previous
                </Button>
                <Button variant="outline" className="border-gray-200 hover:bg-gray-800 hover:text-white">
                  1
                </Button>
                <Button variant="outline" className="border-gray-200 hover:bg-gray-800 hover:text-white">
                  2
                </Button>
                <Button variant="outline" className="border-gray-200 hover:bg-gray-800 hover:text-white">
                  3
                </Button>
                <Button variant="outline" className="border-gray-200 hover:bg-gray-800 hover:text-white">
                  Next
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

