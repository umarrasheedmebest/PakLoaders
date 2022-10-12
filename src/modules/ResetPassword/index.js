import React, {useState} from 'react';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput';
import CustomBackground from '../../Components/CustomBackground';
import CustomForground from '../../Components/CustomForground';
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
    ScrollView
} from 'react-native';

 
const ResetPasswordComponent = ({
    navigateCompleteProfileOne,
    navigateVerification
    
}) => { 
  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);

  const [fullName, setFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userHidePassword, setUserHidePassword] = useState("");
  const userScure=false;
  const showValue=()=>{
      setShow(!show);
     
  }
  const hideValue=()=>{
    setHide(!hide);
   
}

  
  
    return (
        
            <SafeAreaView style={styles.container}>
              {/* Background Image */}
                 <CustomBackground/>
                 {/* Background Image */}
                 
                 <View style={styles.mainContainer}>
                    
                        {/* Forground Image */}
                        <CustomForground source={require("../../assets/Login-icon.png")}/>
                        {/* Forground Image */}
                        
                    <Text style={{fontSize:24, alignSelf:"flex-start", color:"#4448FF",fontWeight:"700",fontFamily:"Poppins-SemiBold.ttf", marginVertical:30,}} >Reset Password</Text>
                    {/* Full Name */}
                    
                    
                    
                      {/* New Password */}
                      <CustomInput text="Show" label="New Password" width={127} eye="flex"
                    value={userPassword} setValue={setUserPassword}
                    scure={show} setScure={showValue} index={1}
                    password/>
                    
                    

                     {/* Confirm Password */}
                     <CustomInput text="Hide" label="Custom Password" width={143} eye="flex"
                    value={userHidePassword} setValue={setUserHidePassword}
                    scure={hide} setScure={hideValue} index={1}
                    password={false}/>
                     
                    {/* Button Confirm */}
                    <TouchableOpacity onPress={navigateCompleteProfileOne} style={{backgroundColor:"#4448FF",width:166,height:48,alignItems:"center",justifyContent:"center",marginTop:30,marginBottom:10, borderRadius:7}}>
                      <Text style={{fontSize:20,color:"#fff",fontWeight:"400"}}>Confirm</Text>
                    </TouchableOpacity>
                    {/* Button Confirm */}


                    
                    
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
        height:587,
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

export default ResetPasswordComponent;
