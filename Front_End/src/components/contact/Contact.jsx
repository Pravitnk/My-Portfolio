import React, { useEffect, useState } from "react";
import "./contact.css";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  clearMessage,
  contact_us,
} from "../../reducers/updateReducer";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const {
    message: alertMessage,
    error,
    loading,
  } = useSelector((state) => state.updateUser);
  const { message: loginMessage } = useSelector((state) => state.login);

  const contactFormHandler = (e) => {
    e.preventDefault();
    dispatch(contact_us({ name, email, message }));
    setName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    if (alertMessage) {
      toast.success(alertMessage);
      dispatch(clearMessage);
    }
    if (loginMessage) {
      toast.success(loginMessage);
      dispatch(clearMessage);
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors);
    }
  }, [alertMessage, loginMessage, error, dispatch]);

  return (
    <div className="contact">
      <div className="contactRightBar"></div>

      <div className="contactContainer">
        <form className="contactContainerForm" onSubmit={contactFormHandler}>
          <Typography variant="h4">Contact Me</Typography>

          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Message"
            cols="30"
            rows="10"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <Button variant="contained" type="submit" disabled={loading}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
