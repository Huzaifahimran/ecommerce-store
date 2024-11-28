import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { CheckCircle } from 'lucide-react'

export default function OrderConfirmation() {
  // This would typically come from a state management solution or API
  const orderDetails = {
    orderNumber: "ORD-12345",
    date: "June 1, 2023",
    total: 95.97,
    items: [
      { id: 1, name: "Classic White Tee", price: 29.99, quantity: 2 },
      { id: 2, name: "Denim Jeans", price: 59.99, quantity: 1 },
    ],
    shippingAddress: "123 Main St, New York, NY 10001",
    estimatedDelivery: "June 5, 2023",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-purple-800">Vestis Aura</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900">Order Confirmed</h1>
            <p className="text-xl text-gray-600">Thank you for your purchase!</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Details</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Order Number:</span>
                <span>{orderDetails.orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Order Date:</span>
                <span>{orderDetails.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Total:</span>
                <span>${orderDetails.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-6 pt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Items Ordered</h2>
            <ul className="space-y-4">
              {orderDetails.items.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200 mt-6 pt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipping Information</h2>
            <p className="text-gray-600">{orderDetails.shippingAddress}</p>
            <p className="text-gray-600 mt-2">Estimated Delivery: {orderDetails.estimatedDelivery}</p>
          </div>

          <div className="mt-8 text-center">
            <Button asChild className="bg-purple-600 text-white hover:bg-purple-700">
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

