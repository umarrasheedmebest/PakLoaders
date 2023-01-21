import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL} from '../constent/constent';

export const getAllPost = createAsyncThunk('getAllPost', async () => {
  try {
    const response = await axios.get(`${BASE_URL}post/get-all/1`);
    return response.data;
  } catch (error) {
    console.log('Something went wrong');
  }
});
export const cancelSinglePost = createAsyncThunk('cancelSinglePost', async (id) => {
  console.log(id)
 
    const response = await axios.get(`${BASE_URL}post/cancel/${id}`);
    return response.data;
  
});
export const getSingalPost = createAsyncThunk('getSingalPost', async (id) => {
  console.log(id)
  try {
    const response = await axios.get(`${BASE_URL}post/get/single-post/${id}`);
    return response.data;
  } catch (error) {
    console.log('Something went wrong');
  }
});
export const addPost = createAsyncThunk('addPost', async (formData) => {
  console.log(formData);
 
  //  const response= await axios.post(`${BASE_URL}post/add/2`,formData);
  //  return response;
    let res = await fetch(
      `https://pakloaders-customer-backend.onrender.com/post/add/1`,
      {
        method: 'POST',
        timeout: 61000,
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data; ',
        },
      }
    );
    return console.log(res);
  
});

const post = createSlice({
  name: 'Post',
  initialState: {
    postAllData:[],
    singlePostData:[],
    isLoading:false
  },
    
      
    
  
  reducers: {
    getPostFetch: async (state) => {
      return state.isLoading=true
    },
    getPostSuccess: (state, action) => {
       console.log(action.payload) ;
    },
    getPostFailure: (state) => {
      return state.isLoading=false;
    },
    
  },

  extraReducers: {
    [getAllPost.pending]: (state, action) => {
      return console.log(false);
    },
    [getAllPost.fulfilled]: (state, action) => {
         state.postAllData=action.payload
         const all=state.postAllData
         return console.log(action.payload)
    },
    [getSingalPost.fulfilled]: (state, action) => {
      state.singlePostData=action.payload
      const data=state.singlePostData
      return console.log(data)
 },
 [addPost.fulfilled]: (state, action) => {
  return console.log(action.payload);
},
 [addPost.rejected]: (state, action) => {
  return console.log("Post not create");
},
[cancelSinglePost.fulfilled]: (state, action) => {
  return console.log(action.payload);
},
[cancelSinglePost.rejected]: (state, action) => {
  return console.log("Post not delete");
},
  },
});
export const {getPostFetch,getPostSuccess,getPostFailure} = post.actions;
export const postReducer = post.reducer;
