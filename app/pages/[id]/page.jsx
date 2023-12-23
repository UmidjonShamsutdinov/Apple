import { singleProduct } from '@/app/api'
import React from 'react'

const SingleProduct = async({params}) => {

    const product = await singleProduct(params?.id)
    console.log(product);
  return (
    <div>SingleProduct
        <img src={product?.images[1]} alt="" />
    </div>
  )
}

export default SingleProduct