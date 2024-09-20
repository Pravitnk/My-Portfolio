import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTimeline,
  clearErrors,
  clearMessage,
  deleteTimeline,
} from "../../reducers/updateReducer";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { getUser } from "../../reducers/userReducer3";
import { FaTrash } from "react-icons/fa";

const Timeline = () => {
  const dispatch = useDispatch();
  const { message, error, loading } = useSelector((state) => state.updateUser);
  const { message: loginMessage } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.users);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        addTimeline({ title, description, fromDate, toDate })
      ).unwrap();
      dispatch(getUser());

      setTitle("");
      setDescription("");
      setFromDate("");
      setToDate("");
    } catch (error) {
      console.error("Failed to add timeline:", error);
    }
  };

  const deleteHandler = async (id) => {
    await dispatch(deleteTimeline(id)).unwrap();
    dispatch(getUser());
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
    if (loginMessage) {
      toast.success(loginMessage);
      dispatch(clearMessage());
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [message, error, loginMessage, dispatch]);

  return (
    <div className="adminPanel">
      <div className="adminPanelContainer">
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
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="adminPanelInputs"
          />

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="adminPanelInputs"
          />

          <input
            type="date"
            placeholder="From"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="adminPanelInputs"
          />

          <input
            type="date"
            placeholder="To"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="adminPanelInputs"
          />

          <Link to="/account">
            Back <MdKeyboardBackspace />
          </Link>

          <Button type="submit" variant="contained" disabled={loading}>
            Add
          </Button>
        </form>

        <div className="adminPanleYoutubeVideos">
          {user &&
            user?.timeline &&
            user?.timeline.map((item) => (
              <div className="YouTubeCard" key={item._id}>
                <Typography variant="h6" style={{ textAlign: "center" }}>
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  style={{ letterSpacing: "2px", textAlign: "center" }}
                >
                  {item.description}
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "600", textAlign: "center" }}
                >
                  <span style={{ fontWeight: "900", fontSize: "1rem" }}>
                    From :
                  </span>
                  {item.fromDate?.toString().split("T")[0]}
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "600", textAlign: "center" }}
                >
                  {" "}
                  <span style={{ fontWeight: "900", fontSize: "1rem" }}>
                    To :
                  </span>
                  {item.toDate?.toString().split("T")[0]}
                </Typography>
                <Button
                  style={{
                    margin: "auto",
                    display: "block",
                    color: "rgba(40,40,40,0.7",
                  }}
                  onClick={() => deleteHandler(item._id)}
                >
                  <FaTrash />
                </Button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
