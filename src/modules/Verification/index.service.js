import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {signinOtpVerifyRequest} from '../../Redux/slices/AuthSlice';
import { View,Text } from 'react-native';
const VerificationServiceComponent = ({children, navigation, route}) => {
  // Device Token
  const deviceToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log('My device Token is' + fcmToken);
    return fcmToken;
  };
  //

  // Sign Data
  const UserNumber = useSelector(state => state.auth.signInResponse.data);
  const secret = useSelector(state => state.auth.signInResponse.secret);
  const tokens = useSelector(state => state.auth.signInResponse.token);
  // Otp message
  const otpMessage = useSelector(state => state.auth.signInResponse.message);
  const signinRequest = useSelector(state => state.auth.signInRequest);
  const signinOtpVerifyReq = useSelector(state => state.auth.signinOtpVerifyRequest);
  const signinOtp = useSelector(state => state.auth.otpMessage);

  // SignupData
  const signupUserNumber = useSelector(state => state.auth.signUpResponse.data);
  const signinRequestData = useSelector(state => state.auth.signInResponse);
  const signupsecret = useSelector(state => state.auth.signUpResponse.secret);
  const signuptoken = useSelector(state => state.auth.signUpResponse.token);
  const signupfullName = useSelector(
    state => state.auth.signUpResponse.full_name,
  );
  
  
const [invalidOtpLoader, setInvalidOtpLoader] = useState(false)
const [otpMessagein, setOtpMessagein] = useState(false)
  
  const dispatch = useDispatch();
  console.log('Pakistan Zindabad');

  const navigateVerified = async item => {
    console.log('Verify function call');
    console.log(item);
    if (tokens == item) {
      setOtpMessagein(false)
      dispatch(
        signinOtpVerifyRequest({
          number: UserNumber,
          secret: secret,
          token: tokens,
          deviceToken: await deviceToken(),
        }),
      );
    
    } else {
      setInvalidOtpLoader(true);
      setTimeout(() => {
        setInvalidOtpLoader(false)
        setOtpMessagein(true)
      }, 3000);
      
    }
  };
  useEffect(() => {
    if (signinOtp) {
      navigation.navigate('Verified');
    }
    
  }, [signinOtp])
  

  return children({
    navigation,
    navigateVerified,
    otpMessage,
    signinRequest,
    invalidOtpLoader,
    setInvalidOtpLoader,
    otpMessagein,
    setOtpMessagein,
    tokens,
    signinOtpVerifyReq
  });
};

export default VerificationServiceComponent;
