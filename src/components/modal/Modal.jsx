import React, { useContext, useState } from "react";
import "./modal.css";
import Rating from "../book-slider/Rating";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";



export default function Modal({ book, setDisplayModal }) {

  const [qty, setQty] = useState(1)

  const context = useContext(CartContext) ;

  // Add the quanitity chosen of books to Cart 
  function addBook(book) {
    context.setCartItems((prevItems) => {
      const isBookexists = prevItems.find(
        (element) => element.title === book.title
      );

      if (!isBookexists) {
        return [...prevItems, { ...book, quantity: +qty }];
      } else {
        let newArray = [];

        prevItems.forEach((ele) =>
          ele.title === book.title
            ? newArray.push({ ...ele, quantity: +qty })
            : newArray.push(ele)
        );
        return newArray;
      }
    });
  }


  return (
    
    <div
      className="modal"
      onClick={() => {
        setDisplayModal(false);
      }}
    >
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image">
          <img src={`./books/${book.image}`} />
        </div>
        <div className="modal-info">
          <h1>{book.title}</h1>
          <span className="in-stock">
            <strong>Status:</strong>{" "}
            {book.inStock ? "in stock" : "out of stock"}
          </span>
          <Rating rating={book.rating} reviews={book.reviews} />
          <h2 className="author">
            Author: <span>{book.author}</span>
          </h2>
          <h2 className="price">
            Price:<span>${book.price}</span>
          </h2>
          <div className="add-to-cart">
            <input 
            className="add-to-cart-input" 
            type="number" 
            min="1" 
            max="100" 
            value={qty}
            onChange={(event) => setQty(event.target.value)}
            />
            <button 
            onClick={() => addBook(book)}
            className="add-to-cart-button">
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
          <Link 
          to={`/book/${book.id}`}
          className="details-button">
See More Details
          </Link>
        </div>
      </div>
    </div>
  );
}
