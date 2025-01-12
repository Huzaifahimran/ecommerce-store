import ProductDetail from '@/app/components/products/[id]/page'
import React from 'react'

const ProductDetails = ({ params }: { params: Promise<{ id: string }> })=> {
  return (
    <>
    <ProductDetail params={params} />
    </>
  )
}

export default ProductDetails