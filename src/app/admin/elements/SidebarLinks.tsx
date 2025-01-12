import Link from 'next/link';
import { Package, Settings, Users, ShoppingCart, LayoutDashboard } from 'lucide-react';
interface SidebarLinksTypes {
  onClose: ()=>void;
}

export default function SidebarLinks({onClose}: SidebarLinksTypes) {
  return (
    <>
      <Link
        href="/admin" onClick={onClose}
        className="flex items-center rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100"
      >
        <LayoutDashboard className="mr-3 h-5 w-5" />
        Dashboard
      </Link>
      <Link
        href="/admin/products" onClick={onClose}
        className="flex items-center rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100"
      >
        <Package className="mr-3 h-5 w-5" />
        Products
      </Link>
      <Link
        href="/admin/orders" onClick={onClose}
        className="flex items-center rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100"
      >
        <ShoppingCart className="mr-3 h-5 w-5" />
        Orders
      </Link>
      <Link
        href="/admin/customers" onClick={onClose}
        className="flex items-center rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100"
      >
        <Users className="mr-3 h-5 w-5" />
        Customers
      </Link>
      <Link
        href="/admin/settings" onClick={onClose}
        className="flex items-center rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100"
      >
        <Settings className="mr-3 h-5 w-5" />
        Settings
      </Link>
    </>
  );
}