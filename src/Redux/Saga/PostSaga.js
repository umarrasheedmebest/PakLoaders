import {call,put} from 'redux-saga/effects';
import { createPostResponse,singlePostResponse,cancelPostResponse,getAllPostResponse } from '../slices/PostSlice';
import { requestGetPost,requestSinglePost,requestCreatePost,requestCancelPost } from '../slices/RequestAPI/PostApi';

// Singup funtion
export function* getAllPostRequestSaga(){
try {
    const response=yield call(requestGetPost);
    const mainvalue=response.data;
   console.log(mainvalue);
    yield put(getAllPostResponse(mainvalue));
} catch (error) {
    console.log("Not call api request"+ error)
}

};
// SignupVarifyOtp user
export function* createPostRequestSaga(action){
    
    
    const data=action.payload;
    console.log(data)
    try {
        const response=yield call(requestCreatePost,data);
        const mainvalue=response.data;
       console.log(mainvalue);
        yield put(createPostResponse(mainvalue));
    } catch (error) {
        console.log("Not call api request"+error)
    }
    
    };
    // Signin Request user
   export function* singlePostRequestSaga(action){
    
    
        const data=action.payload;
        console.log("Post Id")
        console.log(data)
        try {
            const response=yield call(requestSinglePost,data);
            const mainvalue=response.data;
           console.log(mainvalue);
            yield put(singlePostResponse(mainvalue));
        } catch (error) {
            console.log(" call api request"+ error)
        }
        
        };
        // Signin Otp varify user
    export function* cancelPostRequestSaga(action){
    
    
            const data=action.payload;
            console.log(data)
            try {
                const response=yield call(requestCancelPost,data);
                const mainvalue=response.data;
               console.log(mainvalue);
                yield put(cancelPostResponse(mainvalue));
            } catch (error) {
                console.log("Not call api request"+ error)
            }
            
            };

