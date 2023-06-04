import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <div className="empty-cart"> 
      <img src="/empty-cart.png" />
      <h1>No books yet? Keep browsing to discover literary treasures!</h1>
      <Link className="empty-cart-link" to="/">
      Find Your Next Read 
      </Link>
    </div>
  )
}
