import {call, put} from 'redux-saga/effects';
import {
  requestAcceptBid,
  requestUpcomingRides,
  requestOngoingRides,
} from '../slices/RequestAPI/RidesApi';

import {
  acceptBidResponse,
  upcomingRidesResponse,
  ongoingRidesResponse,
  completeRidesResponse,
  cancelRidesResponse,
} from '../slices/RidesSlice';

// Accept BidRequest funtion
export function* acceptBidRequestSaga(action) {
  const bidId = action.payload;
  console.log("I'm Rides Saga" + bidId);
  try {
    const response = yield call(requestAcceptBid, bidId);
    const mainvalue = response.data;
    console.log(mainvalue);
    yield put(acceptBidResponse(mainvalue));
  } catch (error) {
    console.log('Not call api request ' + error);
  }
}
// Upcoming Rides Response
export function* upcomingRidesRequestSaga(action) {
    const status = action.payload;
    console.log("I'm upcoming Rides Saga"+status);
    
    try {
      
        const response = yield call(requestOngoingRides, status);
        const mainvalue = response.data;
        console.log(mainvalue);
        yield put(upcomingRidesResponse(mainvalue));
  } catch (error) {
    console.log('Not call api request ' + error);
  }
}
// Ongoing Rides Response
export function* ongoingRidesRequestSaga(action) {
    const status = action.payload;
  console.log("I'm upcoming Rides Saga"+status);
  
  try {
    
      const response = yield call(requestOngoingRides, status);
      const mainvalue = response.data;
      console.log(mainvalue);
      yield put(ongoingRidesResponse(mainvalue));
   
  } catch (error) {
    console.log('Not call api request ' + error);
  }
}
export function* cancelledRidesRequestSaga(action) {
    const status = action.payload;
  console.log("I'm upcoming Rides Saga"+status);
  
  try {
   
      const response = yield call(requestOngoingRides, status);
      const mainvalue = response.data;
      console.log(mainvalue);
      yield put(cancelRidesResponse(mainvalue));
    
  } catch (error) {
    console.log('Not call api request ' + error);
  }
}
export function* completedRidesRequestSaga(action) {
    const status = action.payload;
  console.log("I'm upcoming Rides Saga"+status);
  
  try {
    
      const response = yield call(requestOngoingRides, status);
      const mainvalue = response.data;
      console.log(mainvalue);
      yield put(completeRidesResponse(mainvalue));
    
    
  } catch (error) {
    console.log('Not call api request ' + error);
  }
}
