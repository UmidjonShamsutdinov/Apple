import React from 'react'
import "./Section5Second.scss"
import Link from 'next/link'

const Section5Second = () => {
  return (
    <div className='section5-2'>        
        <div className="section-title">
          <i className='bi bi-apple'></i>
          <h2>Trade In</h2>
        </div>
        <p>Mind-blowing. Head-turning.</p>
        <div className="links-HiWatch">
          <Link href={"/"}>Learn more <i className='bi bi-chevron-right'></i></Link>
          <Link href={"/"}>Buy <i className='bi bi-chevron-right'></i></Link>
        </div>
    </div>
  )
}

export default Section5Second