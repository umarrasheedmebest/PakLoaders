import { useDispatch, useSelector } from 'react-redux';
import { signinRequest } from '../../Redux/slices/AuthSlice';
import { signInUserRequest, signUpUserRequest, userOtpVerfiyRequest } from '../Auth/dux/authActions';

const LoginServiceComponent = ({
    children,
    navigation,
}) => {
    const dispatch = useDispatch();
    console.log('Pakistan Zindabad')

    const navigateSignUp = () => {
        navigation.navigate('SignUp');


    }
    const navigateForgotPassword = () => {
        navigation.navigate('ForgotPassword')
    }
    const navgatoHowItWork = () => {
        navigation.navigate('HowItWorks')
    }

    const signIn = (item) => {
        console.log(item)
        dispatch(
            signinRequest(item)
        );
        navigation.navigate('Verification')
       
       
    }

    return children({
        navigation,
        navigateSignUp,
        navgatoHowItWork,
        navigateForgotPassword,
        signIn
    });
};

export default LoginServiceComponent;
