import React from "react";
import "./exchangeBook.css";
import { useNavigate } from "react-router-dom";
const ExchangeBook = () => {
  const bookData = [
    {
      Requester: "1",
      NAME: "Ravi",
      status: "Accepted",
    },
    {
      Requester: "2",
      NAME: "Pavi",
      status: "Pending",
    },
    {
      Requester: "3",
      NAME: "Kavi",
      status: "Rejected",
    },
  ];
  let navigate = useNavigate();
  return (
    <div className="parents">
      <div className="wrapping">
        <h1>Requests viewing page</h1>
        <div className="input-boxs"></div>
      </div>
      <div id="con" className="container">
        <div className="cards">
          {bookData.map((book) => {
            return (
              <div>
                <a target="_blank" className="card">
                  <div className="card_div">
                    <h4>Request Number:-</h4>&nbsp;
                    <p>{book.Requester}</p>
                  </div>
                  <div className="card_div">
                    <h4>Requester Name:-</h4>&nbsp;
                    <p>{book.NAME}</p>
                  </div>
                  <div className="card_div">
                    <h4>Requested with Book:-</h4>&nbsp;
                    <p>{book.status}</p>
                  </div>
                  <div></div>
                </a>
              </div>
            );
          })}
          <div className="back-to-dashboard">
            <p>
              <a onClick={() => navigate("/dashboard")}>Back to Dashboard</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExchangeBook;
