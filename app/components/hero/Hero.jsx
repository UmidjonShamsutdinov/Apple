import React from 'react'
import Link from 'next/link'
import "./Hero.scss"

const Hero = () => {
  return (
    <div className='hero'>
        <h2>There’s still time to work wonders.</h2>
        <p>Finish off your list with great last-minute gifts.</p>
        <Link href={"/"}>Shop <i className="bi bi-chevron-right"></i></Link>
    </div>
  )
}

export default Hero