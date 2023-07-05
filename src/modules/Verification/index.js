import React, {useState,useEffect} from 'react';
import {StyleSheet, SafeAreaView, Text, View, TextInput} from 'react-native';
import CustomBackground from '../../Components/CustomBackground';
import CustomForground from '../../Components/CustomForground';
import CustomText from '../../Components/CustomText';
import Heading from '../../Components/Heading/';
import CustomButton from '../../Components/CustomButton/CustomButton';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {colors} from '../../globalStyle';
import Loader from '../../Components/Loader';
const VerificationComponent = ({
  navigateVerified,
  otpMessage,
  signinRequest,
  invalidOtpLoader,
  setInvalidOtpLoader,
  otpMessagein,
  setOtpMessagein,
  tokens,
  signinOtpVerifyReq
}) => {

 


  console.log('sign InRequest' + invalidOtpLoader);
  const [token, setToken] = useState('');
  const [otp, setOtp] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      {/* Background Image */}
      <CustomBackground />
      {/* Background Image */}
      {signinOtpVerifyReq &&<Loader visible={true||invalidOtpLoader} />}

      <View style={styles.mainContainer}>
        {/* Front Image  */}
        <CustomForground source={require('../../assets/Verification.png')} />
        {/* Front Image */}

        {/* Heading */}
        <Heading text="Account Verification" />
        {/* Heading */}
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: colors.text, textAlign: 'center'}}>
            {otpMessagein?"Your OTP is invailed Please try again!":otpMessage}{' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <OTPInputView
            style={styles.otpInputViewo}
            pinCount={6}
            code={tokens} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            onCodeChanged={code => {
              setOtp(tokens);
            }}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              setToken(tokens);
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>
        {/* Text */}
        <CustomText text="Haven't received a code?" link="Send Again" />
        {/* Text */}

        {/* Verification Button */}
        <View style={{marginVertical: 60}}>
          <CustomButton
            text="Verify"
            type="primary"
            onPress={() => navigateVerified(tokens)}
          />
        </View>
        {/* Verification Button */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    width: '90%',
    height: 586,
    padding: 20,
    borderRadius: 11,

    backgroundColor: 'white',
    position: 'relative',
    alignItems: 'center',

    shadowColor: '#4448FF',

    elevation: 10,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: colors.text,
  },

  underlineStyleBase: {
    width: 40,
    height: 55,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: colors.text,
    fontSize: 32,
    fontWeight: '500',
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  otpInputViewo:{
    width: '100%',
    height: 80,
    backgroundColor: '#ffffff',
    shadowColor: '#fff',
    marginTop: 30,
  }
});

export default VerificationComponent;
