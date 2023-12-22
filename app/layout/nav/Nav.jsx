import { Container } from '@/app/utils/Utils'
import Link from 'next/link'
import React from 'react'
import "./Nav.scss"

const Nav = () => {
  return (
    <nav>
        <Container>
          <ul className='nav__items'>
              <li><Link href={`/`}><i className="bi bi-apple"></i></Link></li>
              <li><Link href={`/pages/store`}>Store</Link></li>
              <li><Link href={`/pages/mac`}>Mac</Link></li>
              <li><Link href={`/pages/ipad`}>iPad</Link></li>
              <li><Link href={`/pages/iphone`}>iPhone</Link></li>
              <li><Link href={`/pages/watch`}>Watch</Link></li>
              <li><Link href={`/pages/vision`}>Vision</Link></li>
              <li><Link href={`/pages/airpods`}>AirPods</Link></li>
              <li><Link href={`/pages/tv-home`}>TV & Home</Link></li>
              <li><Link href={`/pages/accessories`}>Accessories</Link></li>
              <li><Link href={`/pages/support`}>Support</Link></li>
              <li><i className="bi bi-search"></i></li>
              <li><i className="bi bi-bag"></i></li>
              <li></li>
          </ul>
        </Container>
    </nav>
  )
}

export default Nav