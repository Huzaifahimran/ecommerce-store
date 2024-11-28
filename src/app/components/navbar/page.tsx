import { Home, ShoppingBag, Info, Mail, UserRound } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-purple-800">Vestis Aura</span>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Home size={24} className='text-purple-800' />
            <span className="sr-only">Home</span>
          </Link>
          <Link href="/cart" className="text-gray-600 hover:text-gray-900 transition-colors">
            <ShoppingBag size={24} className='text-purple-800' />
            <span className="sr-only">Shop</span>
          </Link>
          <Link href="" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Info size={24} className='text-purple-800' />
            <span className="sr-only">About</span>
          </Link>
          <Link href="/auth" className="text-gray-600 hover:text-gray-900 transition-colors">
            <UserRound size={24} className='text-purple-800' />
            <span className="sr-only">Contact</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
