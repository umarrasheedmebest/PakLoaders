import {call,put} from 'redux-saga/effects';
import { signUpResponse,signinOtpVerifyResponse,signinResponse,signupOtpResponse } from '../slices/AuthSlice';
import { requestSignUpUser,requestSignInUser,requestSigninOtpVerify,requestSignupOtpVerify } from '../slices/RequestAPI/AuthApi';

// Singup funtion
export function* handleGetUser(action){
    
    
const data=action.payload;
console.log(data)
try {
    const response=yield call(requestSignUpUser,data);
    const mainvalue=response.data;
   console.log(mainvalue);
    yield put(signUpResponse(mainvalue));
} catch (error) {
    console.log("Not call api request"+ error)
}

};
// SignupVarifyOtp user
export function* handleGetUserVarifyOtp(action){
    
    
    const data=action.payload;
    console.log(data)
    try {
        const response=yield call(requestSignupOtpVerify,data);
        const mainvalue=response.data;
       console.log(mainvalue);
        yield put(signupOtpResponse(mainvalue));
    } catch (error) {
        console.log("Not call api request"+ error)
    }
    
    };
    // Signin Request user
   export function* handleGetUserLogin(action){
    
    
        const data=action.payload;
        console.log(data)
        try {
            const response=yield call(requestSignInUser,data);
            const mainvalue=response.data;
           console.log(mainvalue);
            yield put(signinResponse(mainvalue));
        } catch (error) {
            console.log("Not call api request"+ error)
        }
        
        };
        // Signin Otp varify user
    export function* handleGetUserLoginOtp(action){
    
    
            const data=action.payload;
            console.log(data)
            try {
                const response=yield call(requestSigninOtpVerify,data);
                const mainvalue=response.data;
               console.log(mainvalue);
                yield put(signinOtpVerifyResponse(mainvalue));
            } catch (error) {
                console.log("Not call api request" +error)
            }
            
            };

