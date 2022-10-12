import React from 'react';
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
import Heading from '../../Components/Heading';
import CustomButton from '../../Components/CustomButton/CustomButton';
const VerifiedComponent = ({
    navigateProfileOne
 }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Background Image */}
            <CustomBackground/>
            {/* Background Image */}

            <View style={styles.mainContainer}>
                {/* Front Image  */}
                <CustomForground source={require("../../assets/verified_icon.png")}/>     
                 {/* Front Image */}

                 {/* Heading */}
                <Heading text="Verified!!"/>
                 {/* Heading */}
                 <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"space-evenly"}}>

                 
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
                 </View>
                 <View style={{height:56,width:36,borderBottomWidth:1.5,borderColor:"#CCCCCC",alignItems:"center",justifyContent:"center",}}>
                    <TextInput
                    style={{fontSize:40,fontWeight:"300",color:"#5A5A5A",height:56,}}
                   allowFontScaling={false}
                   maxLength={1}
                    />
                 </View>
                 </View>
                {/* Text */}
                <CustomText text="You have successfully verified the account." type="primary"/>
                {/* Text */}
                
                {/* Verification Button */}
                <CustomButton text="Ok" type="primary" onPress={navigateProfileOne}/>
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
        height:470,
        padding:20,
        borderRadius:11,
        
        backgroundColor:"white",
        position:"relative",
        alignItems:"center",
       
        shadowColor:"#4448FF",
       
        elevation:10,
        
      },
});

export default VerifiedComponent;
