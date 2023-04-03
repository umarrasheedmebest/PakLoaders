import React,{useContext,useState,useEffect,useCallback,memo} from 'react';
import { ImageBackground, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import {DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../../AuthProvider';
import DrawerButtondemo from '../DrawerButtondemo';
import { color } from 'react-native-reanimated';

import { useDispatch,useSelector } from 'react-redux';
import { changeLanguage } from '../../services/storage/Actions';
import { eng, Urdu } from '../Api/Language';
import { languageReducer } from '../../Redux/slices/LanguageSlice';
import { english,urdu } from '../../Redux/slices/LanguageSlice';
import { getAllPostRequest } from '../../Redux/slices/PostSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserRequest } from '../../Redux/slices/UserSlice';
import { IMAGE_URL } from '../../Redux/constent/constent';
import { getAllBidsRequest } from '../../Redux/slices/BidsSlice';
import HomeIcon from '../../assets/SVG_Icons/home_icon_drawer.svg';
import PostIcon from '../../assets/SVG_Icons/mypost_icon_drawer.svg';
import PakageIcon from '../../assets/SVG_Icons/pkg_icon_drawer.svg';
import LuggageIcon from '../../assets/SVG_Icons/insured_lugage_icon_drawer.svg';
import RideIcon from '../../assets/SVG_Icons/ride_icon_drawer.svg';
import ChatIcon from '../../assets/SVG_Icons/chat_icon_drawer.svg';
import PaymentIcon from '../../assets/SVG_Icons/payment_icon_drawer.svg';
import ShareIcon from '../../assets/SVG_Icons/share_icon_drawer.svg';
import ContactIcon from '../../assets/SVG_Icons/contact_icon_drawer.svg';
import RateIcon from '../../assets/SVG_Icons/rate_icon_drawer.svg';
import LogOut from '../../assets/SVG_Icons/logout_icon_drawer.svg';
import Facebook from '../../assets/SVG_Icons/fb_icon_52.svg';
import Instagram from '../../assets/SVG_Icons/insta_icon_52.svg';
import Twitter from '../../assets/SVG_Icons/twitter_icon_52.svg';
import BackArrow from '../../assets/SVG_Icons/arrow-back.svg';
import EngFlag from '../../assets/SVG_Icons/Eng_lang.svg';
import PakFlag from '../../assets/SVG_Icons/Urdu_lang.svg';



const CustomDrawer = (props,{Imagebg,bgImage}) => {
  const navigation = useNavigation();
  const {logout} = useContext(AuthContext);
 const [colorspk, setColorspk] = useState(false)
  const counter=useSelector((state)=>state.language);


  const userData= useSelector((state)=>state.user.getUserResponse);
  


  const dispatch=useDispatch();
  
  
  const getData=async()=>{
try {
       dispatch(getAllPostRequest());
       dispatch(getUserRequest());
       dispatch(getAllBidsRequest())
    } catch (error) {
      console.log("Not fetch from Asynic storge")
    }
  }
 
  // useEffect(() => {
  // getData()
   
  
    
  // }, [])
  
  
  const [first, setFirst] = useState(false)
  
  
  return (
    <View style={{flex:1}}>
    
      <ImageBackground source={Imagebg?null:require('../../assets/bg_img_52.png')} style={{paddingTop:20,paddingBottom:40,paddingHorizontal:20,marginBottom:-18,}}> 
      {/* Back and languange Button */}
      <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:30,alignItems:"center"}}>
        <View>
          <TouchableOpacity onPress={()=>props.navigation.closeDrawer()}>
            <BackArrow width={30}/>
          </TouchableOpacity>
         
        </View>
        <View style={{flexDirection:"row"}}>
          {/* English */}
          <TouchableOpacity onPress={()=>{
            dispatch(english())
          }}>
          <View style={{flexDirection:'row',width:46,height:23,backgroundColor:"#fff",justifyContent:"space-evenly",alignItems:"center",borderTopLeftRadius:5,borderBottomLeftRadius:5}}><Image source={require('../../assets/british.png')}/>
          <Text style={{fontSize:10,fontFamily:"Montserrat_Medium"}}>ENG</Text>
          </View>
        </TouchableOpacity >
        {/* Urdu  */}
        <TouchableOpacity onPress={()=>{
          
            dispatch(urdu())
          
          
        }}>
          <View style={{flexDirection:'row',width:46,height:23,backgroundColor:"#CCCCCC",justifyContent:"space-evenly",alignItems:"center",borderTopRightRadius:5,borderBottomRightRadius:5}}><Image source={require('../../assets/pak.png')}/>
          <Text style={{fontSize:10,fontFamily:"Montserrat_Medium"}}>UR</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
      
      {/* Profile button */}
      {/* {userData.map((res)=>{
        
        return <View key={res.id}>
               <TouchableOpacity onPress={()=>props.navigation.navigate('Profile')}>
        <View style={{width:68,height:68,borderWidth:2,borderColor:"#fff",borderRadius:100, justifyContent:"center", alignItems:"center",position:"relative" }}>
            <View style={{width:7,height:8,backgroundColor:"#FECB00", borderRadius:100,position:"absolute",zIndex:1,right:8,bottom:1}}></View>
           <Image source={{uri:`${IMAGE_URL}${res.user_image}`}} style={{height:57,width:57,borderRadius:100}}/> 
        </View>
        </TouchableOpacity>
        <Text style={{fontSize:16,fontWeight:"500", color:"#fff",}}>{res.full_name}</Text>
        <Text style={{fontSize:14,fontWeight:"400", color:"#fff",}}>{res.number}</Text>
        </View>
      })} */}
     
   
        {/* Scrool navigation button */}
        </ImageBackground>
       <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:"#fff", borderTopLeftRadius:20,borderTopRightRadius:20,paddingTop:20,}}>
        {/* List */}
        <View >
         
          {/* <DrawerItemList {...props} /> */}
          <DrawerButtondemo 
          active={colorspk?'#D9EBFF':'#fff'}
          text={counter?eng.home:Urdu.home}
          Icons={<HomeIcon width={30} />}
          source={require('../../assets/home_icon_drawer.png')}
          onPress={()=>{
            setColorspk(true)
            navigation.navigate('Homes')}}
          />
          <DrawerButtondemo 
          text={counter?eng.editPost:Urdu.editPost}
          Icons={<PostIcon width={30} />}
          source={require('../../assets/mypost_icon_drawer.png')}
          onPress={()=>{navigation.navigate('Post')}}
          />
          <DrawerButtondemo 
          text={counter?eng.packages:Urdu.packages}
          Icons={<PakageIcon width={30} />}

          source={require('../../assets/pkg_icon_drawer.png')}
          onPress={()=>navigation.navigate('Packages')}
          />
        
       
          <DrawerButtondemo 
          text={counter?eng.insuredLuggage:Urdu.insuredLuggage}
          Icons={<LuggageIcon width={30} />}

          source={require('../../assets/insured_lugage_icon_drawer.png')}
          onPress={()=>navigation.navigate('InsuredLuggage')}
          />
          <DrawerButtondemo 
          text={counter?eng.myRides:Urdu.myRides}
          Icons={<RideIcon width={30} />}

          source={require('../../assets/ride_icon_drawer.png')}
          onPress={()=>navigation.navigate("Rides")}
          />
           <DrawerButtondemo 
          text={counter?eng.myPost:Urdu.myPost}
          Icons={<PostIcon width={30} />}

          source={require('../../assets/mypost_icon_drawer.png')}
          onPress={()=>{
            dispatch(getAllPostRequest());
            navigation.navigate("CreatePost")}}
          />
          <DrawerButtondemo 
          text={counter?eng.chat:Urdu.chat}
          Icons={<ChatIcon width={30} />}

          source={require('../../assets/chat_icon_drawer.png')}
          onPress={()=>navigation.navigate('Chat')}
          />
          <DrawerButtondemo 
          text={counter?eng.payment:Urdu.payment}
          Icons={<PaymentIcon width={30} />}
          onPress={()=>navigation.navigate('Payment')}
          />
          <DrawerButtondemo 
          text={counter?eng.share:Urdu.share}
          Icons={<ShareIcon width={30} />}

          source={require('../../assets/share_icon_drawer.png')}
          onPress={()=>navigation.navigate('Share')}
          />
          <DrawerButtondemo 
          text={counter?eng.contactUs:Urdu.contactUs}
          Icons={<ContactIcon width={30} />}

          source={require('../../assets/contact_icon_drawer.png')}
          onPress={()=>navigation.navigate("Contact")}
          />
          <DrawerButtondemo 
          text={counter?eng.rate:Urdu.rate}
          Icons={<RateIcon width={30} />}

          source={require('../../assets/rate_icon_drawer.png')}
          onPress={()=>navigation.navigate('Rate')}
          />
          </View>
        {/* Last Logout portion */}
        <View style={{borderColor:"#CCCCCC",borderTopWidth:2,}}></View>  
          {/* Logout */}
          <TouchableOpacity onPress={()=>navigation.navigate("LogOut")}>

          
        <View style={{borderRadius:100,width:"100%",marginLeft:-1,paddingLeft:10,backgroundColor:"#fff",flexDirection:"row",marginVertical:20,alignItems:"center",}}>

        <View style={{marginLeft:10,marginRight:30}}><LogOut width={30}/></View>
        <Text style={{fontSize:16,fontWeight:"600",fontFamily:"MontserratAlternates-Medium",color:"#5A5A5A"}}>{counter?eng.logOut:Urdu.logOut}</Text> 
        </View>
        </TouchableOpacity>
        {/* Logout */}
        <View style={{marginTop:50,marginBottom:20,alignItems:"center"}}>
        <View style={{width:128,height:65,justifyContent:"space-between",alignItems:"center"}}>
          <Text style={{fontSize:14,fontWeight:"600",fontFamily:"MontserratAlternates-Medium",color:"#5A5A5A",textTransform:"uppercase"}}>Connect us at</Text>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          
          <Facebook width={30}/>
         <View style={{marginHorizontal:10}}><Instagram width={30}/></View> 
          <Twitter width={30}/>

        </View> 
        </View>
        </View>
        
        </DrawerContentScrollView> 
        
    
    </View>
    
  )
}



const styles = StyleSheet.create({});
export default memo(CustomDrawer);