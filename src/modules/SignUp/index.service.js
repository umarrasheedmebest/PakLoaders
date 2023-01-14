import { useDispatch } from "react-redux";
import { SignupAuth } from "../../Redux/slices/AuthSlice";

const SignUpServiceComponent = ({
    children,
    navigation,
}) => {
    const dispatch=useDispatch();
    console.log('Pakistan Zindabad')

    const navigateToLogin= ()=> {
        navigation.navigate('Login')
    }
    const navigateVerification= ()=> {
        navigation.navigate('Verification')
    }
    const signup=(mainValue)=>{
        dispatch(SignupAuth(mainValue));
    }

    return children({
        navigation,
        navigateToLogin,
        navigateVerification,
        signup
    });
};

export default SignUpServiceComponent;