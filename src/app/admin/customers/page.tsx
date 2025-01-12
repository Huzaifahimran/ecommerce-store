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

export default function CustomersPage() {
  // This would typically come from your database or API
  const customers = [
    { id: 1, name: "John Doe", email: "john@example.com", orders: 5, totalSpent: "$529.95", lastOrder: "2024-11-28" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", orders: 3, totalSpent: "$239.97", lastOrder: "2024-11-25" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", orders: 7, totalSpent: "$789.93", lastOrder: "2024-11-27" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", orders: 2, totalSpent: "$159.98", lastOrder: "2024-11-20" },
    { id: 5, name: "Charlie Wilson", email: "charlie@example.com", orders: 4, totalSpent: "$399.96", lastOrder: "2024-11-26" },
    { id: 6, name: "Eva Davis", email: "eva@example.com", orders: 1, totalSpent: "$89.99", lastOrder: "2024-11-15" },
    { id: 7, name: "Frank Miller", email: "frank@example.com", orders: 6, totalSpent: "$659.94", lastOrder: "2024-11-24" },
    { id: 8, name: "Grace Taylor", email: "grace@example.com", orders: 3, totalSpent: "$269.97", lastOrder: "2024-11-22" },
    { id: 9, name: "Henry Clark", email: "henry@example.com", orders: 8, totalSpent: "$959.92", lastOrder: "2024-11-28" },
    { id: 10, name: "Ivy Anderson", email: "ivy@example.com", orders: 2, totalSpent: "$179.98", lastOrder: "2024-11-18" },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2">
              <Search className="h-5 w-5 text-gray-500" />
              <Input placeholder="Search customers..." className="max-w-xs" />
            </div>
            <div className="flex items-center gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by orders" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Customers</SelectItem>
                  <SelectItem value="new">New Customers</SelectItem>
                  <SelectItem value="returning">Returning Customers</SelectItem>
                  <SelectItem value="vip">VIP Customers</SelectItem>
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
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead>Last Order</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell className="font-medium">{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.orders}</TableCell>
                <TableCell>{customer.totalSpent}</TableCell>
                <TableCell>{customer.lastOrder}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/customers/${customer.id}`}>
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
              <span className="font-medium">100</span> customers
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
