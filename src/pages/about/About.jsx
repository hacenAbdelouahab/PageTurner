import React from "react";
import HeadingTitle from "../../components/heading-title/HeadingTitle";

export default function About() {

  const sectionStyles = {
    margin: "10px 0 50px",
    padding: "0px 20px",
  };
  const paragraphStyles = {
    width: "65%",
    fontSize: "21px", 
    lineHeight: "2"
  }

  return (
    
    <div className="about-section" style={sectionStyles}>
      <HeadingTitle heading={"About us"} />
      <p style={paragraphStyles}>
        Our mission at Pageturner is to bring the passion and love for reading
        books back. whether it's a regular paper book, or an online edition, we
        want our readers to know that we appreciate quality and artful
        storytelling. Join our community and enjoy multiple genres, modern and
        classic authors, reviews, critics and more!
      </p>
    </div>
  );
}
