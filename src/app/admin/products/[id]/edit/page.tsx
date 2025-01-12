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
import { Upload, X } from 'lucide-react'
import Image from 'next/image'

export default function EditProductPage({ params }: { params: { id: string } }) {
  // This would typically come from your database based on the ID
  const product = {
    id: params.id,
    name: "Classic White Tee",
    price: 29.99,
    category: "tops",
    stock: 100,
    description: "A comfortable and versatile white t-shirt made from 100% cotton.",
    images: ["/placeholder.svg", "/placeholder.svg"]
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Edit Product</h1>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Product Name</Label>
              <Input id="name" defaultValue={product.name} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="price">Price</Label>
              <Input 
                id="price" 
                type="number" 
                step="0.01" 
                defaultValue={product.price} 
                className="mt-1" 
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Select defaultValue={product.category}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tops">Tops</SelectItem>
                  <SelectItem value="bottoms">Bottoms</SelectItem>
                  <SelectItem value="dresses">Dresses</SelectItem>
                  <SelectItem value="shoes">Shoes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="stock">Stock Quantity</Label>
              <Input 
                id="stock" 
                type="number" 
                defaultValue={product.stock} 
                className="mt-1" 
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              defaultValue={product.description} 
              className="mt-1" 
              rows={4} 
            />
          </div>

          <div>
            <Label>Current Images</Label>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="relative group">
                  <Image
                    src={image}
                    alt={`Product image ${index + 1}`}
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label>Add More Images</Label>
            <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="flex flex-col items-center">
                <Upload className="h-12 w-12 text-gray-400" />
                <div className="mt-4 flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-medium text-purple-600 hover:text-purple-500"
                  >
                    <span>Upload a file</span>
                    <Input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      multiple
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button type="submit" className="bg-gray-800 hover:bg-black">
              Update Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

