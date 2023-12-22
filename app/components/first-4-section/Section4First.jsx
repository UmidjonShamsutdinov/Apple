import React from 'react'
import "./Section4First.scss"
import Link from 'next/link'

const Section4First = () => {
  return (
    <div className='section4-1'>
        <div className='section-title'>
          <i className='bi bi-apple'></i>
          <h2>WATCH</h2>
        </div>        
        <p>ULTRA 2</p>
        <div className="links-HiWatch">
          <Link href={"/"}>Learn more <i className='bi bi-chevron-right'></i></Link>
          <Link href={"/"}>Buy <i className='bi bi-chevron-right'></i></Link>
        </div>
    </div>
  )
}

export default Section4First