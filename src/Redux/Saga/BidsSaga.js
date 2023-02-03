import {call,put} from 'redux-saga/effects';
import { getAllBidsResponse } from '../slices/BidsSlice';
import { requestGetBids } from '../slices/RequestAPI/BidsApi';

// Singup funtion
export function* getAllBidsRequestSaga(action){
    
    
const data=action.payload;
console.log(data)
try {
    const response=yield call(requestGetBids,data);
    const mainvalue=response.data;
   console.log(mainvalue);
    yield put(getAllBidsResponse(mainvalue));
} catch (error) {
    console.log("Not call api request "+error)
}

};

