import React, { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Header, { WelcomeLogin } from "./Components/Header/Headers";
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import Container from '@mui/material/Container';

const App = () => {
  const location = useLocation();
  const isQuizPage = location.pathname === "/quiz";
  const [question, setQuestion] = useState('')
  const [score, setScore] = useState(0);

  const fetchQuestions = () => {};

  return (
    <>
      <Container>
        <div className="app">
          {isQuizPage && <Header />} <WelcomeLogin />
        </div>

        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route
            path="/home"
            element={<Home fetchQuestions={fetchQuestions} />}
          />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
