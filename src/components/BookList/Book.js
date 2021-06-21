import React, { Component } from "react";

import "./Book.css";

class Book extends Component {
  render() {
    const { book } = this.props;
    return (
      <div className="Book">
        <div className = "bookCover">
          <img src={book.image} alt="book" />
        </div>
        <h3> {book.title} </h3>
        <p> {book.description} </p>
        <button>Add to cart</button>
      </div>
    );
  }
}
export default Book;
