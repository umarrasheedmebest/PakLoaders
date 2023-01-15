import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { createDrawerNavigator, DrawerView } from '@react-navigation/drawer';
import Home from '../modules/CustomHome/CustomHome';
import Package from '../modules/CustomPackages/CustomPackage';
import Post from '../modules/MyPosts/CustomPost';
import InsuredLuggage from '../modules/Luggage/InsuredLuggage';
import Rides from '../modules/MyRides/Rides';
import Chat from '../modules/Chat/Chat';
import Payment from '../modules/Payment/Payment';
import Share from '../modules/Share/Share';
import LiveChat from '../modules/ChatScreen/Screen/LiveChat';
import Contact from '../modules/ContactUs/ContactUs'
import Rate from '../modules/RateUS/Rate';
import LogOut from '../modules/LogOut/LogOut';
import CustomDrawer from '../Components/CustomDrawer';
import { color } from 'react-native-reanimated';
import Vehicle from '../modules/Vehicle/Vehicle';
import Profile from '../modules/Profile/Profile';
import Reviews from '../modules/Reviews/Reviews';
import EditProfile from '../modules/EditProfile/EditProfile';
import ChangePassword from '../modules/ChangePassword/ChangePassword';
import Notification from '../modules/Notification/Notification';
import BlackDtail from '../modules/BlackDetail/BlackDtail';
import CreatePost from '../modules/CreatePost/CreatePost';
import DebitCard from '../modules/DebitCard/DebitCard';
import EasyPaisa from '../modules/EasyPaisa/EasyPaisa';
import EasypaisaAccount from '../modules/EasypaisaAccount/EasypaisaAccount';
import JazzCash from '../modules/JazzCash/JazzCash';
import JazzCashAccount from '../modules/JazzCashAccount/JazzCashAccount';
import Bank from '../modules/Bank/Bank';
import BankAccount from '../modules/BankAccount/BankAccount';
import Maps from '../modules/Maps/Maps';
import RiderProfile from '../modules/RiderProfile/RiderProfile';

const Drawer = createDrawerNavigator();

export const MainNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={props=> <CustomDrawer {...props}/>} screenOptions={{headerShown: false,drawerActiveBackgroundColor:"#D9EBFF",drawerItemStyle:{borderRadius:100,width:"100%",marginLeft:-1,paddingLeft:10,},drawerLabelStyle:{fontSize:16,fontWeight:"600",fontFamily:"MontserratAlternates-Medium",color:"#5A5A5A"}}}>
            <Drawer.Screen name="Home" component={Home} options={{
                drawerIcon:()=>(
                  <Image source={require('../assets/home_icon_drawer.png')}/>  
                )
            }}/>
            <Drawer.Screen name="Packages" component={Package} options={{
                drawerIcon:()=>(
                  <Image source={require('../assets/pkg_icon_drawer.png')}/>  
                )
            }}/>
            <Drawer.Screen name="Post" component={Post} options={{
                drawerIcon:()=>(
                  <Image source={require('../assets/mypost_icon_drawer.png')}/>  
                )
            }}/>
            <Drawer.Screen name="InsuredLuggage" component={InsuredLuggage} options={{
                drawerIcon:()=>(
                  <Image source={require('../assets/insured_lugage_icon_drawer.png')}/>  
                )
            }}/>
            <Drawer.Screen name="Rides" component={Rides} options={{
                drawerIcon:()=>(
                  <Image source={require('../assets/ride_icon_drawer.png')}/>  
                )
            }}/>
            <Drawer.Screen name="Chat" component={Chat} options={{
                drawerIcon:()=>(
                  <Image source={require('../assets/chat_icon_drawer.png')}/>  
                )
            }}/>
            <Drawer.Screen name="Payment" component={Payment} options={{
                drawerIcon:()=>(
                  <View style={{justifyContent:"center",alignContent:"center",position:"relative"}}><ImageBackground style={{width:34,height:34,resizeMode:"contain"}} source={require('../assets/payment.png')}>
                  <Image style={{justifyContent:"center",position:"absolute",right:7,top:9,}} source={require('../assets/pay.png')}/>
                  </ImageBackground>
                  </View>  
                )
            }}/>
            <Drawer.Screen name="Share" component={Share} options={{
                drawerIcon:()=>(
                  <Image source={require('../assets/share_icon_drawer.png')}/>  
                )
            }}/>
            <Drawer.Screen name="Contact" component={Contact} options={{
                drawerIcon:()=>(
                  <Image source={require('../assets/contact_icon_drawer.png')}/>  
                )
            }}/>
            <Drawer.Screen name="Rate" component={Rate} options={{
                drawerIcon:()=>(
                  <Image source={require('../assets/rate_icon_drawer.png')}/>  
                )
            }}/>
            <Drawer.Screen name={"Vehicle"} component={Vehicle}
            
            />
            <Drawer.Screen name={"Profile"} component={Profile}/>
            <Drawer.Screen name='Reviews' component={Reviews}/>
            <Drawer.Screen name='EidtProfile' component={EditProfile}/>
            <Drawer.Screen name='ChangePassword' component={ChangePassword}/>
            <Drawer.Screen name='Notification' component={Notification}/>
            <Drawer.Screen name='Detail' component={BlackDtail}/>
            <Drawer.Screen name='CreatePost' component={CreatePost}/>
            <Drawer.Screen name='DebitCard' component={DebitCard}/>
            <Drawer.Screen name='EasyPaisa' component={EasyPaisa}/>
            <Drawer.Screen name='EasypaisaAccount' component={EasypaisaAccount}/>
            <Drawer.Screen name='JazzCash' component={JazzCash}/>
            <Drawer.Screen name='JazzCashAccount' component={JazzCashAccount}/>
            <Drawer.Screen name='Bank' component={Bank}/>
            <Drawer.Screen name='BankAccount' component={BankAccount}/>
            <Drawer.Screen name='Maps' component={Maps}/>
            <Drawer.Screen name='RiderProfile' component={RiderProfile}/>
            <Drawer.Screen name='LiveChat' component={LiveChat}/>


            <Drawer.Screen name="LogOut" component={LogOut}options={{
                drawerIcon:()=>(
                  <Image source={require('../assets/logout_icon_drawer.png')}/>  
                )
            }}/>












        </Drawer.Navigator>
    );
};

