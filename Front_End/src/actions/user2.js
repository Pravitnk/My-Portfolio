// import { setUserDetails } from "../reducers/userReducer3.js";
// import axios from "axios";

// export const userLogin = (userData) => async (dispatch) => {
//   try {
//     // Make API call to login endpoint
//     const response = await axios.post("/api/v1/login", userData);
//     // Dispatch action to set user details in store
//     dispatch(setUserDetails(response.data));
//   } catch (error) {
//     // Handle error
//     console.error("Error logging in:", error);
//   }
// };

// src/features/user/userActions.js

// import { setUserDetails } from "../reducers/userReducer3";
// import axios from "axios";

// export const fetchUserDetails = () => async (dispatch) => {
//   try {
//     const response = await axios.get("/api/v1/user");
//     dispatch(setUserDetails(response.data));
//   } catch (error) {
//     console.error("Error fetching user details:", error);
//   }
// };
