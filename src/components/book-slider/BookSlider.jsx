import React, { useContext, useEffect, useState } from "react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { books } from "../../data/books";
import "./book-slider.css";
import HeadingTitle from "../heading-title/HeadingTitle";
import Rating from "./Rating";
import Modal from "../modal/Modal";
import { CartContext } from "../../context/CartContext";

export default function BookSlider({ heading }) {

  const [slidesPerView, setSlidesPerView] = useState(4);
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  
  const context = useContext(CartContext);

  // Add a book to The Cart

  function addOneBook(book) {
    context.setCartItems((prevItems) => {
      const isBookexists = prevItems.find(
        (element) => element.title === book.title
      );

      if (!isBookexists) {
        return [...prevItems, { ...book, quantity: 1 }];
      } else {
        let newArray = [];

        prevItems.forEach((ele) =>
          ele.title === book.title
            ? newArray.push({ ...ele, quantity: 1 })
            : newArray.push(ele)
        );
        return newArray;
      }
    });
  }

  // Handle when user clicks Details inside slider.
  const handleDetailsClick = (book) => {
    setSelectedBook(book);
    setDisplayModal(true);
  };

  useEffect(() => {
    SwiperCore.use([Navigation, Autoplay]);

    // Making Swiper's slide Responsive

    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1400) {
        setSlidesPerView(5);
      } else if (screenWidth >= 1150) {
        setSlidesPerView(4);
      } else if (screenWidth >= 900) {
        setSlidesPerView(3);
      } else if (screenWidth >= 668) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    // Listen for screen Resize
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderedSlides = books.map((book) => (
    <SwiperSlide key={book.id} className="book-swiper-slide">
      <div className="book-item-wrapper">
        <div className="image">
          <img src={`/books/${book.image}`} alt={book.title} />
        </div>
        <div className="info">
          <h2 className="book-title">{book.title}</h2>
          <Rating rating={book.rating} reviews={book.reviews} />
          <h3 className="price">${book.price}</h3>
        </div>
        <div className="action-bar">
          <div onClick={() => handleDetailsClick(book)}>
            <i className="bi bi-eye-fill"></i>Detail
          </div>
          <div onClick={() => addOneBook(book)}>
            <i className="bi bi-cart-plus-fill"></i>Buy
          </div>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <section className="book-slider-wrapper">
      <HeadingTitle heading={heading} />
      <div className="book-swiper-container">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={10}
          loop={true}
          navigation={{
            nextEl: ".book-swiper-button-next",
            prevEl: ".book-swiper-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {renderedSlides}
        </Swiper>
        <div className="book-swiper-button-next"></div>
        <div className="book-swiper-button-prev"></div>
      </div>
      {displayModal && (
        <Modal setDisplayModal={setDisplayModal} book={selectedBook} />
      )}
    </section>
  );
}
