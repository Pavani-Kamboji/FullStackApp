import React from "react";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const Dashboard = () => {
  const bookData = [
    {
      number: "1",
      bookowner: "Jita",
      title: "WINGS OF FIRE",
      author: "APJ Abdul Kalam",
      condition: "rat bitten",
      publisher: "my uncle",
      genre: "divine",
    },
    {
      number: "2",
      bookowner: "Pita",
      title: "wings of water",
      author: "yako",
      condition: "rat bitten",
      publisher: "my uncle",
      genre: "divine",
    },
    {
      number: "3",
      bookowner: "Rita",
      title: "wings of water",
      author: "yako",
      condition: "rat bitten",
      publisher: "my uncle",
      genre: "divine",
    },
    {
      number: "4",
      bookowner: "Hita",
      title: "wings of water",
      author: "yako",
      condition: "rat bitten",
      publisher: "my uncle",
      genre: "divine",
    },
    {
      number: "5",
      bookowner: "Lita",
      title: "wings of water",
      author: "yako",
      condition: "rat bitten",
      publisher: "my uncle",
      genre: "divine",
    },
    {
      number: "6",
      bookowner: "Nita",
      title: "wings of water",
      author: "yako",
      condition: "rat bitten",
      publisher: "my uncle",
      genre: "divine",
    },
    {
      number: "7",
      bookowner: "Dita",
      title: "wings of water",
      author: "yako",
      condition: "rat bitten",
      publisher: "my uncle",
      genre: "divine",
    },
    {
      number: "8",
      bookowner: "Bita",
      title: "wings of water",
      author: "yako",
      condition: "rat bitten",
      publisher: "my uncle",
      genre: "divine",
    },
    {
      number: "9",
      bookowner: "Mita",
      title: "wings of water",
      author: "yako",
      condition: "rat bitten",
      publisher: "my uncle",
      genre: "divine",
    },
    {
      number: "10",
      bookowner: "Gita",
      title: "wings of water",
      author: "yako",
      condition: "rat bitten",
      publisher: "my uncle",
      genre: "divine",
    },
  ];
  let navigate = useNavigate();
  return (
    <div className="parents">
      <div className="wrapping">
        <h1>Dashboard Page</h1>
        <div className="input-boxs">
          <input
            type="text"
            placeholder="Search a Book by Zenre/Author/Brand/Publisher"
            required
          />
          <FaSearch className="icon" />
        </div>
        <CgProfile
          className="icon1"
          onClick={() => navigate("/profileScreen")}
        />
      </div>
      <div className="container">
        <div className="cards">
          {bookData.map((book) => {
            return (
              <div className="main-card">
                <div className="card_number">
                  <h2>Book</h2>
                  <br />
                  <p>{book.number}</p>
                </div>
                <a className="card">
                  <h3 className="card_title"> {book.title}</h3>
                  <div className="card_div">
                    <h4>Book Owner:-</h4>
                    <br />
                    <p>{book.bookowner}</p>
                  </div>
                  <div className="card_div">
                    <h4>Author:-</h4>
                    <br />
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
                    <a href="#" onClick={() => navigate("/exchangeBook")}>
                      Exchange the Book
                    </a>
                  </div>
                  <div>
                    <p></p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        <p>
          <a onClick={() => navigate("/requestPage")}>
            View requester page details
          </a>
        </p>
      </div>
    </div>
  );
};
export default Dashboard;
