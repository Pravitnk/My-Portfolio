import React from "react";
import "./footer.css";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, it's <span>Pravit Naik</span> here. I am a{" "}
          <span className="footerInfo">Web Developer and Designer</span>
        </Typography>

        <Link to="/contacts" className="footerContactBtn">
          <Typography>Contact Me</Typography>
        </Link>
      </div>

      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Pravitnk" target="_blank">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/pravit-naik-08204615b"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/edm__enthusiast" target="_blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
