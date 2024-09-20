import React from "react";
import "./projects.css";
import { Button, Typography } from "@mui/material";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../reducers/updateReducer";
import { getUser } from "../../reducers/userReducer3";

// project card
export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id)).unwrap();
    dispatch(getUser());
  };

  return (
    <>
      <a className="projectCard" href={url} target="blank">
        <div>
          <img src={projectImage} alt="project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>

        <div>
          <Typography variant="h4">About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">
            <span style={{ color: "blue" }}>Tech StacK: </span>
            {technologies}
          </Typography>
        </div>
      </a>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40, 40, 40, 0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};
const Projects = ({ projects }) => {
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectWrapper">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            id={project._id}
            url={project.url}
            projectImage={project.image.url}
            projectTitle={project.title}
            description={project.description}
            technologies={project.techStack}
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: '100 1.5rem "Roboto"' }}>
        All The Project Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
