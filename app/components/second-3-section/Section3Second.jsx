import React from 'react'
import "./Section3Second.scss"
import Link from 'next/link'

const Section3Second = () => {
  return (
    <div className='section3-2'>        
        <h2>MacBook Pro</h2>
        <p>Mind-blowing. Head-turning.</p>
        <div className="links-HiWatch">
          <Link href={"/"}>Learn more <i className='bi bi-chevron-right'></i></Link>
          <Link href={"/"}>Buy <i className='bi bi-chevron-right'></i></Link>
        </div>
    </div>
  )
}

export default Section3Second