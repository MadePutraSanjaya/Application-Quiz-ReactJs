import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Home.css"
import QuizSettings from '../../Components/QuizSettings/QuizSettings';

const Home = ({ fetchQuestions }) => {
  const username = localStorage.getItem("username");

  const history = JSON.parse(localStorage.getItem(`history_${username}`)) || [];

  return (
    <>
      <QuizSettings fetchQuestions={fetchQuestions} />
      {/* <h1>History</h1> */}
      {history.length > 0 ? (
        history.map((entry, index) => (
          <Card key={index} className="history-card">
            <CardContent>
              <Typography variant="h5" component="div">
                Result Point: {entry.result}
              </Typography>
              <Typography variant="body2">
                Category Quiz: {entry.category}
              </Typography>
              <Typography variant="body2">
                Difficulty: {entry.difficulty}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        // <p>No history available</p>
        <></>
      )}
    </>
  );
};

export default Home;
