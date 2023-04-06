import React, {memo} from 'react';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomBackground from '../../Components/CustomBackground';
import CustomForground from '../../Components/CustomForground';
import Loader from '../../Components/Loader';
import CustomText from '../../Components/CustomText/CustomText';
import {StyleSheet, SafeAreaView, View, ScrollView} from 'react-native';
import Heading from '../../Components/Heading';
import {eng, Urdu} from '../../Components/Api/Language';
const LoginComponent = ({
  navigateSignUp,
  errors,
  loading,
  handleError,
  handleOnChange,
  valiDate,
  data,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Loader visible={loading} />
      {/* Background Image */}
      <CustomBackground />
      {/* Background Image */}
      <View style={styles.mainContainer}>
        {/* Forground Image */}
        <CustomForground source={require('../../assets/Login-icon.png')} />
        <View style={{margin: 4, width: '100%'}}>
          {/*Forground image  */}
          <Heading text={data ? 'Sign In' : 'Sign In'} type="primary" />
          {/* Input field user Email/Mobile Number */}

          <CustomInput
            label={data ? eng.mobileNum : Urdu.mobileNum}
            eye="none"
            placeholder="92327482937"
            error={errors.mobile}
            setValue={text => handleOnChange(text, 'mobile')}
            onFocus={() => {
              handleError(null, 'mobile');
            }}
          />
        </View>

        {/* Button Sign In */}
        <CustomButton
          onPress={() => valiDate()}
          text={'Sign In'}
          type="primary"
        />
        {/* Button Sign In */}

        {/* Move Sign Up */}
        <CustomText
          text="Do not have an account?"
          link="Sign up"
          onPress={navigateSignUp}
        />
        {/* Move Sign Up */}
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
    borderWidth:2
  },
  mainContainer: {
    width: '90%',
    height: '70%',
    minHeight: 500,
    padding: 27,
    
    borderRadius: 11,
    backgroundColor: 'white',
   
    
    
    alignItems: 'center',
    shadowColor: '#4448FF',
    elevation: 10,
  },
  iconImage: {
    minWidth: 125,
    minHeight: 125,
    marginBottom: 15,
    marginTop: 15,
  },
});

export default memo(LoginComponent);
