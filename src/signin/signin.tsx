import React from "react";
import "./signin.css";
import { IoMdMail } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  let navigate = useNavigate();
  function comparePassword() {
    const password = document.getElementById("password") as HTMLInputElement;
    const confirmPassword = document.getElementById(
      "confirmPassword"
    ) as HTMLInputElement;
    if (password.value === confirmPassword.value) {
      alert("Registered successfully ");

      navigate("/dashboard");
    } else {
      alert("ERROR : password and confirm password should match");
    }
  }

  return (
    <div className="parent">
      <div className="wrapper">
        <form action="">
          <h1>Sign up</h1>
          <div className="input-box">
            <input type="text" placeholder="Name" required />
            <FaUserAlt className="icon" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Email" required />
            <IoMdMail className="icon" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Phone Number" required />
            <FaPhone className="icon" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Location" required />
            <FaLocationDot className="icon" />
          </div>
          <div className="input-box">
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="input-box">
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot"></div>
          <button type="submit" onClick={comparePassword}>
            Sign up
          </button>
          <div className="register-link"></div>
          <div className="registers-link">
            <p>
              Back to login page ? &nbsp;
              <a
                href="#"
                onClick={() => {
                  // navigate("/");
                  fetch("http://localhost:8081/api/member", {
                    method: "get",
                    mode: "no-cors",
                  })
                    .then((resp) => {
                      if (!resp.ok) {
                        console.log("error");
                      }
                      return resp.json();
                    })
                    .then((data) => {
                      console.log("Response data:", data);
                    });
                }}
              >
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signin;
