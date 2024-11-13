import React from "react";
import Login from "./login/login";
import Signin from "./signin/signin";
import Dashboard from "./dashboard/dashboard";
import ProfileScreen from "./profileScreen/profileScreen";
import AddBook from "./addBook/addBook";
import MyBooksList from "./myBooksList/myBooksList";
import RequestPage from "./requestPage/requestPage";
import ExchangeBook from "./exchangeBook/exchangeBook";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profileScreen" element={<ProfileScreen />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/myBooksList" element={<MyBooksList />} />
          <Route path="/requestPage" element={<RequestPage />} />
          <Route path="/exchangeBook" element={<ExchangeBook />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
