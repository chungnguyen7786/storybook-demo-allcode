import React from "react";

import "./Card.css";

export const Card = ({url, title, description}) => {
  return (
    <div className="Book">
      <div className = "bookCover">
        <img src={url} alt="book" />
      </div>
      <h3> {title} </h3>
      <p> {description} </p>
      <button>Add to cart</button>
    </div>
  );
};

// Card.defaultProps = {
//   url: 'https://loremflickr.com/240/320',
//   title: 'Critical Care',
//   description:'Lorem ipsum dolor sit amet'
// };