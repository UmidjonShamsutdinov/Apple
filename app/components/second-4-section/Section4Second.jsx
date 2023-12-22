import React from 'react'
import "./Section4Second.scss"
import Link from 'next/link'

const Section4Second = () => {
  return (
    <div className='section4-2'>        
        <h2>AirPods Pro</h2>
        <p>Adaptive Audio. Now playing.</p>
        <div className="links-HiWatch">
          <Link href={"/"}>Learn more <i className='bi bi-chevron-right'></i></Link>
          <Link href={"/"}>Buy <i className='bi bi-chevron-right'></i></Link>
        </div>
    </div>
  )
}

export default Section4Second