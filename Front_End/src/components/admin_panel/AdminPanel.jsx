import React, { useEffect, useState } from "react";
import "./AdminPanel.css";
import { Button, Typography } from "@mui/material";
import { Close, Timeline, YouTube } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineProject } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/loingUser";
import {
  clearErrors,
  clearMessage,
  updateUser,
} from "../../reducers/updateReducer";
import toast from "react-hot-toast";

const AdminPanel = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [about, setAbout] = useState({});
  const [skills, setSkills] = useState({});
  const navigate = useNavigate("");

  const dispatch = useDispatch();
  const { message, error, loading } = useSelector((state) => state.updateUser);
  const { loginMessage } = useSelector((state) => state.login);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ name, email, password, skills, about }));
  };

  const handleImage = (e, val) => {
    const file = e.target.files[0];
    const Reader = new FileReader();

    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        if (val === 1) {
          setSkills({ ...skills, image1: Reader.result });
        }
        if (val === 2) {
          setSkills({ ...skills, image2: Reader.result });
        }
        if (val === 3) {
          setSkills({ ...skills, image3: Reader.result });
        }
        if (val === 4) {
          setSkills({ ...skills, image4: Reader.result });
        }
        if (val === 5) {
          setSkills({ ...skills, image5: Reader.result });
        }
        if (val === 6) {
          setSkills({ ...skills, image6: Reader.result });
        }
      }
    };
  };

  const handleAboutImage = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();

    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAbout({ ...about, avatar: Reader.result });
      }
    };
  };
  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (loginMessage) {
      toast.success(loginMessage);
      dispatch(clearMessage());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [message, error, loginMessage, dispatch]);
  return (
    <div className="adminPanel">
      <div className="closePanel">
        <Close onClick={() => navigate("/")} />
      </div>
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
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="adminPanelInputs"
          />

          <input
            type="email"
            placeholder="Eame"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="adminPanelInputs"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="adminPanelInputs"
          />

          <div className="adminPanelSkill">
            <div>
              <Typography>Skill I</Typography>
              <input
                className="adminPanelFileUpload"
                type="file"
                onChange={(e) => handleImage(e, 1)}
                accept="image/*"
              />
            </div>

            <div>
              <Typography>Skill II</Typography>
              <input
                className="adminPanelFileUpload"
                type="file"
                onChange={(e) => handleImage(e, 2)}
                accept="image/*"
              />
            </div>

            <div>
              <Typography>Skill III</Typography>
              <input
                className="adminPanelFileUpload"
                type="file"
                onChange={(e) => handleImage(e, 3)}
                accept="image/*"
              />
            </div>

            <div>
              <Typography>Skill IV</Typography>
              <input
                className="adminPanelFileUpload"
                type="file"
                onChange={(e) => handleImage(e, 4)}
                accept="image/*"
              />
            </div>

            <div>
              <Typography>Skill V</Typography>
              <input
                className="adminPanelFileUpload"
                type="file"
                onChange={(e) => handleImage(e, 5)}
                accept="image/*"
              />
            </div>

            <div>
              <Typography>Skill VI</Typography>
              <input
                className="adminPanelFileUpload"
                type="file"
                onChange={(e) => handleImage(e, 6)}
                accept="image/*"
              />
            </div>
          </div>

          <div className="adminPanelAbout">
            <fieldset>
              <legend>About</legend>
              <input
                type="text"
                placeholder="Name"
                value={about.name}
                onChange={(e) => setAbout({ ...about, name: e.target.value })}
                className="adminPanelInputs"
              />
              <input
                type="text"
                placeholder="Title"
                value={about.title}
                onChange={(e) => setAbout({ ...about, title: e.target.value })}
                className="adminPanelInputs"
              />
              <input
                type="text"
                placeholder="Sub_title"
                value={about.subtitle}
                onChange={(e) =>
                  setAbout({ ...about, subtitle: e.target.value })
                }
                className="adminPanelInputs"
              />

              <input
                type="text"
                placeholder="Description"
                value={about.description}
                onChange={(e) =>
                  setAbout({ ...about, description: e.target.value })
                }
                className="adminPanelInputs"
              />
              <input
                type="text"
                placeholder="Quote"
                value={about.quote}
                onChange={(e) => setAbout({ ...about, quote: e.target.value })}
                className="adminPanelInputs"
              />

              <input
                type="file"
                placeholder="Choose Avatar"
                onChange={handleAboutImage}
                className="adminPanelFileUpload"
                accept="image/*"
              />
            </fieldset>
          </div>

          <Link to="/admin/timeline">
            EXPERIENCE <Timeline />
          </Link>
          <Link to="/admin/youtube">
            YOUTUBE <YouTube />
          </Link>
          <Link to="/admin/projects">
            PROJECTS <AiOutlineProject />
          </Link>

          <Button type="submit" variant="contained" disabled={loading}>
            Update
          </Button>
        </form>

        <Button
          color="error"
          variant="contained"
          style={{ display: "block", margin: "4vmax auto" }}
          onClick={logoutHandler}
        >
          LOGOUT
        </Button>
      </div>
    </div>
  );
};

export default AdminPanel;
