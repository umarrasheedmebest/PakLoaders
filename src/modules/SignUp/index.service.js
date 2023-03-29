import { useDispatch, } from "react-redux";
import {  signupRequest } from "../../Redux/slices/AuthSlice";

const SignUpServiceComponent = ({
    children,
    navigation,
}) => {
    const dispatch=useDispatch();
    

    const navigateToLogin= ()=> {
        navigation.navigate('Login')
    }
    const navigateVerification= ()=> {
        navigation.navigate('Verification')
    }
    const signUpRequest=(mainValue)=>{
        dispatch(signupRequest(mainValue));
        navigation.navigate('VerificationSignup')
    }

    return children({
        navigation,
        navigateToLogin,
        navigateVerification,
        signUpRequest
    });
};

export default SignUpServiceComponent;