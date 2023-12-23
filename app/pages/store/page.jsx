// "use client"
import Nav from '@/app/layout/nav/Nav'
import Link from 'next/link'
import React from 'react'
import "./Products.scss"
import BasicRating from '@/app/components/rating/page'
import { allProducts } from '@/app/api'



const Store = async () => {
  const {products} = await allProducts("/products")
  console.log(products);
  return (
    <div>
      <Nav/>
      <div className="products">
        {
          products.map(product =>
            <Link href={`/pages/${product.id}`} key={product.id}>
                <img src={product?.images[1]} alt="" />
              <div className='product'>
                <h2>{product.brand}</h2>
                <h4>{product.title}</h4>
                <p className='description'>{product.description.length > 100 ? product.description.slice(0,100)+"..." : product.description}</p>
                <div className='price'>
                  <p>Price: <span>${product.price}</span></p>
                  <p>Discount: {product.discountPercentage}%</p>
                  <p>Sale Price: ${((100 - product.discountPercentage)*product.price/100).toFixed(0)}</p>
                </div>
                <BasicRating rate={product.rating}/>
              </div>
            </Link>
            )
        }
      </div>
    </div>
  )
}

export default Store