import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {
  signinApi,
  signupApi,
  signupVerifyApi,
} from '../../Components/Api/AuthApi';
import {BASE_URL} from '../constent/constent';
import update from 'immutability-helper';
// export const SignupAuth=createAsyncThunk("signupAuth",async(mainValue)=>{

//   console.log(mainValue)
//   try {
//      const response=await axios.post(`${BASE_URL}auth/sign-up`,mainValue);
//     return response;
//   } catch (error) {
//     console.log("Something went wrong")
//   }

// })
// export const SigninAuth=createAsyncThunk("signinAuth",async(mainValue)=>{

//   console.log(mainValue)
//   try {
//      const response=await axios.post(`${BASE_URL}auth/sign-in`,mainValue);
//     return response;
//   } catch (error) {
//     console.log("Something went wrong")
//   }

// })

const auth = createSlice({
  name: 'Auth',
  initialState: {
    //sign up
    signUpRequest: false,
    signUpResponse: [],
    signUpOtpVarifyRequest: false,
    signUpOtpVarifyResponse: [],

    //  Sign In
    signInRequest: false,
    signInResponse: [],
    signInOtpVarifyRequest: false,
    signInOtpVarifyResponse: [],
  },

  reducers: {
    signupRequest: (state, action) =>
      update(state, {
        signUpRequest: {$set: true},
      }),
    signUpResponse: (state, action) =>
      update(state, {
        signUpResponse: {$set: action.payload},
        signUpRequest: {$set: false},
      }),
    signupVarifyRequest: (state, action) =>
      update(state, {
        signInOtpVarifyRequest: {$set: true},
      }),
    signupOtpResponse: (state, action) =>
      update(state, {
        signUpOtpVarifyResponse: {$set: action.payload},
        signUpOtpVarifyRequest: {$set: false},
      }),
    signinRequest: (state, action) =>
      update(state, {
        signInRequest: {$set: true},
      }),
    signinResponse: (state, action) =>
      update(state, {
        signInResponse: {$set: action.payload},
      }),
    signinOtpVerifyRequest: (state, action) =>
      update(state, {
        signInOtpVarifyRequest: {$set: true},
      }),
    signinOtpVerifyResponse: (state, action) =>
      update(state, {
        signInOtpVarifyResponse: {$set: action.payload},
      }),
  },

  // extraReducers:{
  //   [SignupAuth.fulfilled]:(state,action)=>{
  //   return console.log(action.payload)
  //   },
  //   [SigninAuth.fulfilled]:(state,action)=>{
  //     return console.log(action.payload)
  //     },

  //  },
});
export const {
  signupRequest,
  signUpResponse,
  signupVarifyRequest,
  signinOtpVerifyRequest,
  signinOtpVerifyResponse,
  signinRequest,
  signinResponse,
  signupOtpResponse,
} = auth.actions;
export const authReducer = auth.reducer;
