import React, {useState} from 'react';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomBackground from '../../Components/CustomBackground';
import CustomForground from '../../Components/CustomForground';
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

   
    Alert
} from 'react-native';
import Heading from '../../Components/Heading';

 
const ForgotPasswordComponent = ({
    VerifyForgotCode
    
}) => { 
 const {height}=useWindowDimensions();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [show, setShow] = useState(true);
  const showValue=()=>{
      setShow(!show);
     
  }
  const userScure=false;

 

 
  
    return (
        
            <SafeAreaView style={styles.container}>
              
              {/* Background Image */}
                 <CustomBackground/>
                 {/* Background Image */}
                
                 <View style={styles.mainContainer}>
                  
                    {/* Forground Image */}
                       <CustomForground source={require("../../assets/Login-icon.png")}/>
                     {/*Forground image  */}
                   <Heading text="Forgot Password" type="primary"/>
                    {/* Input field user Email/Mobile Number */}
                    
                    <View style={{marginVertical:35,}}>
                    <CustomInput label="Mobile Number/Email" width={173} eye="none"
                    value={userEmail} setValue={setUserEmail} scure={userScure}/>
                      </View> 
                    {/* Button Sign In */}
                    <CustomButton onPress={VerifyForgotCode} text="Confirm" type="primary"/>
                    {/* Button Sign In */}

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
      mainContainer:{
        width:329,
        height:556,
        padding:20,
       
        borderRadius:11,
        
        backgroundColor:"white",
        position:"relative",
        alignItems:"center",
       
        shadowColor:"#4448FF",
       
        elevation:10,
        
        
      },
      iconImage:{
        
        minWidth:125,
        minHeight:125,
       marginBottom:15,
       marginTop:15,
       
      }
      
});

export default ForgotPasswordComponent;
  
                      
                    
                    
                    
                    
                   
                    

                   
                    
                