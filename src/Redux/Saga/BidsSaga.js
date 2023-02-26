import {call,put} from 'redux-saga/effects';
import { getAllBidsResponse } from '../slices/BidsSlice';
import { requestGetBids } from '../slices/RequestAPI/BidsApi';

// Singup funtion
export function* getAllBidsRequestSaga(action){
     console.log("I'm bids Saga")
try {
    const response=yield call(requestGetBids);
    const mainvalue=response.data;
   console.log(mainvalue);
    yield put(getAllBidsResponse(mainvalue));
} catch (error) {
    console.log("Not call api request "+error)
}

};

