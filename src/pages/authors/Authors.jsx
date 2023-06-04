import React, { useState } from "react";
import HeadingTitle from "../../components/heading-title/HeadingTitle";
import { authors } from "../../data/authors";
import './authors.css'

export default function Authors() {

  const [searchValue, setSearchValue] = useState("");

  const filteredAuthors = authors.filter(
    (author) =>
      searchValue === "" ||
      author.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (

    <div className="authors-section">
      <HeadingTitle heading={"Authors"} />
      <div className="authors">
        <div className="authors-search">
          <input
            type="search"
            placeholder="Search in authors"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
        <div className="authors-items">
        {filteredAuthors.length === 0 ? (
          <h4>No matching authors found for the entered name </h4>
        ) : (
          filteredAuthors.map((author) => (
            <div key={author.id} className="author">
              <img
                src={author.image}
                alt={author.name}
                className="author-image"
              />
              <h2 className="author-name">{author.name}</h2>
            </div>
          ))
        )}
      </div>
      </div>
    </div>
    
  );
}
