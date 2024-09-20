import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../config";

export const login = createAsyncThunk(
  "login/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${server}/api/v1/login`,
        { email, password },
        { withCredentials: true },
        { headers: { "Content-Type": "application/json" } }
      );
      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk(
  "login/logout",
  async (_, { rejectWithValue }) => {
    try {
      console.log("1");

      const { data } = await axios.get(`${server}/api/v1/logout`, {
        withCredentials: true,
      });
      console.log("2");

      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Async thunk for loading user
export const loadUser = createAsyncThunk(
  "login/loadUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${server}/api/v1/me`, {
        withCredentials: true,
      });
      return data.user;
    } catch (error) {
      console.log("error", error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loading: false,
    isAuthenticated: false,
    user: null,
    error: null,
    message: null,
  },
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.isAuthenticated = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.message = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })

      //loadUser
      .addCase(loadUser.pending, (state) => {
        state.loading = true;
        state.isAuthenticated = false;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      // Logout
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.message = action.payload;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
      });
  },
});

// Export actions
export const { clearErrors, clearMessage } = loginSlice.actions;

// Export reducer
export default loginSlice.reducer;
