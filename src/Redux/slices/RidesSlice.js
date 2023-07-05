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
    upcomingRidesResponse:[],
    // ongoing Rides
    ongoingRidesRequest:false,
    ongoingRidesResponse:[],
    // completed Rides
    completeRidesRequest:false,
    completeRidesResponse:[],
    // cancel Rides
    cancelRidesRequest:false,
    cancelRidesResponse:[]

   
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
        }),
        // ongoing
        ongoingRidesRequest:(state,action)=>
        update(state,{
            ongoingRidesRequest:{$set:true},
        }),
       ongoingRidesResponse:(state,action)=>
        update(state,{
            ongoingRidesResponse:{$set:action.payload},
            ongoingRidesRequest:{$set:false},
        }),
         // complete
         completeRidesRequest:(state,action)=>
         update(state,{
             completeRidesRequest:{$set:true},
         }),
        completeRidesResponse:(state,action)=>
         update(state,{
             completeRidesResponse:{$set:action.payload},
             completeRidesRequest:{$set:false},
         }),
          // ongoing
        cancelRidesRequest:(state,action)=>
        update(state,{
            cancelRidesRequest:{$set:true},
        }),
       cancelRidesResponse:(state,action)=>
        update(state,{
            cancelRidesResponse:{$set:action.payload},
            cancelRidesRequest:{$set:false},
        }),

      
  
  },
});
export const {
  acceptBidRequest,
  acceptBidResponse,
  upcomingRidesRequest,
  upcomingRidesResponse,
  ongoingRidesRequest,
  ongoingRidesResponse,
  completeRidesRequest,
  completeRidesResponse,
  cancelRidesRequest,
  cancelRidesResponse
} = rides.actions;
export const ridesReducer = rides.reducer;
