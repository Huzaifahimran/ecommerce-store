"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ShoppingBag,
  Info,
  Mail,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "MAXI-LONG COAT",
    price: "RS.14,450",
    image: "/images/cargo_trousers.jpg",
    colors: ["#000000"],
    soldOut: true,
  },
  {
    id: 2,
    name: "SATIN SKIRT",
    price: "RS.4,250",
    image: "/images/dress2.jpg",
    colors: ["#9B4444", "#808080"],
  },
  {
    id: 3,
    name: "RELAX SHIRT WITH POCKETS",
    price: "RS.3,050",
    image: "/images/dress1.jpg",
    colors: ["#90A955"],
  },
  {
    id: 4,
    name: "MOCK NECK RELAX SWEATER",
    price: "RS.7,950",
    image: "/images/khaddar_shirt.jpg",
    colors: ["#D3D3D3"],
  },
];

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      <main className="flex-grow">
        <section className="h-screen relative overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/products_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center px-4">
              <motion.h1
                className="text-7xl sm:text-8xl md:text-9xl font-extrabold font-sans leading-tight mb-8 text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                VESTIS <span className="text-yellow-300">AURA</span>
              </motion.h1>
              <motion.p
                className="mt-6 text-3xl sm:text-4xl md:text-5xl font-light text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Elevate Your Style
              </motion.p>
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button
                  className="bg-white text-black hover:bg-gray-200 text-2xl px-12 py-6 rounded-sm transition-all "
                  onClick={() => {
                    router.push("/products");
                  }}
                >
                  Explore Now
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-8 mb-12 text-sm font-light">
              <button className="border-b-2 border-black pb-1">WOMEN</button>
              <button className="text-gray-500 hover:border-b-2 hover:border-black pb-1 transition-all">
                MEN
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="relative mb-4">
                    {product.soldOut && (
                      <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs">
                        SOLD OUT
                      </div>
                    )}
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={600}
                      height={800}
                      className="w-full object-cover aspect-[3/4]"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-light">{product.name}</h3>
                    <p className="text-sm font-light">{product.price}</p>
                    <div className="flex gap-2">
                      {product.colors.map((color, index) => (
                        <button
                          key={index}
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: color }}
                          aria-label={`Select color ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-5xl sm:text-6xl font-bold mb-8">
                About Vestis Aura
              </h2>
              <p className="max-w-3xl mx-auto text-2xl leading-relaxed mb-12">
                We believe in the power of fashion to express individuality and
                boost confidence. Our carefully curated collection brings you
                the latest trends and timeless classics, ensuring you always
                look and feel your best.
              </p>
              <Button
                variant="outline"
                className="text-2xl px-12 py-6 rounded-sm transition-all border-white text-black hover:bg-gray-200 hover:text-black"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section className="py-32 bg-gradient-to-b from-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                {
                  icon: ShoppingBag,
                  title: "Curated Collections",
                  description: "Handpicked styles for every occasion",
                },
                {
                  icon: Info,
                  title: "Expert Advice",
                  description:
                    "Personalized styling tips from our fashion experts",
                },
                {
                  icon: Mail,
                  title: "Easy Returns",
                  description: "Hassle-free returns within 30 days",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="bg-white rounded-full p-6 inline-block mb-6">
                    <item.icon size={48} className="text-black" />
                  </div>
                  <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-xl text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Vestis Aura</h3>
              <p className="text-2xl text-gray-300 mb-8">
                Stay stylish, stay unique
              </p>
              <div className="flex space-x-6">
                {[Instagram, Twitter, Facebook].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-white hover:text-yellow-300 transition-colors"
                  >
                    <Icon size={36} />
                    <span className="sr-only">Social Media</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-3xl font-semibold mb-6">
                Subscribe to Our Newsletter
              </h4>
              <form className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow bg-white text-black placeholder-gray-500 text-xl py-6 px-6 rounded-sm"
                />
                <Button
                  type="submit"
                  className="px-12 py-6 rounded-sm transition-all bg-white text-black hover:bg-gray-200 text-xl font-semibold"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400 text-xl">
            <p>&copy; 2023 Vestis Aura. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
