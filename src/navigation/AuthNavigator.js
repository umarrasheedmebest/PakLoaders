import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import HowItWorks from '../modules/Auth/Slider/HowItWorks';
import Login from '../modules/Login/Login';
import Counter from '../modules/Counter/Counter';
import SignUp from "../modules/SignUp/SignUp";
import Verification from '../modules/Verification/Verification';
import Verified from '../modules/Verified/Verified';
import ProfileOne from '../modules/CompleteProfileOne/ProfileOne';
import ProfileTwo from '../modules/CompleteProfileTwo/ProfileTwo';
import ForgotPassword from '../modules/ForgotPassword/ForgotPassword';
import VerifyForgotCode from '../modules/VerifiyForgotCode/VerifyForgotCode';
import ResetPassword from '../modules/ResetPassword/ResetPassword';
import Bids from '../modules/Bids/Bids';
import BlackDtail from '../modules/BlackDetail/BlackDtail';
import VerificationSignup from '../modules/VerificationSignup/VerificationSignup';
import VerifiedSignup from '../modules/VerifiedSignup/VerifiedSignup';





const Stack = createNativeStackNavigator();

export const Auth = () => {
    return (
        <Stack.Navigator initialRouteName="HowItWorks" screenOptions={{
            header: () => null,
        }}>
            <Stack.Screen name="HowItWorks" component={HowItWorks} />
            <Stack.Screen name="Login" component={Login} />

            <Stack.Screen name='SignUp' component={SignUp}/>
            <Stack.Screen name='Verification' component={Verification}/>
            <Stack.Screen name='Verified' component={Verified}/>
            <Stack.Screen name="Counter" component={Counter} />
            
            <Stack.Screen name='ProfileOne' component={ProfileOne}/>
            <Stack.Screen name='ProfileTwo' component={ProfileTwo}/>
            <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
            <Stack.Screen name='VerifyForgotCode' component={VerifyForgotCode}/>
            <Stack.Screen name='ResetPassword' component={ResetPassword}/>
            <Stack.Screen name='Bids' component={Bids}/>
            <Stack.Screen name='BlackDtail' component={BlackDtail}/>
            <Stack.Screen name='VerificationSignup' component={VerificationSignup}/>
            <Stack.Screen name='VerifiedSignup' component={VerifiedSignup}/>

            



            
        </Stack.Navigator>
    );
};

