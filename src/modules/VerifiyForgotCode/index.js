import React,{useState} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View

} from 'react-native';
import CustomBackground from '../../Components/CustomBackground';
import CustomForground from '../../Components/CustomForground';
import CustomText from '../../Components/CustomText';
import Heading from '../../Components/Heading';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { TextInput } from 'react-native-gesture-handler';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { colors } from '../../globalStyle';


const VerifyForgotCodeComponent = ({
    navigateVerified,
    navigateResetPassword
 }) => {
    const [otp, setOtp] = useState('');
    
    return (
        <SafeAreaView style={styles.container}>
            {/* Background Image */}
            <CustomBackground/>
            {/* Background Image */}

            <View style={styles.mainContainer}>
                {/* Front Image  */}
                <CustomForground source={require("../../assets/Login-icon.png")}/>     
                 {/* Front Image */}

                 {/* Heading */}
                <Heading text="Verification Code"/>
                 {/* Heading */}
                 <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"space-evenly"}}>
                 <OTPInputView
    style={{width: '100%', height: 80,backgroundColor:"#ffffff",shadowColor:"#fff",marginTop:10
}}
    pinCount={6}
    code={otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    onCodeChanged = {code => { setOtp(code)}}
    autoFocusOnLoad
    
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code => {
        console.log(`Code is ${code}, you are good to go!`)
    })}
/>
{/* <OTPInputView pinCount={6} /> */}
                 
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
                 {/* Verification Code */}
                <View style={{marginVertical:40}}>
                {/* Text */}
                <CustomText text="Haven't received a code?" link="Send Again"/>
                {/* Text */}
                </View>
                {/* Verification Button */}
                <CustomButton text="Verify" type="primary" onPress={navigateResetPassword}/>
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
        height: 35,
        borderWidth: 0,
        borderBottomWidth: 1,
       color:colors.text
      },
    
      underlineStyleHighLighted: {
        borderColor: "#03DAC6",
      },
});

export default VerifyForgotCodeComponent;
