import React from "react";
import "./profileScreen.css";
import { useNavigate } from "react-router-dom";
const ProfileScreen = () => {
  let navigate = useNavigate();
  return (
    <div className="profilescreen">
      <h1>Profile Screen</h1>
      <div className="input-box">
        <input type="text" placeholder="My Name" required />
        <div className="mydetails">
          <h4> Pavani</h4>
        </div>
      </div>
      <div className="input-box">
        <input type="text" placeholder="My Email" required />
        <div className="mydetails">
          <h4> pavanikamboji123@gmail.com</h4>
        </div>
      </div>
      <div className="input-box">
        <input type="text" placeholder="My Phone number" required />
        <div className="mydetails">
          <h4> 8762230165</h4>
        </div>
      </div>
      <div className="input-box">
        <input type="text" placeholder="My location" required />
        <div className="mydetails">
          <h4> Bangalore</h4>
        </div>
        <div>
          <p>
            <a href="#" onClick={() => navigate("/myBooksList")}>
              Edit my personal details
            </a>
          </p>
        </div>
      </div>
      <p>
        <a href="#" onClick={() => navigate("/myBooksList")}>
          My Books List
        </a>
      </p>
      <p>
        <a href="#" onClick={() => navigate("/exchangeBook")}>
          List of Exchanges Initiated
        </a>
      </p>
      <p>
        <a href="#" onClick={() => navigate("/history")}>
          History of Transactions
        </a>
      </p>
    </div>
  );
};
export default ProfileScreen;
