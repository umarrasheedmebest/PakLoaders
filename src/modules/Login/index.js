import React, {useState, useContext} from 'react';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomBackground from '../../Components/CustomBackground';
import CustomForground from '../../Components/CustomForground';
import Loader from '../../Components/Loader';
import CustomText from '../../Components/CustomText/CustomText';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ImageBackground,
  useWindowDimensions,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  Keyboard,
} from 'react-native';
import Heading from '../../Components/Heading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../../../AuthProvider';
import {useSelector,useDispatch} from 'react-redux';
import {eng, Urdu} from '../../Components/Api/Language';
import { SigninAuth } from '../../Redux/slices/AuthSlice';

const LoginComponent = ({
  navigateSignUp,
  navgatoHowItWork,
  navigateForgotPassword,
  navigation,
  signIn,
}) => {
  const {login} = useContext(AuthContext);
  const data = useSelector(state => state.language);
const dispatch=useDispatch();
  const [inputs, setInputs] = useState({
    fullName: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const valiDate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.mobile) {
      handleError('Please input Mobile Number/Email', 'mobile');
      valid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
    }
    if (valid) {
      logined()
    }
  };
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
  const handleOnChange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Loader visible={loading} />
      {/* Background Image */}
      <CustomBackground />
      {/* Background Image */}

      <View style={styles.mainContainer}>
        {/* Forground Image */}
        <CustomForground source={require('../../assets/Login-icon.png')} />
        {/*Forground image  */}
        <Heading text={data ? 'Sign In' : 'Sign In'} type="primary" />
        {/* Input field user Email/Mobile Number */}

        <CustomInput
          label={data ? eng.mobileNum : Urdu.mobileNum}
          width={166}
          eye="none"
          placeholder="92327482937"
          error={errors.mobile}
          setValue={text => handleOnChange(text, 'mobile')}
          onFocus={() => {
            handleError(null, 'mobile');
          }}
        />

        {/* User Password */}
        <CustomInput
          label={data ? eng.password : Urdu.password}
          eye="flex"
          width={85}
          index={1}
          text="Show"
          password
          setValue={text => handleOnChange(text, 'password')}
          error={errors.password}
          onFocus={() => {
            handleError(null, 'password');
          }}
        />

        {/* Forgot button */}
        <TouchableOpacity
          onPress={navigateForgotPassword}
          style={{alignSelf: 'flex-end'}}>
          <Text
            style={{
              color: '#4448FF',
              fontSize: 14,
              fontWeight: '700',
              fontFamily: 'Poppins-Medium.ttf',
            }}>
            {data?eng.fpassword:Urdu.fpassword}
          </Text>
        </TouchableOpacity>

        {/* Forgot button */}
        {/* Button Sign In */}
        <CustomButton onPress={() => login()} text={"Sign In"} type="primary" />
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
  },
  mainContainer: {
    Width: 329,

    Height: 586,

    padding: 30,

    borderRadius: 11,

    backgroundColor: 'white',
    position: 'relative',
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

export default LoginComponent;
