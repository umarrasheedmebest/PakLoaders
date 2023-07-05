import { useState,useContext,memo,useCallback,useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { signinRequest } from '../../Redux/slices/AuthSlice';
import { signInUserRequest, signUpUserRequest, userOtpVerfiyRequest } from '../Auth/dux/authActions';
import {AuthContext} from '../../../AuthProvider';
import { Keyboard } from 'react-native';

const LoginServiceComponent = ({
    children,
    navigation,
}) => {
  const signinRequestData = useSelector(state => state.auth.signInResponse);
  const signinRequestDa = useSelector(state => state.auth.signInRequest);
  const signinRequestMessage = useSelector(state => state.auth.signInMessage);
  console.log("Message"+signinRequestMessage)


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
    const navigateSignUp = () => {
        navigation.navigate('SignUp');


    }
    const navigateForgotPassword = () => {
        navigation.navigate('ForgotPassword')
    }
    const navgatoHowItWork = () => {
        navigation.navigate('HowItWorks')
    }
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
        if (inputs.mobile.length>11) {
          handleError('Your number is invalid', 'mobile');
        }
        if (valid) {
          let text=inputs.mobile;
          let space= text.trim();
          let part = space.slice(1,11);
          let newText = space.replace(space, "+92"+part);
          console.log("new String"+newText)
          signIn({
            "number":newText
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
        
        
        // navigation.navigate('Verification')
     
        
    }
    
  useEffect(() => {
    
  
    if (validNumber==true) {
      navigation.navigate('Login')
      handleError('Your Number not Register', 'mobile');
    }
    if (signinRequestMessage) {
      navigation.navigate('Verification')
      handleOnChange('', 'mobile')
    }
     
    
    
     
  }, [validNumber || signinRequestMessage])
    
    
    

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
        inputs,
        setInputs,
        handleOnChange,
        handleError,
        valiDate,
        data,
        signinRequestDa,
        inputs
    });
};

export default memo(LoginServiceComponent);
