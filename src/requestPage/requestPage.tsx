import React from "react";
import "./requestPage.css";
import { useNavigate } from "react-router-dom";

const RequestPage = () => {
  const bookData = [
    {
      Requester: "1",
      NAME: "Ravi",
      RequestedForBook: "WINGS OF SKY",
    },
    {
      Requester: "2",
      NAME: "Pavi",
      RequestedForBook: "WINGS OF LAND",
    },
    {
      Requester: "3",
      NAME: "Kavi",
      RequestedForBook: "WINGS OF WATER",
    },
    {
      Requester: "4",
      NAME: "Lavi",
      RequestedForBook: "WINGS OF FIRE",
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
                    <p>{book.RequestedForBook}</p>
                  </div>
                  <div>
                    <button
                      type="submit"
                      onClick={() => alert("Requested this book for exchange")}
                    >
                      Exchange Book
                    </button>
                  </div>
                  <div></div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <p>
        <a href="#" onClick={() => navigate("/exchangeBook")}>
          View List of Exchanges Initiated
        </a>
      </p>
    </div>
  );
};

export default RequestPage;
