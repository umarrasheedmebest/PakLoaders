import {createSlice,} from '@reduxjs/toolkit';
import update from 'immutability-helper';
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
    signInMessage:false,
    signInResponse: [],
    signInOtpVarifyRequest: false,
    otpMessage:false,
    signInOtpVarifyResponse: [],
    // Error Handling State
    errorMessage:''
    
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
        signUpOtpVarifyRequest: {$set: true},
      }),
    signupOtpResponse: (state, action) =>
      update(state, {
        signUpOtpVarifyResponse: {$set: action.payload},
        signUpOtpVarifyRequest: {$set: false},
      }),
    signinRequest: (state, action) =>
      update(state, {
        signInRequest: {$set: true},
        signInMessage:{$set :false}
      }),
    signinResponse: (state, action) =>
      update(state, {
        signInResponse: {$set: action.payload},
        signInMessage:{$set:true},
        signInRequest: {$set: false},
      }),
    signinOtpVerifyRequest: (state, action) =>
      update(state, {
        signInOtpVarifyRequest: {$set: true},
        otpMessage: {$set: false}

      }),
    signinOtpVerifyResponse: (state, action) =>
      update(state, {
        signInOtpVarifyResponse: {$set: action.payload},
        signInOtpVarifyRequest: {$set: false},
        otpMessage: {$set: true}

      }),
     
      errorMessage:(state,action)=>
      update(state,{
        // errorMessage: {$set: action.payload},
        signinOtpVerifyRequest: {$set:false},
        signInMessage:{$set:true},

      }),
      logoutHandle:(state,action)=>
      update(state,{
       
        signinOtpVerifyRequest: {$set:false},
        signInMessage:{$set:false},
        signInRequest: {$set: false},
        otpMessage: {$set: false}
      })
  },
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
  errorMessage,
  logoutHandle
} = auth.actions;
export const authReducer = auth.reducer;
