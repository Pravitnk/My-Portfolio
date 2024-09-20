import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./admin.css";
import { useDispatch, useSelector } from "react-redux";
// import { userLogin } from "../../actions/user2";
import { clearErrors, clearMessage, login } from "../../reducers/loingUser";
import toast from "react-hot-toast";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { loading, message, error } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [message, error, dispatch]);
  return (
    <div className="login">
      <div className="loginContainer">
        <form className="loginForm" onSubmit={submitHandler}>
          <Typography variant="h4">
            <p>A</p>
            <p>D</p>
            <p>M</p>
            <p>I</p>
            <p style={{ marginRight: "1vmax" }}>N</p>

            <p>P</p>
            <p>A</p>
            <p>N</p>
            <p>E</p>
            <p>L</p>
          </Typography>

          <div>
            <input
              type="email"
              placeholder="Admin Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Admin Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button variant="contained" type="submit" disabled={loading}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
