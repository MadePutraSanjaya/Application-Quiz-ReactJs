import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
        <div className="header">
          <Link to="/" className="title">
            Quiz
          </Link>
          <hr className="divider" />
        </div>
    </>
  );
};

export default Header;

export const WelcomeLogin = () => {
  var username = localStorage.getItem("username");

  return (
    <>
      {username && (
          <span className="username">Hi, {username}</span>
      )}
    </>
  );
};
