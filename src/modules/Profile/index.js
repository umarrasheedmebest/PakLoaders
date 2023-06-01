import React, {useState} from 'react';
import CustomBackground from '../../Components/CustomBackground';
import { colors } from '../../globalStyle';
import Profile from '../../Components/Api/Profile';
import { useNavigation } from '@react-navigation/native';

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
import { useSelector } from 'react-redux';
import { IMAGE_URL } from '../../Redux/constent/constent';

 
const ProfileComponent = ({
    sideBar,
    deleteUser,
    userLogout,
    ...props
}) => { 
  const userData= useSelector((state)=>state.user.getUserResponse);

  const navigation =useNavigation();
  const dataCards=({item})=>{
    return(
      <View>
        <TouchableOpacity>
           <View style={{width:329,height:52,borderWidth:1,
      borderColor:"#007BFE",marginTop:10,borderRadius:10,
      flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:10
      }}>
        <View style={{flexDirection:"row"}}>
          <Image source={item.image}/>
          <Text style={{marginLeft:10}}>{item.name}</Text>
        </View>
        <View>
          <Image source={item.arrow}/>
        </View>
        
      </View>
        </TouchableOpacity>
      </View>
     
    )
  }
    return (
        
            <SafeAreaView style={styles.container}>
              {/* Background Image */}
                 <CustomBackground/>
                 {/* Background Image */}
               
                  {/* Header */}
                  <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:20}}>
           <TouchableOpacity onPress={()=>props.navigation.goBack()}>
       <Image source={require('../../assets/arrow-back.png')}/>
    </TouchableOpacity>
          
            <Text style={{fontSize:18,color:"#fff",fontFamily:"Poppins-Regular",textAlign:"center",}}> My Profile</Text>
            <View style={{width:20,}}></View>
            
           </View>
            {/* MainContainer */}
            
            <ScrollView showsVerticalScrollIndicator={false} style={[styles.mainContainer,styles.commonStyle]}>
                {/* Edit Profile */}
                <View style={{width:"100%",flexDirection:"row",justifyContent:"flex-end"}}>
                  <TouchableOpacity onPress={()=>navigation.navigate('EidtProfile')}>
                    <Image source={require('../../assets/pencil.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>deleteUser()}>
                  <Image style={{marginLeft:5,}} source={require('../../assets/delete.png')}/>
                </TouchableOpacity>
                    
                </View>
                {/* Edit Profile */}
                <View style={{width:"100%",alignItems:"center"}}>
                  {/* User Data by Map */}
                  {userData.map((res)=>{
                    return <View style={{alignItems:"center",justifyContent:"center"}} key={res.id}> 
                          {/* Profile Picture */}
                  <TouchableOpacity>
                <View style={{width:94,height:94,borderWidth:1,
                borderColor:"#67A5FF",borderRadius:100,alignItems:"center",justifyContent:"center",
                position:"relative",
                }}>
                <Image style={{width:83,height:83,borderRadius:100}} source={{uri:`${IMAGE_URL}${res.user_image}`}}/>
                <View style={{position:"absolute",right:15,bottom:3}}>
                    <Image source={require('../../assets/activeProfile.png')}/>
                </View>
                </View>
                </TouchableOpacity>
                {/* Edit Profile */}
                {/* Name */}
                <View>
                    <Text style={{fontSize:16,fontWeight:"400",
                color:colors.primary,marginVertical:10}}>{res.full_name}</Text>
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
                    <View><Text style={{color:colors.primary,fontSize:9, marginLeft:6}}>View all reviews</Text></View>
                </View>
                {/* Reviews */}
                    </View>
                  })}
                {/* User Data by Map methed */}
                {/* Tips */}
                <View style={{flexDirection:"row",width:"100%",alignItems:"center",marginVertical:30,justifyContent:"space-evenly"}}>
               {/* 1st */}
                <View style={{alignItems:"center"}}>
                    <View style={{width:73,height:73,
                    backgroundColor:"#fff",
                    shadowColor:"#007BFE",
                    elevation:4,
                    borderRadius:100,
                    alignItems:"center",
                    justifyContent:"center"
                    }}>
                        <Image source={require('../../assets/tick.png')}/>
                    </View>
                    <Text style={{color:colors.text,fontSize:12,fontWeight:"500",marginVertical:8,marginBottom:5}}>
                    Trips Completed
                    </Text>
                    <Text style={{color:colors.primary,fontSize:12,fontWeight:"500"}}>3663</Text>
                </View>
                {/* 1st */}
                {/* 2rd */}
                <View style={{alignItems:"center"}}>
                    <View style={{width:73,height:73,
                    backgroundColor:"#fff",
                    shadowColor:"#007BFE",
                    elevation:4,
                    borderRadius:100,
                    alignItems:"center",
                    justifyContent:"center"
                    }}>
                        <Image source={require('../../assets/inprogress.png')}/>
                    </View>
                    <Text style={{color:colors.text,fontSize:12,fontWeight:"500",marginVertical:8,marginBottom:5}}>
                    Trips inprogress
                    </Text>
                    <Text style={{color:colors.primary,fontSize:12,fontWeight:"500"}}>35</Text>
                </View>
                {/* 3rd */}
                <View style={{alignItems:"center"}}>
                    <View style={{width:73,height:73,
                    backgroundColor:"#fff",
                    shadowColor:"#007BFE",
                    elevation:4,
                    borderRadius:100,
                    alignItems:"center",
                    justifyContent:"center"
                    }}>
                        <Image source={require('../../assets/Cross.png')}/>
                    </View>
                    <Text style={{color:colors.text,fontSize:12,fontWeight:"500",marginVertical:8,marginBottom:5}}>
                    Trips Cancelled
                    </Text>
                    <Text style={{color:colors.primary,fontSize:12,fontWeight:"500"}}>26</Text>
                </View>
                </View>
                {/* Tips */}
                {/* Clickable button */}
                <View style={styles.listStyle}>
                  {/* Subscription Button */}
                  <View style={{alignItems:"center",height:94,justifyContent:"center"}}>
                    <View style={styles.subscriptionDtail}>
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",}}>
                      <Text style={{fontSize:14,fontWeight:"700",color:colors.primary}}>Subscription Details</Text>
                      <TouchableOpacity>
                        <View style={{width:111,height:24,backgroundColor:"#D7373F",borderRadius:13,alignItems:"center",justifyContent:"center"}}>
                           <Text style={{fontSize:12,fontWeight:"500",fontFamily:"Poppins-Medium",color:"#fff"}}>Re-Subscribe</Text>
                        </View>
                       
                      </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",marginVertical:2}}>
                      <Image source={require('../../assets/whiteCalender.png')}/>
                      <Text style={{color:colors.primary,fontSize:10,fontWeight:"500",marginLeft:10}}>Date of subscription: 29-09-2021</Text>
                    </View>
                    <View style={{flexDirection:"row",}}>
                      <Image source={require('../../assets/watch.png')}/>
                      <Text style={{color:colors.text,fontSize:10,fontWeight:"500",marginLeft:10,lineHeight:16}}>Your subscription for Preferred annual plan has {'\n'}
expired please re-subscribe to get access. </Text>
                    </View>
                  </View>
                  </View>
                  {/* Subscription Button */}
                
                  <View >
        <TouchableOpacity onPress={()=>navigation.navigate('InsuredLuggage')}>
           <View style={{width:329,height:52,borderWidth:1,
      borderColor:"#007BFE",marginTop:10,borderRadius:10,
      flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:10
      }}>
        <View style={{flexDirection:"row"}}>
          <Image source={require('../../assets/luggageTip.png')}/>  
          
          <Text style={{marginLeft:10,}}>Insured luggae trips</Text>
        </View>
        <View>
          <Image source={require('../../assets/arrow-back2.png')}/>
        </View>
          
        
        
     </View>
        </TouchableOpacity> 
                   </View>
                   <View >
        <TouchableOpacity onPress={()=>{navigation.navigate('Packages')}}>
           <View style={{width:329,height:52,borderWidth:1,
      borderColor:"#007BFE",marginTop:10,borderRadius:10,
      flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:10
      }}>
        <View style={{flexDirection:"row"}}>
          <Image source={require('../../assets/packageTip.png')}/>  
          
          <Text style={{marginLeft:10,}}>Packages</Text>
        </View>
        <View>
          <Image source={require('../../assets/arrow-back2.png')}/>
        </View>
        
        
     </View>
        </TouchableOpacity> 
                   </View>
                   {/* My Post */}
                   <View >
        <TouchableOpacity onPress={()=>{navigation.navigate('CreatePost')}}>
           <View style={{width:329,height:52,borderWidth:1,
      borderColor:"#007BFE",marginTop:10,borderRadius:10,
      flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:10
      }}>
        <View style={{flexDirection:"row"}}>
          <Image source={require('../../assets/postTip.png')}/>  
          
          <Text style={{marginLeft:10,}}>My Post</Text>
        </View>
        <View>
          <Image source={require('../../assets/arrow-back2.png')}/>
        </View> 
        
        
     </View>
        </TouchableOpacity> 
                   </View>
                   {/* <View >
        <TouchableOpacity>
           <View style={{width:329,height:52,borderWidth:1,
      borderColor:"#007BFE",marginTop:10,borderRadius:10,
      flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:10
      }}>
        <View style={{flexDirection:"row"}}>
          <Image source={require('../../assets/keyTip.png')}/>  
          
          <Text style={{marginLeft:10,}}>Change Password</Text>
        </View>
        <View>
          <Image source={require('../../assets/arrow-back2.png')}/>
        </View>
        
        
     </View>
        </TouchableOpacity> 
                   </View> */}
                   <View >
        <TouchableOpacity onPress={()=>userLogout()}>
           <View style={{width:329,height:52,
      borderColor:"#007BFE",marginTop:10,borderRadius:10,
      flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:10,
      backgroundColor:"#F44336",marginBottom:50,
      }}>
        <View style={{flexDirection:"row"}}>
          <Image source={require('../../assets/logout.png')}/>  
          
          <Text style={{marginLeft:10,fontSize:15,color:"#fff",fontFamily:"Poppins-Regular"}}>Logout</Text>
        </View>
          
        
        
     </View>
        </TouchableOpacity> 
                   </View>
                    </View>
                {/* Clickable button */}
                     
                </View>
                </ScrollView>
        
         </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       alignItems:"center",
    },
   
      mainContainer:{
        width:"100%",
        height:"90%",
        
       padding:20,
        borderTopLeftRadius:11,
        borderTopRightRadius:11,
        backgroundColor:"white",
      
        
       
       
        
      },
      headerContainer:{
        width:"100%",
        height:"10%",
        paddingHorizontal:20,
      },
      MenuBar:{
        borderTopLeftRadius:31,
        borderTopRightRadius:31,
       borderColor:"#fff",
        shadowColor:"#4448FF",
        
     width:"100%",
    height:"10%",
    elevation:4,
    justifyContent:"center"

      },
      listStyle:{
        zIndex:2
      },
      subscriptionDtail:{
        width:"100%",
        height:92,
        borderRadius:7,
        backgroundColor:"#fff",
        shadowColor:"#007BFE",
        borderColor:"#fff",
       
        // shadowOffset: { width: 1, height: 1 },
        // shadowOpacity: 0.2,
        
        elevation: 3,
        padding:10,
      }
     
      
  
   
     
});


export default ProfileComponent;
