import React from 'react'
import "./Section3First.scss"
import Link from 'next/link'

const Section3First = () => {
  return (
    <div className='section3-1'>        
        <h2>iPhone 15</h2>
        <p>New camera. New design. Newphoria.</p>
        <div className="links-HiWatch">
          <Link href={"/"}>Learn more <i className='bi bi-chevron-right'></i></Link>
          <Link href={"/"}>Buy <i className='bi bi-chevron-right'></i></Link>
        </div>
    </div>
  )
}

export default Section3First