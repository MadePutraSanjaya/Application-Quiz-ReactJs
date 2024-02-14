import React, {useState} from "react";
import "./QuizSettings.css";
import TextField from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Categories from "../../Data/Categories";
import Button  from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const QuizSettings = ({ fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty) {
      setError(true);
      return;
    } else {
      setError(false);
      const username = localStorage.getItem("username");
      localStorage.setItem(
        `${username}_settings`,
        JSON.stringify({ category, difficulty })
      );
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <>
      <div className="content">
        <div className="settings">
          <span style={{ fontSize: "30" }}>Choose Your Quiz</span>

          <div className="settings__select">
            {error && <ErrorMessage>Fill Categories or Difficulty First!</ErrorMessage> }
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="category">Select Category</InputLabel>
              <Select
                labelId="category"
                id="category"
                label="Select Category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                {Categories.map((category) => (
                  <MenuItem key={category.category} value={category.value}>
                    {category.category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="difficulty">Select Difficulty</InputLabel>
              <Select
                labelId="difficulty"
                id="difficulties"
                label="Select Difficulty"
                style={{ marginBottom: 30 }}
                onChange={(e) => setDifficulty(e.target.value)}
                value={difficulty}
              >
                <MenuItem key="Easy" value="easy">
                  Easy
                </MenuItem>
                <MenuItem key="Medium" value="medium">
                  Medium
                </MenuItem>
                <MenuItem key="Hard" value="hard">
                  Hard
                </MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              size="large"
              className="buttonQuizSettings"
              onClick={handleSubmit}
            >
              Start Your Quiz
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizSettings;
