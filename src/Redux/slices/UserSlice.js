import {createSlice,} from '@reduxjs/toolkit';
import update from 'immutability-helper';
const user = createSlice({
  name: 'user',
  initialState: {
    //Create user
    deleteUserRequest: false,
    deleteUserResponse: '',
    //  Single user 
    updateUserRequest: false,
    updateUserResponse: '',
    // Cancel user
    getUserRequest: false,
    getUserResponse: [],
    // Get All user
    updateUserImageRequest:false,
    updateUserImageResponse: [],
  },

  reducers: {
    deleteUserRequest: (state, action) =>
      update(state, {
        deleteUserRequest: {$set: true},
      }),
    deleteUserResponse: (state, action) =>
      update(state, {
        deleteUserResponse: {$set: action.payload},
        // deleteUserRequest: {$set: false},
      }),
    getUserRequest: (state, action) =>
      update(state, {
        getUserRequest: {$set: true},
      }),
    getUserResponse: (state, action) =>
      update(state, {
        getUserResponse: {$set: action.payload},
        getUserRequest: {$set: false},
        
      }),
    updateUserRequest: (state, action) =>
      update(state, {
        updateUserRequest: {$set: true},
      }),
    updateUserResponse: (state, action) =>
      update(state, {
        updateUserResponse: {$set: action.payload},
        updateUserRequest: {$set: false},

      }),
    updateUserImageRequest: (state, action) =>
      update(state, {
        updateUserImageRequest: {$set: true},
      }),
    updateUserImageResponse: (state, action) =>
      update(state, {
        updateUserImageResponse: {$set: action.payload},
      }),
  },
});
export const {
  deleteUserRequest,
  deleteUserResponse,
  getUserRequest,
  updateUserRequest,
  updateUserImageResponse,
  updateUserImageRequest,
  updateUserResponse,
  getUserResponse,
} = user.actions;
export const userReducer = user.reducer;
