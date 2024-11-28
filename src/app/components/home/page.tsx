'use client'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Info, Mail, Instagram, Twitter, Facebook } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-sansleading-tight mb-4">
                Discover Your <span className="text-yellow-300">Unique Style</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-xl sm:text-2xl md:text-3xl text-white">
                {`Elevate your wardrobe with Vestis Aura's curated collection.`}
              </p>
              <div className="mt-10 flex justify-center">
                <Button className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-8 py-3 rounded-full transition-all transform hover:scale-105" onClick={()=>{router.push('/products')}}>
                  Explore Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Featured Collections
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
                  <Image
                    src={`/images/dress1.jpg`}
                    alt={`Featured product ${item}`}
                    width={600}
                    height={600}
                    className="w-full h-[380px] object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Trendsetter Collection</h3>
                    <p className="text-gray-700 font-medium text-lg mb-4">$129.99</p>
                    <Button variant="outline" className="w-full" onClick={()=>router.push(`/products`)}>
                      View Collection
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-purple-50 to-pink-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                About Vestis Aura
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
                We believe in the power of fashion to express individuality and boost confidence. Our carefully curated collection brings you the latest trends and timeless classics, ensuring you always look and feel your best.
              </p>
              <Button variant="outline" className="mt-8 text-lg px-8 py-3 rounded-full transition-all transform hover:scale-105 border-purple-300 text-purple-700 hover:bg-purple-100">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-pink-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
                  <ShoppingBag size={32} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Curated Collections</h3>
                <p className="text-gray-600">Handpicked styles for every occasion</p>
              </div>
              <div className="text-center">
                <div className="bg-pink-100 rounded-full p-4 inline-block mb-4">
                  <Info size={32} className="text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Advice</h3>
                <p className="text-gray-600">Personalized styling tips from our fashion experts</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full p-4 inline-block mb-4">
                  <Mail size={32} className="text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Returns</h3>
                <p className="text-gray-600">Hassle-free returns within 30 days</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 text-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-800">Vestis Aura</h3>
              <p className="text-gray-600 mb-6">Stay stylish, stay unique</p>
              <div className="flex space-x-4">
                <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">
                  <Instagram size={24} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">
                  <Twitter size={24} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">
                  <Facebook size={24} />
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-purple-800">Subscribe to Our Newsletter</h4>
              <form className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow bg-white text-gray-800 placeholder-gray-500 border-purple-200 focus:border-purple-400"
                />
                <Button type="submit" className="px-8 py-3 rounded-full transition-all transform hover:scale-105 bg-purple-600 text-white hover:bg-purple-700">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-purple-100 text-center text-gray-600">            
            <p>&copy; 2023 Vestis Aura. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

