import React from 'react'
import "./Iphone15.scss"
import Link from 'next/link'

const Iphone15 = () => {
  return (
    <div className='Iphone15'>        
        <h2>iPhone 15 Pro</h2>
        <p>Titanium. So strong. So light. So Pro.</p>
        <div className="links-HiWatch">
          <Link href={"/"}>Learn more <i className='bi bi-chevron-right'></i></Link>
          <Link href={"/"}>Buy <i className='bi bi-chevron-right'></i></Link>
        </div>
    </div>
  )
}

export default Iphone15