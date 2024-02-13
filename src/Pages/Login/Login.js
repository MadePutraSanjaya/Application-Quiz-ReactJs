import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
import { useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    if (username.trim() !== "") {
      localStorage.setItem("username", username.trim());
      history.push('/quiz')
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
      <Button variant="contained" className="loginButton" onClick={handleLogin}>
        Next
      </Button>
      </div>
    </div>
  );
}

export default Login;
