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
        signInRequest: {$set: false},
      }),
    signinOtpVerifyRequest: (state, action) =>
      update(state, {
        signInOtpVarifyRequest: {$set: true},

      }),
    signinOtpVerifyResponse: (state, action) =>
      update(state, {
        signInOtpVarifyResponse: {$set: action.payload},
        signInOtpVarifyRequest: {$set: false},

      }),
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
} = auth.actions;
export const authReducer = auth.reducer;
