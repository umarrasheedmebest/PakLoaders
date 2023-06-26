import React, { useEffect, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Auth } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../AuthProvider';
import { ActivityIndicator, SafeAreaView, View,ImageBackground,Image,Text} from 'react-native';
import {requestUserPermission,notificationListener} from '../Components/NotificationServices/NotificationService';
import { MyTabs } from './BottomNavigation';
import { MyTabss } from './TopNavigation';

const AppNavigator = () => {
    const { userToken, login,isLoading,setisLoading } = useContext(AuthContext);
   
    if (isLoading) {
        return  <View style = {{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#444BFF'}}>
            <ActivityIndicator/>
        <Image source = {require('../assets/slide3.png')} style = {{height: 200, width: 200}}/>
        <Text style = {{marginTop: 20, fontSize: 24, color: 'white', fontWeight: "bold"}}>P A K    L O A D E R S</Text>
    </View>
        
      
    }
    useEffect(() => {
    
    requestUserPermission()
    notificationListener()
      
    }, [])
    

    return (
        <NavigationContainer>
            {/* <MainNavigator/> */}
            {userToken!==null ? <MainNavigator /> : <Auth />}
            {/* <MyTabss/> */}
            {/* <MyTabs/> */}
        </NavigationContainer>
    );
};

export default AppNavigator;