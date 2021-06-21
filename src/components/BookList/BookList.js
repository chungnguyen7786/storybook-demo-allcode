import React, { Component } from "react";
import axios from "axios";

import "./Book.css";
import Book from "./Book.js";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      books: []
    };
  }
  componentDidMount() {
    axios.get("https://appbooks-tvh.herokuapp.com/api/books").then(
      (result) => {
        this.setState({
          isLoaded: true,
          books: result.data.books
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }
  onKeyUp = (event) => {
    let text = event.target.value;
    if (!text) return;
    text = text.trim().toLowerCase();
    if (!text) return;
    if (event.keyCode === 13) {
      let url = "https://appbooks-tvh.herokuapp.com/api/books/search?q=" + text;
      axios.get(url).then(
        (result) => {
          this.setState({
            isLoaded: true,
            books: result.data.books
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    }
  };
  render() {
    const { books } = this.state;
    return (
      <div className="BookList">
        <div className="input_search">
          <i className="fas fa-search"></i>
          <input type="text" onKeyUp={this.onKeyUp}/>
        </div>
        {books.map((book, index) => (
          <Book book={book} key={index} />
        ))}
      </div>
    );
  }
}
export default BookList;
