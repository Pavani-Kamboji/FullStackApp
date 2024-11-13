import React from "react";
import "./myBooksList.css";
import { useNavigate } from "react-router-dom";
const MyBooksList = () => {
  const bookData = [
    {
      number: "1",
      title: "WINGS OF FIRE",
      author: "APJ Abdul Kalam",
      condition: "rat bitten",
      publisher: "my uncle",
      genre: "divine",
    },
    {
      number: "2",
      title: "wings of water",
      author: "yako",
      condition: "rat bitten",
      publisher: "my uncle",
      genre: "divine",
    },
    {
      number: "3",
      title: "wings of water",
      author: "yako",
      condition: "rat bitten",
      publisher: "my uncle",
      genre: "divine",
    },
    {
      number: "4",
      title: "wings of water",
      author: "yako",
      condition: "rat bitten",
      publisher: "my uncle",
      genre: "divine",
    },
    {
      number: "5",
      title: "wings of water",
      author: "yako",
      condition: "rat bitten",
      publisher: "my uncle",
      genre: "divine",
    },
    {
      number: "6",
      title: "wings of water",
      author: "yako",
      condition: "rat bitten",
      publisher: "my uncle",
      genre: "divine",
    },
  ];
  <p>
    <a href="#" onClick={() => navigate("/addBook")}>
      Add Book
    </a>
  </p>;
  let navigate = useNavigate();
  return (
    <div id="con" className="container">
      <div className="cards">
        {bookData.map((book) => {
          return (
            <div>
              <div className="card_number">
                <h2>Book</h2>&nbsp;
                <p>{book.number}</p>
              </div>
              <a target="_blank" className="card">
                <h3 className="card_title"> {book.title}</h3>&nbsp;
                <div className="card_div">
                  <h4>Author:-</h4>&nbsp;
                  <p>{book.author}</p>
                </div>
                <div className="card_div">
                  <h4>Genre:-</h4>&nbsp;
                  <p>{book.genre}</p>
                </div>
                <div className="card_div">
                  <h4>Publisher:-</h4>&nbsp;
                  <p>{book.publisher}</p>
                </div>
                <div className="card_div">
                  <h4>Condition:-</h4>&nbsp;
                  <p>{book.condition}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>

      <p>
        <a href="#" onClick={() => navigate("/addBook")}>
          Add Book
        </a>
      </p>
    </div>
  );
};
export default MyBooksList;
