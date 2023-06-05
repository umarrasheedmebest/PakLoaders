<<<<<<< HEAD
import { useState,useContext,memo,useCallback,useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { signinRequest } from '../../Redux/slices/AuthSlice';
import { signInUserRequest, signUpUserRequest, userOtpVerfiyRequest } from '../Auth/dux/authActions';
import {AuthContext} from '../../../AuthProvider';
import { Keyboard } from 'react-native';
=======
import { useDispatch, useSelector } from 'react-redux';
import { signInUserRequest, signUpUserRequest, userOtpVerfiyRequest } from '../Auth/dux/authActions';
>>>>>>> b5bd23039389ef39bd49eed3aced5ef074a500d9

const LoginServiceComponent = ({
    children,
    navigation,
}) => {
<<<<<<< HEAD
  const signinRequestData = useSelector(state => state.auth.signInResponse);
  const signinRequestDa = useSelector(state => state.auth.signInRequest);

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const data=useSelector(state=>state.language)
    const [inputs, setInputs] = useState({
        fullName: '',
        mobile: '',
      });
      const validNumber=typeof signinRequestData =='string'
      console.log(validNumber)
    const dispatch = useDispatch();
    console.log('Pakistan Zindabad')
    const {login} = useContext(AuthContext);
=======
    const dispatch = useDispatch();
    console.log('Pakistan Zindabad')

>>>>>>> b5bd23039389ef39bd49eed3aced5ef074a500d9
    const navigateSignUp = () => {
        navigation.navigate('SignUp');


    }
    const navigateForgotPassword = () => {
        navigation.navigate('ForgotPassword')
    }
    const navgatoHowItWork = () => {
        navigation.navigate('HowItWorks')
    }
<<<<<<< HEAD
   const handleOnChange = 
       useCallback((text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
      },[inputs]);
     
    
      const handleError = useCallback((errorMessage, input) => {
        setErrors(prevState => ({...prevState, [input]: errorMessage}));
      },[errors]);
      const valiDate =() => {
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
      };
      // const logined = () => {
      //   console.log('Pakistan Zindabad');
      //   setLoading(true);
    
      //   setTimeout(async () => {
      //     setLoading(false);
      //     let userData = await AsyncStorage.getItem('user');
      //     if (userData) {
      //       userData = JSON.parse(userData);
    
      //       if (
      //         inputs.mobile == userData.mobile &&
      //         inputs.password == userData.password
      //       ) {
      //         AsyncStorage.setItem(
      //           'user',
      //           JSON.stringify({...userData, login: true}),
      //         );
      //           console.log(inputs);
      //         login();
      //       } else {
      //         Alert.alert('error', 'Invalid Details');
      //       }
      //     } else {
      //       Alert.alert('error', 'User does not exist');
      //     }
      //   }, 3000);
      // };



    const signIn = (item) => {
        console.log(item)
        dispatch(
            signinRequest(item)
        ); 
        
        navigation.navigate('Verification')
     
        
    }
    
  useEffect(() => {
    
  
    if (validNumber==true) {
      navigation.navigate('Login')
      handleError('Your Number not Register', 'mobile');
    }
     
    
    
     
  }, [validNumber])
    
    
    
=======

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
>>>>>>> b5bd23039389ef39bd49eed3aced5ef074a500d9

    return children({
        navigation,
        navigateSignUp,
        navgatoHowItWork,
        navigateForgotPassword,
<<<<<<< HEAD
        signIn,
        errors,
        setErrors,
        login,
        loading,
        inputs,
        setInputs,
        handleOnChange,
        handleError,
        valiDate,
        data
    });
};

export default memo(LoginServiceComponent);
=======
        signIn
    });
};

export default LoginServiceComponent;
>>>>>>> b5bd23039389ef39bd49eed3aced5ef074a500d9
