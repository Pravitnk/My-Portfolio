import React from "react";
import "./youtubecard.css";
import { Button, Typography } from "@mui/material";
import { FaTrash } from "react-icons/fa";
import { deleteYoutube } from "../../reducers/updateReducer";
import { useDispatch } from "react-redux";
import { getUser } from "../../reducers/userReducer3";

const YouTubeCart = ({
  url = "https://in.video.search.yahoo.com/search/video;_ylt=AwrKEjwqGeNlYw4is0e7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Nj?p=shreyans+coding+school+react&vm=r&type=E211IN714G0&ei=UTF-8&fr=mcafee&turl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOVP.TdeJXaMKWJ-OJxNLk_rf7QEsDh%26pid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2LsOyOaobrc&tit=%F0%9F%9A%80+Learn+React+JS+in+90+Minutes%21+Complete+Crash+Course+for+Beginners+%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB&pos=1&vid=151fa1bf5b36f0728371ece69c56b632&sigr=I7GzcAw1VrYT&sigt=96WxKxT4t4Rt&sigi=r8Ml.nqNFeNr",
  title = "Title Here",
  image,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteYoutube(id)).unwrap();
    dispatch(getUser());
  };
  return (
    <div className="YouTubeCard">
      <a href={url} target="blank">
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "900",
            fontSize: "1rem",
            marginBottom: "10px",
          }}
        >
          {title}
        </Typography>
        <img src={image} alt="video" />
      </a>
      {isAdmin && (
        <Button
          style={{
            margin: "auto",
            display: "block",
            color: "rgba(40,40,40,0.7)",
          }}
          onClick={() => deleteHandler(id)}
        >
          <FaTrash />
        </Button>
      )}
    </div>
  );
};

export default YouTubeCart;
