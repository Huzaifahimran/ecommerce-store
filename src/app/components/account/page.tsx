import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UserProfile() {
  // This would typically come from a state management solution or API
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    orders: [
      { id: "ORD-12345", date: "June 1, 2023", total: 95.97, status: "Delivered" },
      { id: "ORD-12346", date: "May 15, 2023", total: 129.99, status: "Shipped" },
      { id: "ORD-12347", date: "April 30, 2023", total: 79.98, status: "Processing" },
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-purple-800">Vestis Aura</Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
            <Link href="/cart" className="text-gray-600 hover:text-gray-900">Cart</Link>
            <Link href="/account" className="text-gray-600 hover:text-gray-900">Account</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>

        <Tabs defaultValue="profile">
          <TabsList className="mb-8">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile Information</h2>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue={user.name} />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user.email} />
                </div>
                <div>
                  <Label htmlFor="password">New Password</Label>
                  <Input id="password" type="password" />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
                <Button className="bg-purple-600 text-white hover:bg-purple-700">
                  Update Profile
                </Button>
              </form>
            </div>
          </TabsContent>
          <TabsContent value="orders">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order History</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 px-4">Order ID</th>
                      <th className="py-2 px-4">Date</th>
                      <th className="py-2 px-4">Total</th>
                      <th className="py-2 px-4">Status</th>
                      <th className="py-2 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.orders.map((order) => (
                      <tr key={order.id} className="border-b">
                        <td className="py-2 px-4">{order.id}</td>
                        <td className="py-2 px-4">{order.date}</td>
                        <td className="py-2 px-4">${order.total.toFixed(2)}</td>
                        <td className="py-2 px-4">{order.status}</td>
                        <td className="py-2 px-4">
                          <Button variant="outline" size="sm">View Details</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

