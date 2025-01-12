import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SettingsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
            <CardDescription>{`Configure your store's general settings`}</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="storeName">Store Name</Label>
                  <Input id="storeName" defaultValue="Vestis Aura" />
                </div>
                <div>
                  <Label htmlFor="storeEmail">Store Email</Label>
                  <Input id="storeEmail" type="email" defaultValue="contact@vestisaura.com" />
                </div>
              </div>
              <div>
                <Label htmlFor="storeDescription">Store Description</Label>
                <Textarea id="storeDescription" defaultValue="Vestis Aura - Your destination for curated fashion that expresses your unique personality." />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="currency">Currency</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="utc">
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">Eastern Time</SelectItem>
                      <SelectItem value="pst">Pacific Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>E-commerce Settings</CardTitle>
            <CardDescription>{`Configure your store's e-commerce settings`}</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="guestCheckout">Allow Guest Checkout</Label>
                  <p className="text-sm text-gray-500">Enable checkout without account creation</p>
                </div>
                <Switch id="guestCheckout" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="stockManagement">Enable Stock Management</Label>
                  <p className="text-sm text-gray-500">Track and display product inventory</p>
                </div>
                <Switch id="stockManagement" defaultChecked />
              </div>
              <div>
                <Label htmlFor="lowStockThreshold">Low Stock Threshold</Label>
                <Input id="lowStockThreshold" type="number" defaultValue="5" />
              </div>
              <div>
                <Label htmlFor="orderPrefix">Order Number Prefix</Label>
                <Input id="orderPrefix" defaultValue="ORD-" />
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Settings</CardTitle>
            <CardDescription>{`Configure your store's payment settings`}</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="stripeEnabled">Enable Stripe Payments</Label>
                  <p className="text-sm text-gray-500">Accept payments via Stripe</p>
                </div>
                <Switch id="stripeEnabled" defaultChecked />
              </div>
              <div>
                <Label htmlFor="stripeKey">Stripe API Key</Label>
                <Input id="stripeKey" type="password" defaultValue="sk_test_..." />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="paypalEnabled">Enable PayPal Payments</Label>
                  <p className="text-sm text-gray-500">Accept payments via PayPal</p>
                </div>
                <Switch id="paypalEnabled" />
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button className="bg-gray-800 hover:bg-black">
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  )
}

