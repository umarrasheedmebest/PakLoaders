import React, {useState} from 'react';
import CustomBackground from '../../Components/CustomBackground';
import { colors } from '../../globalStyle';
import { useNavigation } from '@react-navigation/native';
import { IMAGE_URL } from '../../Redux/constent/constent';

import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Button,
    Dimensions
    
} from 'react-native';
import allData from '../Api/Home';
import { useSelector } from 'react-redux';


 
const CustomHeader = ({
    ContentView,
    text,
    backgroundColor,
    toggleButton,
    back,
    postFlat,
    Chatprofile,
    show,
    ...props
}) => { 
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
  const navigation=useNavigation();
  const defaultImage=require('../../assets/arrow-back.png');
  const customImage=require('../../assets/whiteButton.png');
  const userData= useSelector((state)=>state.user.getUserResponse);

const goBaack=()=>{
  const back=props.navigation.goBack();
  return back;
}
const toggle=()=>{
  const back=props.navigation.openDraw();
  return back;
}
    return (
        
            <SafeAreaView style={[styles.container,{width:windowWidth,height:windowHeight}]}>
              {/* Background Image */}
                 <CustomBackground CustomBackground={back}/>
                 {/* Background Image */}
               
                  {/* Header */}
                  <View style={{flexDirection:"row",width:windowWidth,justifyContent:"space-between",paddingHorizontal:15,paddingVertical:20,alignItems:"center"}}>
           
    <TouchableOpacity onPress={()=>toggleButton?navigation.openDrawer(): navigation.goBack()}>
       <Image source={toggleButton?customImage:defaultImage}/>
    </TouchableOpacity>
          
            <Text style={{fontSize:18,color:"#fff",fontFamily:"Poppins-Regular",textAlign:"center",}}> {text}</Text>
            <View >
             {Chatprofile?<View style={{flexDirection:"row",alignItems:"center"}}>
              <TouchableOpacity style={{marginRight:10,}}>
                      <Image source={require('../../assets/Bell.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight:10,}}>
                      {userData.map((res)=>{
                         <Image style={{width:36,height:36,borderRadius:100}} source={{uri:`${IMAGE_URL}${res.user_image}`}}/>
                      })}
                    </TouchableOpacity>
              </View>
              :
              toggleButton?<TouchableOpacity style={{marginRight:10,}}>
                      <Image source={require('../../assets/Bell.png')}/>
                    </TouchableOpacity>:<View></View>} 
                
              
            
            </View>
            
           </View>
            {/* MainContainer */}
            {postFlat?<View showsVerticalScrollIndicator={false} style={[styles.mainContainer,styles.commonStyle]}>
              {/* Custom ContentView */}
               {ContentView}
              
               {/* Cutom ContentView */}
                </View>:<ScrollView  showsVerticalScrollIndicator={false} style={[styles.mainContainer,styles.commonStyle]}>
              {/* Custom ContentView */}
               {ContentView}
               {/* Cutom ContentView */}
                </ScrollView>}
            
        
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
     
      
     
      
  
   
     
});


export default CustomHeader;
