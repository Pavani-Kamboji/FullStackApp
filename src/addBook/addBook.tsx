import React from "react";
import "./addBook.css";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
  let navigate = useNavigate();
  return (
    <div className="parent">
      <div className="wrapper">
        <h1>Add Your Book</h1>
        <div className="input-box">
          <input type="text" placeholder="Title " required />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Author" required />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Publisher" required />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Genre" required />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Condition" required />
        </div>
        <div>
          <p>
            <button
              type="submit"
              onClick={() =>
                alert(
                  "Book Added to you List Please navigate to My books list to view the added book"
                )
              }
            >
              Add Book
            </button>
          </p>
        </div>
        <p>
          <a href="#" onClick={() => navigate("/myBooksList")}>
            My Books List
          </a>
        </p>
      </div>
    </div>
  );
};
export default AddBook;
