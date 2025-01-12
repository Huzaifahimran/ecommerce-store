import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search, ArrowUpDown } from 'lucide-react'
import Link from 'next/link'

export default function OrdersPage() {
  // This would typically come from your database or API
  const orders = [
    { id: "ORD-12345", customer: "John Doe", date: "2024-11-28", status: "Delivered", total: "$129.99" },
    { id: "ORD-12344", customer: "Jane Smith", date: "2024-11-28", status: "Processing", total: "$79.99" },
    { id: "ORD-12343", customer: "Bob Johnson", date: "2024-11-27", status: "Shipped", total: "$199.99" },
    { id: "ORD-12342", customer: "Alice Brown", date: "2024-11-27", status: "Processing", total: "$59.99" },
    { id: "ORD-12341", customer: "Charlie Wilson", date: "2024-11-26", status: "Delivered", total: "$149.99" },
    { id: "ORD-12340", customer: "Eva Davis", date: "2024-11-26", status: "Cancelled", total: "$89.99" },
    { id: "ORD-12339", customer: "Frank Miller", date: "2024-11-25", status: "Shipped", total: "$109.99" },
    { id: "ORD-12338", customer: "Grace Taylor", date: "2024-11-25", status: "Processing", total: "$69.99" },
    { id: "ORD-12337", customer: "Henry Clark", date: "2024-11-24", status: "Delivered", total: "$179.99" },
    { id: "ORD-12336", customer: "Ivy Anderson", date: "2024-11-24", status: "Shipped", total: "$139.99" },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2">
              <Search className="h-5 w-5 text-gray-500" />
              <Input placeholder="Search orders..." className="max-w-xs" />
            </div>
            <div className="flex items-center gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <ArrowUpDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">
                  <Link href={`/admin/orders/${order.id}`} className="text-blue-600 hover:underline">
                    {order.id}
                  </Link>
                </TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                    order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' :
                    order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/orders/${order.id}`}>
                      View Details
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{" "}
              <span className="font-medium">97</span> results
            </p>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

