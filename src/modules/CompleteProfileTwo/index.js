import React, {useState} from 'react';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput';
import CustomBackground from '../../Components/CustomBackground';
import CustomForground from '../../Components/CustomForground';
import Heading from '../../Components/Heading';
import CustomText from '../../Components/CustomText';
import CustomCNIC from '../../Components/CustomCNIC';
import {colors} from '../../globalStyle';
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
    Alert,
    Keyboard
} from 'react-native';
import { useSelector } from 'react-redux';
import { eng, Urdu } from '../../Components/Api/Language';


 
const ProfileTwoComponent = ({
  navigateToLogin,
  navigation
    
}) => { 
  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);
  const SaveData =()=>{
    Alert.alert("Save Data")
}
const [frontImage, setFrontImage] = useState("");
const [backImage,setBackImage]= useState("")
  const [userCity, setUserCity] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userProvince, setUserProvince] = useState("");
  const [userDat,setUserDat] =useState(true);
  const [userData,setUserData] =useState(true);

  const userScure=false;
   // Camera Launch
   const frontCamer = async ()=> {
    const options = {
      path:'images',
        mediaType: 'photo',
        quality: 1,
        cameraType: 'back',
        includeBase64:true,
    };

    const result = await launchCamera(options);
    // console.log(result.assets[0].uri)
    // setFrontImage(result.assets[0].uri);
    const sourceImage={
      uri: 'data:image/jpeg;base64,' + result.assets[0].base64,
    };
    
    setUserDat(false);
    setFrontImage(sourceImage);    
};

 // Camera Launch
 const backCamer = async ()=> {
  const options = {
    path:'images',
      mediaType: 'photo',
      quality: 1,
      cameraType: 'back',
      includeBase64:true,
  };

  const result = await launchCamera(options);
  // console.log(result.assets[0].uri)
  // setFrontImage(result.assets[0].uri);
  const sourceImage={
    uri: 'data:image/jpeg;base64,' + result.assets[0].base64,
  };
  
  setUserData(false);
  setBackImage(sourceImage);    
};

let defaultImage=require("../../assets/icon_image.png");
// Athentication 
const [inputsUser, setInputsUser] = useState({
  CNIC:'',
  date:'',
  exparyDate:'',
  

 });
 const data=useSelector.language;
 const [errors, setErrors] = useState({});
 const [loading, setLoading] = useState(false);
 const valiDate=()=>{
  Keyboard.dismiss();
  let valid=true;
  if (!inputsUser.date) {
    handleError('Please Enter Issue Date','date');
   
  }
  if (!inputsUser.CNIC) {
    handleError('Please Enter CNIC number','CNIC');
    
    
  }else if (inputsUser.CNIC.length<13) {
    handleError('your CNIC Number is invalid','CNIC');
    valid=false;
  }
  if (!inputsUser.exparyDate) {
    handleError('Please enter Expary Date of CNIC','expary Date');
    
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
      navigation.navigate('Login');
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
              {/* Background Image */}
                 <CustomBackground/>
                 {/* Background Image */}
                 
                 <View style={styles.mainContainer}>
                    
                        {/* Forground Image */}
                       <Image source={require('../../assets/progressbarTwo.png')}/>
                        {/* Forground Image */}
                        <View>
                    <Text style={styles.main} >{data?eng.completProfile:Urdu.completProfile}</Text>
                    {/* Full Name */}
                    {/* Custom Text */}
                  
                       <Text style={styles.paragraph}>Welcome John Smith</Text>
                      <Text style={styles.paragraph}>{data?eng.profileProcess:Urdu.profileProcess}</Text>
                    
                  
                     
                    {/* Custom Text */}

                    {/* Profile */}
                     {/* CNIC Image */}
                     <View style={styles.MainCnic}>
                        <View style={styles.boxCnic}>
                      <CustomCNIC defaultImage={userDat?defaultImage:frontImage} camera={frontCamer} text="Front Image Of CNIC"/>
                        </View>
                        <View style={styles.boxCnic}>
                        <CustomCNIC defaultImage={userData?defaultImage:backImage} camera={backCamer} text="Back Image of CNIC"/>
                        </View>
                       </View>
                   
                    
                    {/* Profile */}

                    </View>
                    {/* Input field user CNIC Number */}
                    <CustomInput label="CNIC Number" width={123} eye="none" placeholder="3745234234325"
                    setValue={(text)=>handleOnChange(text, 'CNIC')}
                    error={errors.CNIC}
                    onFocus={()=>{
                      handleError(null,'CNIC');
                    }} scure={userScure}/>
                    
                    
                      {/* Issue Date */}
                      {/* <CustomInput label="Issue Date" width={105}  placeholder="12-02-2019"
                    setValue={(text)=>handleOnChange(text, 'date')}
                    error={errors.date}
                    onFocus={()=>{
                      handleError(null,'date');
                    }} scure={userScure} source={require("../../assets/calender_icon.png")}/>
                     */}
                    

                     {/* Expiry Date */}
                     {/* <CustomInput label="Expiry Date" width={105}  placeholder="12-02-2024"
                    setValue={(text)=>handleOnChange(text, 'exparyDate')}
                    error={errors.exparyDate}
                    onFocus={()=>{
                      handleError(null,'exparyDate');
                    }} scure={userScure}
                    source={require("../../assets/calender_icon.png")}/>
                      */}
                      <View>

                     
                    {/* Button Save */}
                    <CustomButton onPress={valiDate} text="Save" type="secondary"/>
                    
                    {/* Button Save */}
                    {/* Button Cancel */}
                    <CustomButton onPress={navigateToLogin} text="Cancel" type="tertiary"/>
                    
                    {/* Button Cancel */}
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
        height:688,
        padding:20,
        
        borderRadius:11,
        justifyContent:"space-evenly",
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
       
      },
      MainCnic:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly"
        
      },
      boxCnic:{
        width:93,
        height:92,
        borderWidth:1,
        
        margin:10,
        borderColor:colors.dot,
        borderStyle:"dashed"

      }
});

export default ProfileTwoComponent;
