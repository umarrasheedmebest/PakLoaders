import React, {useState} from 'react';
import CustomBackground from '../../Components/CustomBackground';
import { colors } from '../../globalStyle';
import CustomHeader from '../../Components/CustomHeader';
import Sure from '../../Components/sure';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    ImageBackground,
    
} from 'react-native';

 
const LogOutComponent = ({
    sideBar
}) => { 
 
    return (
        <>
        
        
             <SafeAreaView style={{flex:1}}>
                <ImageBackground resizeMode='contain' style={{width:"100%",height:"100%",}} source={require('../../assets/logoutBg.png')}>
                <Sure logoutBack={true}/>
                </ImageBackground>
             </SafeAreaView>
           
           

        {/* <Sure profile={true}>
        </Sure> */}
          </>
          
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       alignItems:"center",
       justifyContent:"center",
    },
   
     
});


export default LogOutComponent;
