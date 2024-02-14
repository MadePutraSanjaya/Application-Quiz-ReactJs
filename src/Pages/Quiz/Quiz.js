import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./Quiz.css";
import Question from '../../Components/Question/Question';

const Quiz = ({ questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState("");
  const [currentQues, setCurrentQues] = useState(0);

  useEffect(() => {
    console.log(questions);

    setOptions(
      questions &&
        handleShuffle([
          questions[currentQues]?.correct_answer,
          ...questions[currentQues]?.incorrect_answers,
        ])
    );
    console.log(questions);
  }, [currentQues, questions]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currentQues].category} </span>
            <span>Score: {score} </span>
          </div>

          <Question
            currentQues={currentQues}
            setCurrentQues={setCurrentQues}
            questions={questions}
            options={options}
            correct={questions[currentQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
