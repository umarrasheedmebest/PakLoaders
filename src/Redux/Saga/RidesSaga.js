import {call,put} from 'redux-saga/effects';
import { requestAcceptBid,requestUpcomingRides } from '../slices/RequestAPI/RidesApi';


import { acceptBidResponse, upcomingRidesResponse } from '../slices/RidesSlice';

// Accept BidRequest funtion
export function* acceptBidRequestSaga(action){
    const bidId=action.payload;
     console.log("I'm Rides Saga"+ bidId)
try {
    const response=yield call(requestAcceptBid,bidId);
    const mainvalue=response.data;
   console.log(mainvalue);
    yield put(acceptBidResponse(mainvalue));
} catch (error) {
    console.log("Not call api request "+error)
}

};
// Upcoming Rides Response
export function* upcomingRidesRequestSaga(action){
    console.log("I'm upcoming Rides Saga")
try {
   const response=yield call(requestUpcomingRides);
   const mainvalue=response.data;
  console.log(mainvalue);
   yield put(upcomingRidesResponse(mainvalue));
} catch (error) {
   console.log("Not call api request "+error)
}

};

