import { useDispatch, useSelector } from 'react-redux';
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

    const signIn = () => {
        dispatch(
            signUpUserRequest({
                number: '+923094162466',
                full_name: 'Umar Rasheed'
            })
        );
        dispatch(
            userOtpVerfiyRequest({
                number: '+923094162466',
                otp: '669497'
            })
        );
        dispatch(
            signInUserRequest({
                number: '+923094162466',
            })
        );
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
