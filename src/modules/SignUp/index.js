import React, {useState} from 'react';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput';
import CustomBackground from '../../Components/CustomBackground';
import CustomForground from '../../Components/CustomForground';
import Loader from '../../Components/Loader';

import {
    StyleSheet,
    SafeAreaView,
    Text,
    ImageBackground,
    ImageBackgroundBase,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Button,
    ScrollView,
    Keyboard,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { signup, SignupAuth } from '../../Redux/slices/AuthSlice';

 
const SignUpComponent = ({
    navigateToLogin,
    navigateVerification,
    navigation,
        
}) => { 
  const dispatch=useDispatch();
 const [inputs, setInputs] = useState({
  fullName:'',
  mobile:'',
  password:'',
  confirmPassword:'',

 });
 const mainValue={
  number:inputs.mobile,

  full_name:inputs.fullName,
 }
 const [errors, setErrors] = useState({});
 const [loading, setLoading] = useState(false);
 const valiDate=()=>{
  Keyboard.dismiss();
  let valid=true;
  if (!inputs.fullName) {
    handleError('Please Enter Name','fullName');
    
  }
  if (!inputs.mobile) {
    handleError('Please input Mobile Number/Password','mobile');
    
  }else if (inputs.mobile.length<11) {
    handleError('Your number is incorrect','mobile');
    valid=false;
  }
  if (!inputs.password) {
    handleError('Please enter password','password');
    valid=false;
  }else if (inputs.password.length<5) {
    handleError('Minimum password length of 5','password');
    valid=false;
  }
  if (!inputs.confirmPassword) {
    handleError('Please enter confirm Password','confirmPassword');
    valid=false;
  }else if (inputs.confirmPassword.length<5) {
    handleError('Minimum password length is 5','confirmPassword');

  }
  if (valid) {
    register();
  }
 };
 const register=()=>{
  setLoading(true);
  setTimeout(()=>{
    setLoading(false);
    try {
      AsyncStorage.setItem('user',JSON.stringify(inputs));
      dispatch(SignupAuth(mainValue));
      navigation.navigate('Verification')
    } catch (error) {
      Alert.alert('error','Something went wrong');
    }
  },3000);
 };
 const handleOnChange=(text, input)=>{
  setInputs(prevState=>({...prevState,[input]:text}));
 };
 const handleError=(errorMessage, input)=>{
  setErrors(prevState=>({...prevState,[input]:errorMessage}));
 }
 const signup=(mainValue)=>{
  dispatch(SignupAuth(mainValue));
}


  
  
    return (
        
            <SafeAreaView style={styles.container}> 
            <Loader visible={loading}/>
              {/* Background Image */}
                 <CustomBackground/>
                
                 {/* Background Image */}
                 
                 <View style={styles.mainContainer}>
                    
                        {/* Forground Image */}
                        <CustomForground source={require("../../assets/SignUp-icon.png")}/>
                        {/* Forground Image */}
                        
                    <Text style={{fontSize:24, alignSelf:"flex-start", color:"#4448FF",fontWeight:"700",fontFamily:"Poppins-SemiBold.ttf" }} >Sign Up</Text>
                    {/* Full Name */}
                    
                    <CustomInput label="Full Name" placeholder="User Name" width={95} eye="none"
                    setValue={(text)=>handleOnChange(text, 'fullName')}
                    error={errors.fullName}
                    onFocus={()=>{
                      handleError(null,'fullName');}}
                     />
                    {/* Input field user Email/Mobile Number */}
                    <CustomInput label="Mobile Number/Email" placeholder="92444886423" width={173} eye="none"
                    setValue={(text)=>handleOnChange(text, 'mobile')}
                    error={errors.mobile}
                    onFocus={()=>{
                      handleError(null,'mobile');
                    }}
                    
                     />
                    
                      {/* User Password */}
                      <CustomInput text="Show" label="Password" width={95} eye="flex" placeholder="User Password"
                    setValue={(text)=>handleOnChange(text, 'password')}
                    error={errors.password}
                    onFocus={()=>{
                      handleError(null,'password');}}
                    index={1}
                    password/>
                    
                    

                     {/* Hide Password */}
                     <CustomInput text="Hide" label="Confirm Password" width={170} eye="flex"
                    setValue={(text)=>handleOnChange(text, 'confirmPassword')}
                    error={errors.confirmPassword}
                    onFocus={()=>{
                      handleError(null,'confirmPassword');}}
                     index={1}
                    password={false}/>
                     
                    {/* Button Sign UP */}
                    <TouchableOpacity onPress={()=>signup(mainValue)} style={{backgroundColor:"#4448FF",width:166,height:48,alignItems:"center",justifyContent:"center",marginTop:20,marginBottom:10, borderRadius:7}}>
                      <Text style={{fontSize:20,color:"#fff",fontWeight:"400"}}>Sign Up</Text>
                    </TouchableOpacity>
                    {/* Button Sign UP */}


                    <View><Text>Do not have an account?<TouchableOpacity style={{}} onPress={navigateToLogin}><Text style={{color:"#4448FF",fontSize:14,fontWeight:"700",marginLeft:5,marginTop:5,}}>Sign In</Text></TouchableOpacity></Text>
                    </View>
                    
                 </View>
                 
          
         </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position:"relative",
        alignItems:"center",
        justifyContent:"center"
    },
    headerImage:{
        width:491,
        height:417,
        position:'absolute',
        top:-85,
        left:-40,
      },
      mainContainer:{
        width:329,
        height:737,
        padding:20,
       
        borderRadius:11,
        
        backgroundColor:"white",
        position:"relative",
        alignItems:"center",
       
        shadowColor:"#4448FF",
       
        elevation:10,
        
      },
      iconImage:{
        width:125,
        height:125,
       marginBottom:15,
       marginTop:15,
       
      },
      textInput:{
        color:"#5A5A5A",
        fontSize:12,
        fontWeight:"400",
        borderRadius:5,
        width:287,height:68,
        borderColor:"#666666", 
        borderWidth:1,
      }
});

export default SignUpComponent;
