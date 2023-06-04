import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import Rating from "../../components/book-slider/Rating";
import "./book.css";
import { CartContext } from "../../context/CartContext";

export default function Book() {

  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const context = useContext(CartContext);

  console.log(context);

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

  const selectedBook = books.find((book) => book.id === Number(id));

  return (
    <div className="book-page">
      <div className="book-page-info">
        <div className="book-image">
          <img src={`/books/${selectedBook.image}`} />
        </div>
        <div className="book-page-details">
          <h1>{selectedBook.title}</h1>
          <div className="author">
            <span className="author-span">by</span>
            <h2>{selectedBook.author}</h2>
            <span className="author-span">(Author)</span>
          </div>
          <Rating rating={selectedBook.rating} reviews={selectedBook.reviews} />
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
              onClick={() => addBook(selectedBook)}
              className="add-to-cart-button"
            >
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="book-page-description">
        <p>{selectedBook.description}</p>
      </div>
      <div className="book-page-extra">
        <div className="extra-item">
          <span>Print Length</span>
          <i className="bi bi-file-earmark-break"></i>
          <span className="info">{selectedBook.printLength}</span>
        </div>
        <div className="extra-item">
          <span>Language</span>
          <i className="bi bi-globe"></i>
          <span className="info">English</span>
        </div>
        <div className="extra-item">
          <span>Print Length</span>
          <i className="bi bi-calendar3"></i>
          <span className="info">{selectedBook.PublicationDate}</span>
        </div>
      </div>
    </div>
  );
}
