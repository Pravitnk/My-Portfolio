import React, { useEffect } from "react";
import "./home.css";
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import moon from "../../images/moon.jpg";
import venus from "../../images/venus.jpg";
import spaceImg from "../../images/Space.jpg";
import Typography from "@mui/material/Typography";
import TimeLine from "../timeline/Timeline";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import YouTubeCart from "../youtubecart/YouTubeCart";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";
import { FaJava } from "react-icons/fa";

function Home({ timelines = [], youtubes = [], skills = {} }) {
  console.log({ timelines, youtubes, skills }); // Log the props to debug

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTaxture = textureLoader.load(moon);
    const venusTaxture = textureLoader.load(venus);
    const spaceTaxture = textureLoader.load(spaceImg);

    const canvas = document.querySelector(".homeCanvas");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const render = new THREE.WebGL1Renderer({ canvas });
    camera.position.set(4, 4, 8);

    // for moond
    const circlegeometry = new THREE.SphereGeometry(2.1, 64, 64); // structure
    const circlematerial = new THREE.MeshStandardMaterial({ map: moonTaxture }); //style
    const circle = new THREE.Mesh(circlegeometry, circlematerial);

    // venus
    const venusgeometry = new THREE.SphereGeometry(3, 64, 64); // structure
    const venusmaterial = new THREE.MeshBasicMaterial({ map: venusTaxture }); //style
    const venuss = new THREE.Mesh(venusgeometry, venusmaterial);
    venuss.position.set(8, 5, 5);

    const pointlight = new THREE.PointLight(0xffffff, 40);
    const pointlight2 = new THREE.PointLight(0xffffff, 0.2);
    pointlight.position.set(8, 5, 5);
    pointlight2.position.set(-8, -5, -5);

    const lighthelper = new THREE.PointLightHelper(pointlight);

    // const controls = new OrbitControls(camera, render.domElement);
    scene.add(venuss);
    scene.add(circle);
    scene.add(pointlight);
    scene.add(pointlight2);
    scene.add(lighthelper);
    scene.background = spaceTaxture;

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX < window.innerWidth / 2) {
        circle.rotation.x -= constSpeed;
        circle.rotation.y += constSpeed;
        venuss.rotation.x -= constSpeed;
        venuss.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        circle.rotation.x -= constSpeed;
        circle.rotation.y -= constSpeed;
        venuss.rotation.x -= constSpeed;
        venuss.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerWidth / 2) {
        circle.rotation.x -= constSpeed;
        circle.rotation.y += constSpeed;
        venuss.rotation.x -= constSpeed;
        venuss.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerWidth / 2) {
        circle.rotation.x -= constSpeed;
        circle.rotation.y -= constSpeed;
        venuss.rotation.x -= constSpeed;
        venuss.rotation.y -= constSpeed;
      }
    });

    const animateCube = () => {
      requestAnimationFrame(animateCube);
      circle.rotation.y += 0.001;
      venuss.rotation.y += 0.001;
      render.setSize(window.innerWidth, window.innerHeight);
      render.render(scene, camera);
    };
    animateCube();

    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.002;

      const skillsBox = document.getElementById("homeSkillsBox");

      if (window.scrollY > 1500) {
        skillsBox.style.animationName = "homeSkillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeSkillsBoxAnimationOff";
      }
    });
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
        <Typography variant="h4">
          <p>P</p>
          <p>R</p>
          <p>A</p>
          <p>V</p>
          <p>I</p>
          <p>T</p>
          <br />
          <p>N</p>
          <p>A</p>
          <p>I</p>
          <p>K</p>
        </Typography>

        <div className="homeCanvasBox">
          {/* <Typography variant="h2">WEB</Typography> */}
          <Typography variant="h2">WEB DESIGNER</Typography>
          <Typography variant="h2">& DEVELOPER</Typography>
        </div>

        <Link to="/projects">VIEW WORK</Link>
        <Link
          className="homeCanvasResume"
          to="https://drive.google.com/file/d/1XEvlRqQLeJd1W4IfPXXV7QJppjUVpnoN/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          RESUME
        </Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="homeContainer">
        <Typography variant="h3">EXPERIENCE</Typography>
        <TimeLine timelines={timelines} />
      </div>

      <div className="homeSkill">
        <Typography variant="h3">SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces1">
            <img src={skills.image1.url} alt="faces1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFaces2">
            <img src={skills.image2.url} alt="faces2" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFaces3">
            <img src={skills.image3.url} alt="faces3" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFaces4">
            <img src={skills.image4.url} alt="faces4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFaces5">
            <img src={skills.image5.url} alt="faces5" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFaces6">
            <img src={skills.image6.url} alt="faces6" />
          </div>
        </div>

        <div className="cubeShadow"></div>

        <div className="homeSkillsBox" id="homeSkillsBox">
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiReact />
          <SiNodedotjs />
          <SiExpress />
          <SiMongodb />
          <SiCplusplus />
          <FaJava />
        </div>
      </div>

      <div className="homeYouTube">
        <Typography variant="h3">COURSES</Typography>

        <div className="homeYouTubeWrapper">
          {youtubes.map((item) => (
            <YouTubeCart
              url={item.url}
              image={item.image.url}
              title={item.title}
              id={item._id}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
