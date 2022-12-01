import React,{useContext,useState} from 'react';
import { ImageBackground, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import {DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../../AuthProvider';
import DrawerButtondemo from '../DrawerButtondemo';
import { color } from 'react-native-reanimated';

const CustomDrawer = (props,{Imagebg,bgImage}) => {
  const navigation = useNavigation();
  const {logout} = useContext(AuthContext);
 const [colorspk, setColorspk] = useState(false)
  
  return (
    <View style={{flex:1}}>
    
      <ImageBackground source={Imagebg?null:require('../../assets/bg_img_52.png')} style={{paddingTop:20,paddingBottom:40,paddingHorizontal:20,marginBottom:-18,}}> 
      {/* Back and languange Button */}
      <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:30,alignItems:"center"}}>
        <View>
          <TouchableOpacity onPress={()=>props.navigation.closeDrawer()}>
             <Image source={require('../../assets/arrow-back.png')}/>
          </TouchableOpacity>
         
        </View>
        <View style={{flexDirection:"row"}}>
          {/* English */}
          <TouchableOpacity>
          <View style={{flexDirection:'row',width:46,height:23,backgroundColor:"#fff",justifyContent:"space-evenly",alignItems:"center",borderTopLeftRadius:5,borderBottomLeftRadius:5}}><Image source={require('../../assets/british.png')}/>
          <Text style={{fontSize:10,fontFamily:"Montserrat_Medium"}}>ENG</Text>
          </View>
        </TouchableOpacity>
        {/* Urdu  */}
        <TouchableOpacity>
          <View style={{flexDirection:'row',width:46,height:23,backgroundColor:"#CCCCCC",justifyContent:"space-evenly",alignItems:"center",borderTopRightRadius:5,borderBottomRightRadius:5}}><Image source={require('../../assets/pak.png')}/>
          <Text style={{fontSize:10,fontFamily:"Montserrat_Medium"}}>UR</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
      {/* Profile button */}
      <TouchableOpacity onPress={()=>props.navigation.navigate('Profile')}>
        <View style={{width:68,height:68,borderWidth:2,borderColor:"#fff",borderRadius:100, justifyContent:"center", alignItems:"center",position:"relative" }}>
            <View style={{width:7,height:8,backgroundColor:"#FECB00", borderRadius:100,position:"absolute",zIndex:1,right:8,bottom:1}}></View>
           <Image source={require('../../assets/Header_Profile.png')} style={{height:57,width:57,}}/> 
        </View>
        </TouchableOpacity>
        <Text style={{fontSize:16,fontWeight:"500", color:"#fff",}}>Ali khan</Text>
        <Text style={{fontSize:14,fontWeight:"400", color:"#fff",}}>+92303 2374827</Text>

   
        {/* Scrool navigation button */}
        </ImageBackground>
       <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:"#fff", borderTopLeftRadius:20,borderTopRightRadius:20,paddingTop:20,}}>
        {/* List */}
        <View >
         
          {/* <DrawerItemList {...props} /> */}
          <DrawerButtondemo 
          active={colorspk?'#D9EBFF':'#fff'}
          text={'Home'}
          source={require('../../assets/home_icon_drawer.png')}
          onPress={()=>{
            setColorspk(true)
            navigation.navigate('Home')}}
          />
          <DrawerButtondemo 
          text={'Edit Post'}
          source={require('../../assets/mypost_icon_drawer.png')}
          onPress={()=>navigation.navigate('Post')}
          />
          <DrawerButtondemo 
          text={'Packages'}
          source={require('../../assets/pkg_icon_drawer.png')}
          onPress={()=>navigation.navigate('Packages')}
          />
        </View>
       
          <DrawerButtondemo 
          text={'Insured Luggage'}
          source={require('../../assets/insured_lugage_icon_drawer.png')}
          onPress={()=>navigation.navigate('InsuredLuggage')}
          />
          <DrawerButtondemo 
          text={'My Rides'}
          source={require('../../assets/ride_icon_drawer.png')}
          onPress={()=>navigation.navigate("Rides")}
          />
           <DrawerButtondemo 
          text={'My Post'}
          source={require('../../assets/mypost_icon_drawer.png')}
          onPress={()=>navigation.navigate("CreatePost")}
          />
          <DrawerButtondemo 
          text={'Chat'}
          source={require('../../assets/chat_icon_drawer.png')}
          onPress={()=>navigation.navigate('Chat')}
          />
          <DrawerButtondemo 
          text={'Payment'}
          PaymentImage={
            <View style={{justifyContent:"center",alignContent:"center",position:"relative",
            paddingLeft:10,marginRight:30,
            }}>
            <ImageBackground style={{width:34,height:34,resizeMode:"contain"}} source={require('../../assets/payment.png')}>
                  <Image style={{justifyContent:"center",position:"absolute",right:7,top:9,}} source={require('../../assets/pay.png')}/>
                  </ImageBackground>
                  </View>  
          }
          viewImage={'none'}
          
          onPress={()=>navigation.navigate('Payment')}
          />
          <DrawerButtondemo 
          text={'Share'}
          source={require('../../assets/share_icon_drawer.png')}
          onPress={()=>navigation.navigate('Share')}
          />
          <DrawerButtondemo 
          text={'Contact Us'}
          source={require('../../assets/contact_icon_drawer.png')}
          onPress={()=>navigation.navigate("Contact")}
          />
          <DrawerButtondemo 
          text={'Rate'}
          source={require('../../assets/rate_icon_drawer.png')}
          onPress={()=>navigation.navigate('Rate')}
          />
          
        {/* Last Logout portion */}
        <View style={{borderColor:"#CCCCCC",borderTopWidth:2,}}></View>  
          {/* Logout */}
          <TouchableOpacity onPress={()=>navigation.navigate("LogOut")}>

          
        <View style={{borderRadius:100,width:"100%",marginLeft:-1,paddingLeft:10,backgroundColor:"#fff",flexDirection:"row",marginVertical:20,alignItems:"center",}}>
        <Image style={{marginLeft:10,marginRight:35}} source={require('../../assets/logout_icon_drawer.png')}/>
        <Text style={{fontSize:16,fontWeight:"600",fontFamily:"MontserratAlternates-Medium",color:"#5A5A5A"}}>Log Out</Text> 
        </View>
        </TouchableOpacity>
        {/* Logout */}
        <View style={{marginTop:50,marginBottom:20,alignItems:"center"}}>
        <View style={{width:128,height:65,justifyContent:"space-between",alignItems:"center"}}>
          <Text style={{fontSize:14,fontWeight:"600",fontFamily:"MontserratAlternates-Medium",color:"#5A5A5A",textTransform:"uppercase"}}>Connect us at</Text>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <Image source={require('../../assets/fb.png')}/>
          <Image style={{marginHorizontal:10,}} source={require('../../assets/insta.png')}/>
          <Image source={require('../../assets/twiter.png')}/>

        </View> 
        </View>
        </View>
        
        </DrawerContentScrollView> 
        
    
    </View>
    
  )
}



const styles = StyleSheet.create({});
export default CustomDrawer;