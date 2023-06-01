import React, {useState} from 'react';
import CustomBackground from '../../Components/CustomBackground';
import { colors } from '../../globalStyle';
import Profile from '../../Components/Api/Profile';

import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Button
    
} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import CustomInput from '../../Components/CustomInput';
import Sure from '../../Components/sure/index';
 
const ReviewsComponent = ({
    sideBar,
    ...props
}) => { 
 
    return (
     <>
     <Sure profile={true}/>
     <CustomHeader 
          toggleButton={true}
          back={true}
          text={'My Profile'}
          ContentView={
            <View >
              {/* Edit Profile */}
             <View style={{width:"100%",alignItems:"center"}}>
                <View style={{width:94,height:94,borderWidth:1,
                borderColor:"#67A5FF",borderRadius:100,alignItems:"center",justifyContent:"center",
                position:"relative",
                }}>
                <Image source={require('../../assets/darkProfile.png')}/>
                <View style={{position:"absolute",right:15,bottom:0}}>
                    <Image source={require('../../assets/darkActive.png')}/>
                </View>
                </View>
                {/* Edit Profile */}
                {/* Name */}
                <View>
                    <Text style={{fontSize:16,fontWeight:"400",
                color:"#007BFE",marginVertical:10}}>Ali Khan</Text>
                </View>
                {/* Name */}
                {/* Reviews */}
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image style={{width:12,height:12}} source={require('../../assets/Star.png')}/>
                        <Image style={{width:12,height:12}} source={require('../../assets/Star.png')}/>

                        <Image style={{width:12,height:12}} source={require('../../assets/Star.png')}/>
                        <Image style={{width:12,height:12}} source={require('../../assets/Star.png')}/>
                        <Image style={{width:12,height:12}} source={require('../../assets/Star.png')}/>
                        <Text style={{color:colors.text,fontSize:7,marginLeft:4}}>(4.5)</Text>
                    </View>
                    <View><Text style={{color:"#6C35EE",fontSize:9, marginLeft:6}}>View all reviews</Text></View>
                </View>
                {/* Reviews */}
                 {/* Subscription Button */}
                 <View style={{alignItems:"center",height:94,justifyContent:"center",marginTop:40,}}>
                    <View style={styles.subscriptionDtail}>
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",}}>
                      <Text style={{fontSize:14,fontWeight:"700",color:"#007BFE"}}>Subscription Details</Text>
                      <TouchableOpacity>
                        <View style={{width:111,height:24,backgroundColor:"#D7373F",borderRadius:13,alignItems:"center",justifyContent:"center"}}>
                           <Text style={{fontSize:12,fontWeight:"500",fontFamily:"Poppins-Medium",color:"#fff"}}>Re-Subscribe</Text>
                        </View>
                       
                      </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",marginVertical:2}}>
                      <Image source={require('../../assets/whiteCalender.png')}/>
                      <Text style={{color:"#007BFE",fontSize:10,fontWeight:"500",marginLeft:10}}>Date of subscription: 29-09-2021</Text>
                    </View>
                    <View style={{flexDirection:"row",}}>
                      <Image source={require('../../assets/watch.png')}/>
                      <Text style={{color:colors.text,fontSize:10,fontWeight:"500",marginLeft:10,lineHeight:16}}>Your subscription for Preferred annual plan has {'\n'}
                    expired please re-subscribe to get access. </Text>
                    </View>
                  </View>
                  </View>
                  {/* Subscription Button */}
                  {/* Input Box */}
                  <View style={styles.inputDtail}>
                  <View style={{width:"100%",alignItems:"flex-end"}}>
                    <Image source={require('../../assets/whitePencil.png')}/>
                </View>
               <View style={{width:"100%",height:"95%",justifyContent:"space-between"}}>
                <CustomInput 
                label="Mobile Number/Email"
                width={165}
                placeholder="92327482937"
                eye={"none"}
                />
                <CustomInput 
                label="Change Password"
                width={135}
                placeholder="......."
                text={'show'}
                
                />
               </View>
                
                  </View>
                  {/* InputBox */}
                  {/* Menu bar */}
                  <View style={{paddingBottom:20,paddingTop:20,}}>
                    <View style={styles.MenubarStyle}>
                <TouchableOpacity>
                    <Image source={require('../../assets/whiteTrack.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/whiteMessage.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/whiteRefrex.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/whiteBag.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/blueProfile.png')}/>
                </TouchableOpacity>
                </View>
                  </View>
                
                  {/* Menu Bar */}
            </View>
            </View>
          }

          />
     </>
          
            
          
    );
};

const styles = StyleSheet.create({
    subscriptionDtail:{
        width:329,
        height:92,
        borderRadius:7,
        backgroundColor:"#fff",
        shadowColor:"#007BFE",
        borderColor:"#fff",
       
        // shadowOffset: { width: 1, height: 1 },
        // shadowOpacity: 0.2,
        
        elevation: 4,
        padding:10,
      } ,
      inputDtail:{
        width:329,
        height:269,
        borderRadius:7,
        backgroundColor:"#fff",
        shadowColor:"#007BFE",
        borderColor:"#fff",
       marginVertical:20,
        // shadowOffset: { width: 1, height: 1 },
        // shadowOpacity: 0.2,
        
        elevation: 4,
        padding:10,
        paddingHorizontal:20,
        
      } ,
      MenubarStyle:{
        width:330,
        height:64,
        borderRadius:7,
        backgroundColor:"#fff",
        shadowColor:"#007BFE",
        borderColor:"#fff",
       
        // shadowOffset: { width: 1, height: 1 },
        // shadowOpacity: 0.2,
        
        elevation: 4,
        
        paddingHorizontal:20,
        borderRadius:32,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around"
      }
  
   
     
});


export default ReviewsComponent;
