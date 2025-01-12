"use client"
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import SidebarLinks from './elements/SidebarLinks';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <button
              className="block md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <span className="text-2xl font-bold text-gray-900 ml-4">
              Vestis Aura Admin
            </span>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar for larger screens */}
        <aside className="hidden md:flex h-[calc(100vh-4rem)] w-64 flex-col border-r border-gray-200 bg-white">
          <nav className="flex-1 space-y-1 px-2 py-4">
            <SidebarLinks  onClose={()=>setSidebarOpen(false)} />
          </nav>
        </aside>

        {/* Full-screen sidebar for small screens */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 bg-white">
            <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
              <span className="text-xl font-bold text-gray-900">Menu</span>
              <button
                onClick={() => setSidebarOpen(false)}
                aria-label="Close Menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-4 space-y-4 px-4">
              <SidebarLinks onClose={()=>setSidebarOpen(false)}/>
            </nav>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}
