import { createSlice } from '@reduxjs/toolkit'
// import { successLogout } from './UserActions';

const initialState = {
  user: {},
  error: null,
  loading: false
}

export const userSlices = createSlice({
  name: 'user',
  initialState,
  reducers: {
    successSign: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    failedSign: (state, action) => {
      state.error = action.payload;
    },

    successLogin: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    failedLogin: (state, action) => {
      state.error = action.payload;
    },

    successLogout: (state, action) => {
      state.user = {};
      state.error = null;
      
    },

    successDelete: (state) => {
      state.user = {};
      state.error = null;
    },
    failedDelete: (state, action) => {
      state.error = action.payload;
    },

    requestUpdate: (state) => {
      state.loading = true;
    },

    successUpdate: (state, action) => {
      state.user = action.payload;
      state.error = null;
      state.loading = false;
    },

    failedUpdate: (state, action) => {

      state.error = action.payload;
    },


  },
})


export const { successSign,
  failedSign,
  successLogin,
  failedLogin,
  successLogout,
  successDelete,
  failedDelete,
  successUpdate,
  failedUpdate,
  requestUpdate
} = userSlices.actions

export default userSlices.reducer