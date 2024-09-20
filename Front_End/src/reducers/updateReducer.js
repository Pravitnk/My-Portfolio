import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../config";

// Thunk for updating user
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ name, email, password, skills, about }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `${server}/api/v1/admin/update`,
        { name, email, password, skills, about },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Ensure cookies are sent
        }
      );
      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addTimeline = createAsyncThunk(
  "user/addTimeline",
  async ({ title, description, fromDate, toDate }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${server}/api/v1/admin/add/timeline`,
        {
          title,
          description,
          fromDate,
          toDate,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Ensure cookies are sent
        }
      );

      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteTimeline = createAsyncThunk(
  "user/deleteTimeline",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `${server}/api/v1/admin/timeline/${id}`,
        {
          withCredentials: true, // Ensure cookies are sent
        }
      );
      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

//youtube
export const addYoutube = createAsyncThunk(
  "user/addYoutube",
  async ({ url, title, image }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${server}/api/v1/admin/add/youtube`,
        {
          url,
          title,
          image,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Ensure cookies are sent
        }
      );
      console.log(data.user);

      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteYoutube = createAsyncThunk(
  "user/deleteYoutube",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `${server}/api/v1/admin/youtube/${id}`,
        {
          withCredentials: true, // Ensure cookies are sent
        }
      );
      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

//project
export const addProject = createAsyncThunk(
  "user/addProject",
  async (
    { url, title, description, techStack, image },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.post(
        `${server}/api/v1/admin/add/projects`,
        {
          url,
          title,
          description,
          techStack,
          image,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Ensure cookies are sent
        }
      );
      console.log(data.user);

      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteProject = createAsyncThunk(
  "user/deleteProject",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `${server}/api/v1/admin/projects/${id}`,
        {
          withCredentials: true, // Ensure cookies are sent
        }
      );
      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

//contact
export const contact_us = createAsyncThunk(
  "user/contactUs",
  async ({ name, email, message }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${server}/api/v1/contacts`,
        {
          name,
          email,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Ensure cookies are sent
        }
      );
      console.log(data.user);

      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Slice
const updateSlice = createSlice({
  name: "updateUser",
  initialState: {
    loading: false,
    message: null,
    error: null,
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
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //timeline
      .addCase(addTimeline.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTimeline.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(addTimeline.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteTimeline.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTimeline.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(deleteTimeline.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //youtube

      .addCase(addYoutube.pending, (state) => {
        state.loading = true;
      })
      .addCase(addYoutube.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(addYoutube.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteYoutube.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteYoutube.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(deleteYoutube.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //project
      .addCase(addProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(addProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //contact
      .addCase(contact_us.pending, (state) => {
        state.loading = true;
      })
      .addCase(contact_us.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(contact_us.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { clearErrors, clearMessage } = updateSlice.actions;
export default updateSlice.reducer;
