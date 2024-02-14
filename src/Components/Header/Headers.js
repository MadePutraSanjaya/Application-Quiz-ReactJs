import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  const isQuizPage = location.pathname === "/quiz";

  return (
    <>
      {username && (
        <span className="username" style={isQuizPage ? textCenter : textLeft}>
          {isQuizPage ? (
            `Good Luck, ${username}`
          ) : (
          `  Hi, ${username}`
          )}
        </span>
      )}
    </>
  );
};

const textCenter = {
  display: "flex",
  justifyContent: "center"
}

const textLeft = {
  display: "flex",
  justifyContent: "left",
};

