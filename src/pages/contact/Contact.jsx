import React from "react";
import HeadingTitle from "../../components/heading-title/HeadingTitle";
import './contact.css'
export default function Contact() {
  return (
    <>
      <HeadingTitle heading={"Contact us"} />
      <section className="contact">
        <div className="contact-items">
          <div className="contact-item">
            <div className="contact-item-icon">
              <i className="bi bi-house-fill"></i>
              Address
            </div>
            <p className="contact-item-text">Algeria - Algiers - El Kouba</p>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon">
              <i className="bi bi-telephone-fill"></i>
              Phone
            </div>
            <p className="contact-item-text">(+213)795044400</p>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon">
              <i className="bi bi-envelope-fill"></i>
              Email
            </div>
            <p className="contact-item-text">Hacenabdelouahab@gmail.com</p>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="contact-form">
          <h2 className="contact-form-title">Contact us</h2>
          <div className="contact-input-wrapper">
            <input type="text" placeholder="Name *" />
            <input type="text" placeholder="Subject *" />
            <input type="text" placeholder="Email *" />
          </div>
          <textarea
            placeholder="Your Message *"
            className="contact-textarea"
            rows="5"
          ></textarea>
          <button className="contact-btn">Send</button>
        </form>
      </section>
    </>
  );
}
