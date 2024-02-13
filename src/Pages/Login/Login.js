import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() !== "") {
      localStorage.setItem("username", username.trim());

      const userHistory =
        JSON.parse(localStorage.getItem(`history_${username}`)) || [];

      localStorage.setItem(`history_${username}`, JSON.stringify(userHistory));

      navigate("/home");
    } else {
      alert("Please enter a username");
    }
  };
  console.log(username);

  return (
    <div className="loginPage">
      <h1 className="loginText">Login</h1>
      <TextField
        size="small"
        fullWidth
        variant="outlined"
        className="loginInput"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <div className="login">
        <Button
          variant="contained"
          className="loginButton"
          onClick={handleLogin}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Login;
