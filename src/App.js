import React, { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Header, { WelcomeLogin } from "./Components/Header/Headers";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import Container from "@mui/material/Container";
import axios from "axios";

const App = () => {
  const location = useLocation();
  const isQuizPage = location.pathname === "/quiz";
  const isLoginPage = location.pathname === "/";
  const [questions, setQuestions] = useState("");
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10${
          category && `&category=${category}`
        }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
      );
      console.log(data);

      setQuestions(data.results);
    } catch (error) {
      console.error("Error Fetch Question");
    }
  };

  return (
    <>
      <Container>
        <div className="app">
          {isQuizPage && <Header />} {!isLoginPage && <WelcomeLogin />} 
        </div>

        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route
            path="/home"
            element={<Home fetchQuestions={fetchQuestions} />}
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                questions={questions}
                setQuestions={setQuestions}
                score={score}
                setScore={setScore}
              />
            }
          />
          <Route path="/result" element={<Result score={score} />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
