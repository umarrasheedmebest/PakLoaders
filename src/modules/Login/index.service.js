import { useState,useContext,memo,useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { signinRequest } from '../../Redux/slices/AuthSlice';
import { signInUserRequest, signUpUserRequest, userOtpVerfiyRequest } from '../Auth/dux/authActions';
import {AuthContext} from '../../../AuthProvider';
import { Keyboard } from 'react-native';
const LoginServiceComponent = ({
    children,
    navigation,
}) => {
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const data=useSelector(state=>state.language)
    const [inputs, setInputs] = useState({
        fullName: '',
        mobile: '',
      });
    const dispatch = useDispatch();
    console.log('Pakistan Zindabad')
   const login= useCallback(
      () => {
        const {login} = useContext(AuthContext);
        return login
      },
      [inputs],
    )
    
    
    const navigateSignUp = () => {
        navigation.navigate('SignUp');


    }
    const navigateForgotPassword = () => {
        navigation.navigate('ForgotPassword')
    }
    const navgatoHowItWork = () => {
        navigation.navigate('HowItWorks')
    }
   const handleOnChange = useCallback(
       (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
      },
      [inputs],
    );
      const handleError = useCallback((errorMessage, input) => {
        setErrors(prevState => ({...prevState, [input]: errorMessage}));
      },[errors]);
      const valiDate = useCallback(() => {
        Keyboard.dismiss();
        let valid = true;
        if (!inputs.mobile) {
          handleError('Please input Mobile Number/Email', 'mobile');
          valid = false;
        }
        // if (!inputs.password) {
        //   handleError('Please input password', 'password');
        // }
        if (valid) {
          signIn({
            "number":inputs.mobile
          })
        }
      },[inputs])
      const logined = () => {
        console.log('Pakistan Zindabad');
        setLoading(true);
    
        setTimeout(async () => {
          setLoading(false);
          let userData = await AsyncStorage.getItem('user');
          if (userData) {
            userData = JSON.parse(userData);
    
            if (
              inputs.mobile == userData.mobile &&
              inputs.password == userData.password
            ) {
              AsyncStorage.setItem(
                'user',
                JSON.stringify({...userData, login: true}),
              );
                console.log(inputs);
              login();
            } else {
              Alert.alert('error', 'Invalid Details');
            }
          } else {
            Alert.alert('error', 'User does not exist');
          }
        }, 3000);
      };

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
        signIn,
        errors,
        setErrors,
        login,
        loading,
        setLoading,
        inputs,
        setInputs,
        handleOnChange,
        handleError,
        valiDate,
        data
    });
};

export default memo(LoginServiceComponent);
