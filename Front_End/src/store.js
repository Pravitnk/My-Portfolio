import { configureStore } from "@reduxjs/toolkit";
import userReducer3 from "./reducers/userReducer3";
import loingUser from "./reducers/loingUser";
import updateReducer from "./reducers/updateReducer";

const store = configureStore({
  reducer: {
    users: userReducer3,
    login: loingUser,
    updateUser: updateReducer,
  },
});

export default store;
