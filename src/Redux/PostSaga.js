import axios from 'axios';
import {call,put,takeEvery} from 'redux-saga/effects';
import { BASE_URL } from './constent/constent';
import { getPostSuccess } from './slices/PostSlice';

function* workGetPostFetch(){
    // const response=axios.get('https://pakloaders-customer-backend.onrender.com/post/get-all/1')
    // const formattedPost= yield posts.json();
    // yield put(getPostSuccess(response.data));
const data="Saga is work";
yield put(getPostSuccess(data));
}







function* postSaga(){
    yield takeEvery('post/getPostFetch',workGetPostFetch);
}

export default postSaga;