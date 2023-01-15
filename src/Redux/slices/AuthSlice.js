import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { signinApi,signupApi,signupVerifyApi } from "../../Components/Api/AuthApi";
export const SignupAuth=createAsyncThunk("signupAuth",async(mainValue)=>{
 
  console.log(mainValue)
  try {
     const response=await axios.post(`https://pakloaders-customer-backend.onrender.com/auth/sign-up`,mainValue);
    return response;
  } catch (error) {
    console.log("Something went wrong")
  }
 
})
export const SigninAuth=createAsyncThunk("signinAuth",async(mainValue)=>{
 
  console.log(mainValue)
  try {
     const response=await axios.post(`https://pakloaders-customer-backend.onrender.com/auth/sign-in`,mainValue);
    return response;
  } catch (error) {
    console.log("Something went wrong")
  }
 
})

const auth =createSlice({
    name:"Auth",
    initialState:[{
      number:'',
      full_name:"",
    }],
    reducers:{
       signup: async (state,action)=>{
        state=action.payload;
        const number =state.number;
        const full_name=state.full_name;
       try {
       const cine= await signinApi();
       console.log(cine);
       } catch (error) {
        console.log('Could not signup');
       }
         
         return console.log(cine);
       },
       signupVarify:(state,action)=>{
        return action.payload
       },
       signin:(state,action)=>{
        return action.payload
       },
       signinVerify:(state,action)=>{
        return action.payload
       }
    },
  
    extraReducers:{
      [SignupAuth.fulfilled]:(state,action)=>{
      return console.log(action.payload) 
      },
      [SigninAuth.fulfilled]:(state,action)=>{
        return console.log(action.payload) 
        },
     
   },
})
export const {signup,signinVerify,signin,signupVarify}=auth.actions;
export const authReducer=auth.reducer;