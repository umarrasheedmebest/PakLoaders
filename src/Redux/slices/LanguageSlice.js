import { createSlice } from "@reduxjs/toolkit";


const language =createSlice({
    name:"Language",
    initialState:true,
    reducers:{
        english:(state,action)=>{
         return state=true
        },
        urdu:(state,action)=>{
            return state=false
        }
    }
})
export const {english,urdu}=language.actions;
export const languageReducer=language.reducer;
