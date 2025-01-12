"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import MinimumDistanceSlider from "../elements/Slider";

export default function ProductListings() {
  const initialProducts = [
    {
      id: 1,
      name: "Classic White Tee",
      price: 29.99,
      image: "/images/white_tee.webp",
    },
    {
      id: 2,
      name: "Cargo Trousers",
      price: 59.99,
      image: "/images/cargo-trousers.webp",
    },
    {
      id: 3,
      name: "Essential Black Hoodie",
      price: 199.99,
      image: "/images/hoodie.webp",
    },
    { id: 4, name: "Summer Dress", price: 49.99, image: "/images/dress2.jpg" },
    { id: 5, name: "Valima Dress", price: 89.99, image: "/images/dress1.jpg" },
    {
      id: 6,
      name: "Wool Sweater",
      price: 79.99,
      image: "/images/wool_sweater.jpg",
    },
  ];
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchMoreProducts = useCallback(async () => {
    setLoading(true);
    setTimeout(() => {
      const newProducts = [
        {
          id: 7,
          name: "Classic White Tee",
          price: 29.99,
          image: "/images/white_tee.webp",
        },
        {
          id: 8,
          name: "Cargo Trousers",
          price: 59.99,
          image: "/images/cargo-trousers.webp",
        },
        {
          id: 9,
          name: "Essential Black Hoodie",
          price: 199.99,
          image: "/images/hoodie.webp",
        },
        {
          id: 10,
          name: "Summer Dress",
          price: 49.99,
          image: "/images/dress2.jpg",
        },
        {
          id: 11,
          name: "Valima Dress",
          price: 89.99,
          image: "/images/dress1.jpg",
        },
        {
          id: 12,
          name: "Wool Sweater",
          price: 79.99,
          image: "/images/wool_sweater.jpg",
        },
      ];

      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);

      if (page >= 1) {
        setHasMore(false);
      }
    }, 1000);
  }, [page]);

  const handleScroll = useCallback(() => {
    if (loading || !hasMore) return;

    const scrollPosition = window.scrollY + window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= scrollHeight - 200) {
      fetchMoreProducts();
    }
  }, [loading, hasMore, fetchMoreProducts]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-200">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Our Products</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">
              Showing {products.length} products
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64 space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Filters
                  </h2>
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
                  <MinimumDistanceSlider/>
                </div>
                <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 transition-colors rounded-sm border border-gray-300">
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>

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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="mb-4">${product.price.toFixed(2)}</p>
                    <Button className="w-full bg-white text-black hover:bg-gray-100 transition-colors rounded-sm border border-gray-300">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {loading && (
              <div className="flex justify-center py-6">
                <span>Loading more products...</span>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
