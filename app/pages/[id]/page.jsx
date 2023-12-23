import { singleProduct } from '@/app/api'
import React from 'react'
import "./SingleProduct.scss"
import SingleProductSwiper from '@/app/components/single-page-image-swiper/SingleProductSwiper'





const SingleProduct = async({params}) => {

    const product = await singleProduct(params?.id)
    console.log(product);
  return (
    <div className='single__product'>
        <div className='single__product-information'>
            <div className='image'>
                <div>
                    <SingleProductSwiper images={product.images}/>
                </div>
            </div>
            <div>
                <div className="title">
                    <h1>{product.title}</h1>
                </div>
                <div className="description">
                    <p>{product.description}</p>
                </div>
                <div className="price">
                    <p>Price: <span>${product.price}</span></p>
                    <p>Discount: {product.discountPercentage}%</p>
                    <p>Sale Price: ${((100 - product.discountPercentage)*product.price/100).toFixed(0)}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct