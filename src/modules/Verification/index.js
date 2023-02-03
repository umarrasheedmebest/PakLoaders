import React,{useState} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    TextInput

} from 'react-native';
import CustomBackground from '../../Components/CustomBackground';
import CustomForground from '../../Components/CustomForground';
import CustomText from '../../Components/CustomText';
import Heading from '../../Components/Heading/';
import CustomButton from '../../Components/CustomButton/CustomButton';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { colors } from '../../globalStyle';
import { useSelector } from 'react-redux';
import Loader from '../../Components/Loader';
const VerificationComponent = ({
    navigateVerified
 }) => {
    const otpMessage=useSelector((state)=>state.auth.signInResponse.message)
    const signinRequest=useSelector((state)=>state.auth.signInRequest)
    
    console.log("sign InRequest"+  signinRequest)
    const [token, setToken] = useState('')
    const [otp, setOtp] = useState('')
    return (
        <SafeAreaView style={styles.container}>
            {/* Background Image */}
            <CustomBackground/>
            {/* Background Image */}
            <Loader visible={signinRequest}/>

            <View style={styles.mainContainer}>
                {/* Front Image  */}
                <CustomForground source={require("../../assets/Verification.png")}/>     
                 {/* Front Image */}

                 {/* Heading */}
                <Heading text="Account Verification"/>
                 {/* Heading */}
                 <View style={{alignItems:"center",justifyContent:"center"}}>
                    <Text style={{color:colors.text,textAlign:"center"}}>{otpMessage} </Text>
                 </View>
                 <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"space-evenly"}}>

                 <OTPInputView
    style={{width: '100%', height: 80,backgroundColor:"#ffffff",shadowColor:"#fff",marginTop:30,
}}
    pinCount={6}
    code={otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    onCodeChanged = {code => { setOtp(code)}}
    autoFocusOnLoad
    
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code => {
        setToken(code)
        console.log(`Code is ${code}, you are good to go!`)
    })}
/>
                 {/* <View style={{height:56,width:36,borderBottomWidth:1.5,borderColor:"#CCCCCC",alignItems:"center",justifyContent:"center",}}>
                    <TextInput
                    style={{fontSize:40,fontWeight:"300",color:"#5A5A5A",height:56,}}
                   allowFontScaling={false}
                   maxLength={1}
                    />
                 </View>
                 <View style={{height:56,width:36,borderBottomWidth:1.5,borderColor:"#CCCCCC",alignItems:"center",justifyContent:"center",}}>
                    <TextInput
                    style={{fontSize:40,fontWeight:"300",color:"#5A5A5A",height:56,}}
                   allowFontScaling={false}
                   maxLength={1}
                    />
                 </View>
                 <View style={{height:56,width:36,borderBottomWidth:1.5,borderColor:"#CCCCCC",alignItems:"center",justifyContent:"center",}}>
                    <TextInput
                    style={{fontSize:40,fontWeight:"300",color:"#5A5A5A",height:56,}}
                   allowFontScaling={false}
                   maxLength={1}
                    />
                 </View>
                 <View style={{height:56,width:36,borderBottomWidth:1.5,borderColor:"#CCCCCC",alignItems:"center",justifyContent:"center",}}>
                    <TextInput
                    style={{fontSize:40,fontWeight:"300",color:"#5A5A5A",height:56,}}
                   allowFontScaling={false}
                   maxLength={1}
                    />
                 </View>
                 <View style={{height:56,width:36,borderBottomWidth:1.5,borderColor:"#CCCCCC",alignItems:"center",justifyContent:"center",}}>
                    <TextInput
                    style={{fontSize:40,fontWeight:"300",color:"#5A5A5A",height:56,}}
                   allowFontScaling={false}
                   maxLength={1}
                    />
                 </View>
                 <View style={{height:56,width:36,borderBottomWidth:1.5,borderColor:"#CCCCCC",alignItems:"center",justifyContent:"center",}}>
                    <TextInput
                    style={{fontSize:40,fontWeight:"300",color:"#5A5A5A",height:56,}}
                   allowFontScaling={false}
                   maxLength={1}
                    />
                 </View> */}
                 </View>
                {/* Text */}
                <CustomText text="Haven't received a code?" link="Send Again"/>
                {/* Text */}
                
                {/* Verification Button */}
                <View style={{marginVertical:60}}>
                <CustomButton text="Verify" type="primary" onPress={()=>navigateVerified(token)}/>
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
        position:"relative",
        alignItems:"center",
        justifyContent:"center"
    },
    mainContainer:{
        width:329,
        height:586,
        padding:20,
        borderRadius:11,
        
        backgroundColor:"white",
        position:"relative",
        alignItems:"center",
       
        shadowColor:"#4448FF",
       
        elevation:10,
        
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
       color:colors.text,
       fontSize:32,
       fontWeight:'500',
      },
    
      underlineStyleHighLighted: {
        borderColor: "#03DAC6",
      },
});

export default VerificationComponent;
