import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DollarSign, Users, Package, ArrowUpRight, ArrowDownRight, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign
    },
    {
      title: "Total Orders",
      value: "2,345",
      change: "+15.2%",
      trend: "up",
      icon: ShoppingCart
    },
    {
      title: "Total Products",
      value: "432",
      change: "+12.3%",
      trend: "up",
      icon: Package
    },
    {
      title: "Total Customers",
      value: "1,234",
      change: "-2.4%",
      trend: "down",
      icon: Users
    },
  ]

  const recentOrders = [
    { id: "ORD-12345", customer: "John Doe", date: "2024-11-28", status: "Delivered", total: "$129.99" },
    { id: "ORD-12344", customer: "Jane Smith", date: "2024-11-28", status: "Processing", total: "$79.99" },
    { id: "ORD-12343", customer: "Bob Johnson", date: "2024-11-27", status: "Shipped", total: "$199.99" },
    { id: "ORD-12342", customer: "Alice Brown", date: "2024-11-27", status: "Processing", total: "$59.99" },
    { id: "ORD-12341", customer: "Charlie Wilson", date: "2024-11-26", status: "Delivered", total: "$149.99" },
  ]

  const lowStockProducts = [
    { id: 1, name: "Classic White Tee", stock: 5, threshold: 10 },
    { id: 2, name: "Denim Jeans", stock: 8, threshold: 15 },
    { id: 3, name: "Leather Jacket", stock: 3, threshold: 5 },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className={`flex items-center text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="mr-1 h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="mr-1 h-4 w-4" />
                  )}
                  {stat.change}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">
                      <Link href={`/admin/orders/${order.id}`} className="text-blue-600 hover:underline">
                        {order.id}
                      </Link>
                    </TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                        order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {order.status}
                      </span>
                    </TableCell>
                    <TableCell>{order.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Low Stock Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Low Stock Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Current Stock</TableHead>
                  <TableHead>Threshold</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {lowStockProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      <Link href={`/admin/products/${product.id}/edit`} className="text-blue-600 hover:underline">
                        {product.name}
                      </Link>
                    </TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{product.threshold}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-red-100 text-red-700">
                        Low Stock
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

