import React, { useState } from 'react'

export default function CartSummary({items}) {

    const countTotal = items.reduce((acc, ele) => acc + (ele.quantity * ele.price), 0)

  return (

    <div className="cart-summary">
          <div className="summary-title">ORDER SUMMARY</div>
          <div className="summary-item">
            <span>Subtotal</span>
            <span>{countTotal.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Shopping Cost</span>
            <span>0</span>
          </div>
          <div className="summary-item">
            <span>Discount</span>
            <span>0</span>
          </div>
          <div className="summary-item">
            <span>Total</span>
            <span>{countTotal.toFixed(2)}</span>
          </div>
        </div>
        
  )
}
