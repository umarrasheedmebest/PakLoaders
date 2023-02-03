import {createSlice,} from '@reduxjs/toolkit';
import update from 'immutability-helper';
const bids = createSlice({
  name: 'bids',
  initialState: {
    //Create bids
    getAllBidsRequest: false,
    getAllBidsResponse: [],
   
  },

  reducers: {
    getAllBidsRequest: (state, action) =>
      update(state, {
        getAllBidsRequest: {$set: true},
      }),
    getAllBidsResponse: (state, action) =>
      update(state, {
        getAllBidsResponse: {$set: action.payload},
      }),
  
  },
});
export const {
  getAllBidsRequest,
  getAllBidsResponse,
} = bids.actions;
export const bidsReducer = bids.reducer;
