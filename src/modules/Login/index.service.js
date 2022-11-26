import { useDispatch, useSelector } from 'react-redux';
import { signUpUserRequest } from '../Auth/dux/authActions';

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
                number: '+923234801119',
                full_name: 'Umar Rasheed'
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
