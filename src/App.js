import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Header from './Components/Header/Headers';
const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div className="app">
        {!isHomePage && <Header />}
      </div>

      <Routes>
        <Route path="/" exact element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
