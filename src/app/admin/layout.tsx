import { Menu, Package, Settings, Users, ShoppingCart, LayoutDashboard } from 'lucide-react'
import Link from 'next/link'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <Menu className="h-6 w-6 md:hidden" />
            <span className="text-2xl font-bold text-gray-900 ml-4">Vestis Aura Admin</span>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex h-[calc(100vh-4rem)] w-64 flex-col border-r border-gray-200 bg-white">
          <nav className="flex-1 space-y-1 px-2 py-4">
            <Link
              href="/admin"
              className="flex items-center rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100"
            >
              <LayoutDashboard className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/admin/products"
              className="flex items-center rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100"
            >
              <Package className="mr-3 h-5 w-5" />
              Products
            </Link>
            <Link
              href="/admin/orders"
              className="flex items-center rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100"
            >
              <ShoppingCart className="mr-3 h-5 w-5" />
              Orders
            </Link>
            <Link
              href="/admin/customers"
              className="flex items-center rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100"
            >
              <Users className="mr-3 h-5 w-5" />
              Customers
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center rounded-lg px-4 py-2 text-gray-900 hover:bg-gray-100"
            >
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  )
}

