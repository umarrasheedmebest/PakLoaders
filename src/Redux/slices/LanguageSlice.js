import { createSlice } from "@reduxjs/toolkit";


const language =createSlice({
    name:"Language",
    initialState:true,
    reducers:{
        english:(state,action)=>{
            const change=true
         return console.log(change) 
        },
        urdu:(state,action)=>{
            const change=false
            return change
        }
    }
})
export const {english,urdu}=language.actions;
export const languageReducer=language.reducer;
