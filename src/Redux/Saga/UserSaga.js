import {call,put} from 'redux-saga/effects';
import { getUserResponse,updateUserImageResponse,deleteUserResponse,updateUserResponse } from '../slices/UserSlice';
import { requestdeleteUser,requestgetUser,requestupdateUser,requestUpdateUserImage } from '../slices/RequestAPI/UserApi';

// Singup funtion
export function* deleteUserRequestSaga(){
try {
    const response=yield call(requestdeleteUser);
    const mainvalue=response.data;
   console.log(mainvalue);
    yield put(deleteUserResponse(mainvalue));
} catch (error) {
    console.log("Not call api request",error)
}

};
    // Signin Request user
   export function* updateUserRequestSaga(action){
    
    
        const data=action.payload;
        console.log("Post data")
        console.log(data)
        
        
        try {
            const response=yield call(requestupdateUser,data);
            const mainvalue=response.data;
           console.log(mainvalue);
            yield put(updateUserResponse(mainvalue));
        } catch (error) {
            console.log("Not call api request",error)
        }
        
        };
        // Signin Otp varify user
    export function* updateUserImageRequestSaga(action){
    
    
            const data=action.payload;
            console.log(data)
            try {
                const response=yield call(requestUpdateUserImage,data);
                const mainvalue=response.data;
               console.log(mainvalue);
                yield put(updateUserImageResponse(mainvalue));
            } catch (error) {
                console.log("Not call api request",error)
            }
            
            };
            // SignupVarifyOtp user
export function* getUserRequestSaga(){
    try {
        const response=yield call(requestgetUser);
        const mainvalue=response.data;
       console.log(mainvalue);
        yield put(getUserResponse(mainvalue));
    } catch (error) {
        console.log("Not call api request"+error)
    }
    
    };

