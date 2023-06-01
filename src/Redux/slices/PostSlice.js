import {createSlice,} from '@reduxjs/toolkit';
import update from 'immutability-helper';
const post = createSlice({
  name: 'post',
  initialState: {
    //Create Post
    createPostRequest: false,
    createPostResponse: [],
    //  Single Post 
    singlePostRequest: false,
    singlePostResponse: [],
    // Cancel Post
    cancelPostRequest: false,
    cancelPostResponse: [],
    // Get All Post
    getAllPostRequest:false,
    getAllPostResponse: [],
  },

  reducers: {
    createPostRequest: (state, action) =>
      update(state, {
        createPostRequest: {$set: true},
      }),
    createPostResponse: (state, action) =>
      update(state, {
        createPostResponse: {$set: action.payload},
        // createPostRequest: {$set: false},
      }),
    cancelPostRequest: (state, action) =>
      update(state, {
        cancelPostRequest: {$set: true},
      }),
    cancelPostResponse: (state, action) =>
      update(state, {
        cancelPostResponse: {$set: action.payload},
        // signUpOtpVarifyRequest: {$set: false},
      }),
    singlePostRequest: (state, action) =>
      update(state, {
        singlePostRequest: {$set: true},
      }),
    singlePostResponse: (state, action) =>
      update(state, {
        singlePostResponse: {$set: action.payload},
      }),
    getAllPostRequest: (state, action) =>
      update(state, {
        getAllPostRequest: {$set: true},
      }),
    getAllPostResponse: (state, action) =>
      update(state, {
        getAllPostResponse: {$set: action.payload},
      }),
  },
});
export const {
  createPostRequest,
  createPostResponse,
  cancelPostRequest,
  getAllPostRequest,
  getAllPostResponse,
  singlePostRequest,
  singlePostResponse,
  cancelPostResponse,
} = post.actions;
export const postReducer = post.reducer;
