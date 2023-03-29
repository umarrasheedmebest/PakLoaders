import { createSlice } from "@reduxjs/toolkit";


const language =createSlice({
    name:"Language",
    initialState:true,
    
    reducers:{
        english:(state,action)=>{
            
            state=true
        
         return state
        },
        urdu:(state,action)=>{
            state=false
           
            return state
        }
    }
})
export const {english,urdu}=language.actions;
export const languageReducer=language.reducer;
