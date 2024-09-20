import axios from "axios";

export const getUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "getUserRequest",
    });

    const { data } = await axios.get("/api/v1/user");

    dispatch({
      type: "getUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "getUserFailure",
      payload: error.response.data.message,
    });
  }
};

export const userLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "loginRequest",
    });

    const { data } = await axios.post(
      "/api/v1/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "loginSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "loginFailure",
      payload: error.response.data.message,
    });
  }
};
