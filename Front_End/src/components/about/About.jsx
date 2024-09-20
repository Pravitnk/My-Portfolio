import React from "react";
import "./about.css";
import { Typography } from "@mui/material";

const About = ({ about }) => {
  console.log(about);

  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>{about.quote}</Typography>
      </div>

      <div className="aboutContainer2">
        <div>
          <img className="aboutAvatar" src={about.avatar.url} alt="avatar" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            {about.name}
          </Typography>

          <Typography>{about.title}</Typography>
          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            {about.subtitle}
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "center",
            }}
          >
            {about.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
