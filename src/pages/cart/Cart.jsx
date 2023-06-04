import React, { useContext } from "react";
import HeadingTitle from "../../components/heading-title/HeadingTitle";
import "./cart.css";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";

export default function Cart() {

  const context = useContext(CartContext);

  return (

    context.cartItems.length > 0  ?  <div className="cart">
      <HeadingTitle heading={"Your Shopping Cart"} />
      <div className="cart-wrapper">
        <div className="cart-items">
          {context.cartItems.map((book) => (
            <CartItem key={book.id} 
            book={book} context={context} />
          ))}
        </div>
        <CartSummary items={context.cartItems}/>
      </div>
    </div> : <EmptyCart />
    
  );
}
