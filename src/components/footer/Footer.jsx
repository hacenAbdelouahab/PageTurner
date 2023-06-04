import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <h2>Stay Connected with Us</h2>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/hacen-abdelouahab/"
            target="_blank"
          >
            <div className="social-icon">
              <i style={{ color: "#c0392b" }} className="bi bi-instagram"></i>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/hacen-abdelouahab/"
            target="_blank"
          >
            <div className="social-icon">
              <i style={{ color: "blue" }} className="bi bi-facebook"></i>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/hacen-abdelouahab/"
            target="_blank"
          >
            <div className="social-icon">
              <i style={{ color: "red" }} className="bi bi-youtube"></i>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/hacen-abdelouahab/"
            target="_blank"
          >
            <div className="social-icon">
              <i style={{ color: "skyblue" }} className="bi bi-twitter"></i>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/hacen-abdelouahab/"
            target="_blank"
          >
            <div className="social-icon">
              <i style={{ color: "darkblue" }} className="bi bi-linkedin"></i>
            </div>
          </a>
        </div>
      </div>
      <div className="footer-info">
        <div className="footer-links">
          <h2>Useful Links</h2>
          <ul>
            <li>Home</li>
            <li>Authors</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contact Information</h2>
          <div>
            <i className="bi bi-geo-alt-fill"></i>{" "}
            <span>Algeria - Algiers - El Kouba</span>
          </div>
          <div>
            <i className="bi bi-telephone-fill"></i> <span>(+213)795044400</span>
          </div>
          <div>
            <i className="bi bi-envelope-fill"></i>{" "}
            <span>Hacenabdelouahab@gmail.com</span>
          </div>
        </div>
        <div className="footer-about">
          <h2>About Us</h2>
          <p>
            Our mission at Pageturner is to bring the passion and love for
            reading books back. whether it's a regular paper book, or an online
            edition, we want our readers to know that we appreciate quality and
            artful storytelling. Join our community and enjoy multiple genres,
            modern and classic authors, reviews, critics and more!
          </p>
        </div>
      </div>
    </footer>
  );
}
