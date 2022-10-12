import React, {useState} from 'react';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput';
import CustomBackground from '../../Components/CustomBackground';
import CustomForground from '../../Components/CustomForground';
import Heading from '../../Components/Heading';
import CustomText from '../../Components/CustomText';
import Loader from '../../Components/Loader';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

 
const ProfileOneComponent = ({
   navigateProfileTwo,
   navigateToLogin,
   navigation
    
}) => { 
  const [image, setImage] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userProvince, setUserProvince] = useState("");
  const [userDat,setUserDat] =useState(true);
  const userScure=false;
   // Camera Launch
   const launchCamer = async ()=> {
    const options = {
      path:'images',
        mediaType: 'photo',
        quality: 1,
        cameraType: 'back',
        includeBase64:true,
    };

    const result = await launchCamera(options);
    // console.log(result.assets[0].uri)
    // setImage(result.assets[0].uri);
    const sourceImage={
      uri: 'data:image/jpeg;base64,' + result.assets[0].base64,
    };
    
    setUserDat(false);
    setImage(sourceImage);    
};

let defaultImage=require('../../assets/userProfile.png');
// Athentication 
const [inputsUser, setInputsUser] = useState({
  city:'',
  scondMobile:'',
  province:'',
  confirmPassword:'',

 });
 
 const [errors, setErrors] = useState({});
 const [loading, setLoading] = useState(false);
 const valiDate=()=>{
  Keyboard.dismiss();
  let valid=true;
  if (!inputsUser.city) {
    handleError('Please Enter Name','city');
   
  }
  if (!inputsUser.scondMobile) {
    handleError('Please input scond Mobile Number/Password','scondMobile');
    
    
  }else if (inputsUser.scondMobile.length<11) {
    handleError('your number is incorrect','scondMobile');
    valid=false;
  }
  if (!inputsUser.province) {
    handleError('Please enter password','province');
    
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
      AsyncStorage.setItem('user',JSON.stringify(inputsUser));
      navigation.navigate('ProfileTwo');
    } catch (error) {
      Alert.alert('error','Something went wrong');
    }
  },1000);
 };
 const handleOnChange=(text, input)=>{
  setInputsUser(prevState=>({...prevState,[input]:text}));
 };
 const handleError=(errorMessage, input)=>{
  setErrors(prevState=>({...prevState,[input]:errorMessage}));
 }
  
  
  
    return (
        
            <SafeAreaView style={styles.container}>
              <Loader visible={loading}/>
              {/* Background Image */}
                 <CustomBackground/>
                 {/* Background Image */}
                 
                 
                 <View style={styles.mainContainer}>
                    
                        {/* Forground Image */}
                       <Image source={require('../../assets/progressbarOne.png')}/>
                        {/* Forground Image */}
                        
                    <Text style={styles.main} >Complete Profile</Text>
                    {/* Full Name */}
                    {/* Custom Text */}
                    
                      <Text style={styles.paragraph}>Welcome John Smith</Text>
                      <Text style={styles.paragraph}>Please complete your profile to proceed</Text>
                    
                    {/* Custom Text */}

                    {/* Profile */}
                    
                    <TouchableOpacity onPress={launchCamer}>
                      <Image style={{marginVertical:10, width:92,height:92, borderRadius:100,borderWidth:1,}} source={userDat? defaultImage:image}/>
                    </TouchableOpacity>
                    
                    {/* Profile */}

                    
                    {/* Input field user Email/scondMobile Number */}
                    <CustomInput label="Secondary Mobile Number" placeholder="92444886423" width={198} eye="none"
                    setValue={(text)=>handleOnChange(text, 'scondMobile')}
                    error={errors.scondMobile}
                    onFocus={()=>{
                      handleError(null,'scondMobile');
                    }}
                    
                     />
                    
                    
                      {/* User City */}
                      <CustomInput label="City" placeholder="City" width={50} eye="none"
                    setValue={(text)=>handleOnChange(text, 'city')}
                    error={errors.city}
                    onFocus={()=>{
                      handleError(null,'city');}}
                     />
                    
                    

                     {/* Hide Province */}
                     <CustomInput label="Province" placeholder="Province" width={80} eye="none"
                    setValue={(text)=>handleOnChange(text, 'province')}
                    error={errors.province}
                    onFocus={()=>{
                      handleError(null,'province');}}
                     />
                     
                    {/* Button Next */}
                    <CustomButton onPress={valiDate} text="Next" type="secondary"/>
                    
                    {/* Button Next */}
                    {/* Button Cancel */}
                    <CustomButton onPress={navigateToLogin} text="Cancel" type="tertiary"/>
                    
                    {/* Button Cancel */}


                    
                    
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
        minWidth:491,
        minHeight:417,
        width:"65%",
        height:"90%",
        position:'absolute',
        top:-85,
        left:-40,
      },
      mainContainer:{
        width:329,
        height:688,
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
      },
      main:{
        fontSize:24, 
        alignSelf:"flex-start",
        color:"#4448FF",
        fontWeight:"700",
        fontFamily:"Poppins-SemiBold.ttf",
        marginVertical:10,
       }
      ,
      paragraph:{
       alignSelf:"flex-start",
       fontSize:12,
       
      }
});

export default ProfileOneComponent;
