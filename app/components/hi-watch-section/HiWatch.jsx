import React from 'react'
import "./HiWatch.scss"
import Link from 'next/link'
const HiWatch = () => {
  return (
    <div className='hi-watch'>
        <div className="hi-watch-title">
          <i className='bi bi-apple'></i>
          <h2>Watch</h2>
        </div>
        <span>SERIES 9</span>
        <p>Double tap. A magical new way to use Apple Watch.</p>
        <div className="links-HiWatch">
          <Link href={"/"}>Learn more</Link>
          <Link href={"/"}>Buy</Link>
        </div>
    </div>
  )
}

export default HiWatch