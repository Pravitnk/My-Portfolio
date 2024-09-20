import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProject,
  clearErrors,
  clearMessage,
} from "../../reducers/updateReducer";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { getUser } from "../../reducers/userReducer3";
import { ProjectCard } from "../projects/Projects";

const Projects = () => {
  const dispatch = useDispatch();
  const { message, error, loading } = useSelector((state) => state.updateUser);
  const { message: loginMessage } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.users);

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescriptiom] = useState("");
  const [techStack, setTechstack] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        addProject({ url, title, description, techStack, image })
      ).unwrap();
      setTimeout(() => {
        dispatch(getUser());
      }, 0);

      setTitle("");
      setUrl("");
      setImage("");
      setDescriptiom("");
      setTechstack("");
    } catch (error) {
      console.error("Failed to add timeline:", error);
    }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();

    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
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
            onChange={(e) => setDescriptiom(e.target.value)}
            className="adminPanelInputs"
          />

          <input
            type="text"
            placeholder="Technologies"
            value={techStack}
            onChange={(e) => setTechstack(e.target.value)}
            className="adminPanelInputs"
          />

          <input
            type="text"
            placeholder="Url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="adminPanelInputs"
          />

          <input
            type="file"
            onChange={handleImage}
            className="adminPanelFileUpload"
            accept="image/*"
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
            user?.projects &&
            user?.projects.map((item) => (
              <ProjectCard
                url={item.url}
                projectImage={item.image.url}
                projectTitle={item.title}
                description={item.description}
                technologies={item.techStack}
                key={item._id}
                isAdmin={true}
                id={item._id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
