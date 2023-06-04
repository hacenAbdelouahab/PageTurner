import React from "react";

export default function CartItem({ book, context }) {

  function changeQty(value) {

      context.setCartItems((prevItems) =>
        prevItems.map((ele) =>
          ele.title === book.title ? { ...ele, quantity: value === "plus" ? ele.quantity++ : ele.quantity-- } : ele
        )
      );
    }
    function deleteBook(book) {
      
      context.setCartItems(prevItems => prevItems.filter(item => item.id !== book.id))
    }

  return (

    <div className="cart-item">
      <img src={`/books/${book.image}`} alt="title" className="cart-item-img" />
      <div className="cart-item-info">
        <div>
          <div className="cart-item-book-title">
            <b>Title: </b>
            {book.title}
          </div>
          <div className="cart-item-author">
            <b>Author: </b>
            {book.author}
          </div>
        </div>
        <div>
          <div className="cart-item-quantity">
            <button
              onClick={() => changeQty("plus")}
            >
              <i
                className="bi bi-plus-lg"
              ></i>
            </button>
            <b>{book.quantity}</b>
            <button
              onClick={() => changeQty("minus")}
              disabled = { book.quantity <=1 }
            >
              <i
                className="bi bi-dash-lg"
              ></i>
            </button>
          </div>
          <div className="cart-item-price">${(book.quantity * book.price).toFixed(2)}</div>
          <i onClick={() => deleteBook(book)} className="bi bi-trash-fill"></i>
        </div>
      </div>
    </div>
  );
}
