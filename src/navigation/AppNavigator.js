import React, { useEffect, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Auth } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../AuthProvider';
import { ActivityIndicator, SafeAreaView, View,ImageBackground } from 'react-native';
import {requestUserPermission,notificationListener} from '../Components/NotificationServices/NotificationService';
import { MyTabs } from './BottomNavigation';
const AppNavigator = () => {
    const { userToken, login,isLoading,setisLoading } = useContext(AuthContext);
   
    if (isLoading) {
        return <View style={{flex:1, justifyContent:"center",alignItems:"center",}}>
            <ImageBackground resizeMode='contain' style={{width:"100%",height:"100%",}} source={require('../assets/slide3.png')}>
            <ActivityIndicator size={'large'} />
            </ImageBackground>
              </View>
        
      
    }
    // useEffect(() => {
    
    // requestUserPermission()
    // notificationListener()
      
    // }, [])
    

    return (
        <NavigationContainer>
            {userToken!==null ? <MainNavigator /> : <Auth />}
            {/* <MyTabs/> */}
        </NavigationContainer>
    );
};

export default AppNavigator;