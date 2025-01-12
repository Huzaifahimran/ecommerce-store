'use client'
import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Truck, RefreshCcw } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  sizes: string[];
  colors: string[];
}

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params); 

  const product: Product = {
    id,
    name: "Classic White Tee",
    price: 29.99,
    description: "Our classic white tee is a wardrobe essential. Made from 100% organic cotton, it's soft, breathable, and perfect for everyday wear. The versatile design pairs well with any outfit, making it a must-have for any fashion-conscious individual.",
    images: ["/images/cargo_trousers.jpg", "/images/cargo-trousers.webp", "/images/hoodie.webp", "/images/tracksuit.jpg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"],
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">

          <div className="md:w-1/2">
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-64 object-contain"
              />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">(121 reviews)</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Select Size</h2>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>{size}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Select Color</h2>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a color" />
                </SelectTrigger>
                <SelectContent>
                  {product.colors.map((color) => (
                    <SelectItem key={color} value={color}>{color}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center mb-6">
              <Input type="number" min="1" defaultValue="1" className="w-20 mr-4" />
              <Button className="flex-grow bg-purple-600 text-white hover:bg-purple-700">Add to Cart</Button>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center mb-4">
                <Truck className="w-6 h-6 text-gray-400 mr-2" />
                <span className="text-gray-600">Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center">
                <RefreshCcw className="w-6 h-6 text-gray-400 mr-2" />
                <span className="text-gray-600">30-day return policy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <p className="text-gray-600">{product.description}</p>
            </TabsContent>
            <TabsContent value="details" className="mt-4">
              <ul className="list-disc list-inside text-gray-600">
                <li>100% organic cotton</li>
                <li>Machine washable</li>
                <li>Regular fit</li>
                <li>Crew neck</li>
                <li>Short sleeves</li>
              </ul>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              <p className="text-gray-600">Customer reviews will be displayed here.</p>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

