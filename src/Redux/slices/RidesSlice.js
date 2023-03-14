import {createSlice} from '@reduxjs/toolkit';
import update from 'immutability-helper';
const rides = createSlice({
  name: 'rides',
  initialState: {
    //Create rides
    acceptBidRequest: false,
    acceptBidResponse: [],
    // Upcoming Rides
    upcomingRidesRequest:false,
    upcomingRidesResponse:[]

   
  },

  reducers: {
    acceptBidRequest: (state, action) =>
      update(state, {
        acceptBidRequest: {$set: true},
      }),
    acceptBidResponse: (state, action) =>
      update(state, {
        acceptBidResponse: {$set: action.payload},
        acceptBidRequest: {$set: false},
      }),
      upcomingRidesRequest:(state,action)=>
        update(state,{
            upcomingRidesRequest:{$set:true},
        }),
        upcomingRidesResponse:(state,action)=>
        update(state,{
            upcomingRidesResponse:{$set:action.payload},
            upcomingRidesRequest:{$set:false},
        })
      
  
  },
});
export const {
  acceptBidRequest,
  acceptBidResponse,
  upcomingRidesRequest,
  upcomingRidesResponse
} = rides.actions;
export const ridesReducer = rides.reducer;
