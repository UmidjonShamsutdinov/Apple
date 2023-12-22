import React from 'react'
import "./Section5First.scss"
import Link from 'next/link'

const Section5First = () => {
  return (
    <div className='section5-1'>        
        <div className="section-title">
          <i className='bi bi-apple'></i>
          <h2>Card</h2>
        </div>
        <p>New camera. New design. Newphoria.</p>
        <div className="links-HiWatch">
          <Link href={"/"}>Learn more <i className='bi bi-chevron-right'></i></Link>
          <Link href={"/"}>Buy <i className='bi bi-chevron-right'></i></Link>
        </div>
    </div>
  )
}

export default Section5First