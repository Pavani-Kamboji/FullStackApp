import React from "react";
import "./login.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let navigate = useNavigate();
  function myFunction() {
    let email = prompt(
      "Please enter your Email Id to get a system generated password:",
      ""
    );
    if (email !== null || email !== "") {
      alert("email sent");
    }
    // document.getElementById("demo").innerHTML = text;
  }
  return (
    <div className="parent">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            {/* <label>
            <input type="checkbox" />
            Remember me
          </label> */}
            <a onClick={myFunction}>Forgot password?</a>
          </div>
          <div>
            <button /* type="submit" onClick={() => alert("loggedin")}*/>
              Login
            </button>
          </div>
          <div className="register-link">
            <p>
              Don't have an account? &nbsp;
              <a onClick={() => navigate("/signin")}>Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
