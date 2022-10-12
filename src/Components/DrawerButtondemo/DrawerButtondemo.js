import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React,{useState} from 'react'


const DrawerButtondemo  = ({
    onPress,
    text,
    type,
    source,
    PaymentImage,
   active,
   viewImage
}) => {
  
  return (
    <TouchableOpacity onPress={onPress}
    
    >

          
    <View style={{width:"100%",marginLeft:-1,paddingLeft:10,backgroundColor:active,flexDirection:"row",marginVertical:5,alignItems:"center",paddingVertical:10,height:47,
    borderRadius:100,
    }}
    
    >

      {PaymentImage}
    <Image style={{marginLeft:10,marginRight:28,display:viewImage}} source={source}/>
    <Text style={{fontSize:16,fontWeight:"600",fontFamily:"MontserratAlternates-Medium",color:"#5A5A5A"}}>{text}</Text> 
    </View>
    </TouchableOpacity>
  )
}

export default DrawerButtondemo;

const styles = StyleSheet.create({
    container_primary:{
        backgroundColor:"#4448FF",
        width:166,
        height:48,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10,
        borderRadius:7
    },
    container_secondary:{
      backgroundColor:"#4448FF",
      width:220,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:10,
      marginBottom:10,
      borderRadius:7
    },
    container_tertiary:{
      backgroundColor:"#ffffff",
      width:220,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:10,
      marginBottom:10,
      borderRadius:7,
      borderColor:"#4448FF",
      borderWidth:2,
    },
    text_primary:{
        fontSize:20,
        color:"#fff",
        fontWeight:"400"
    },
    text_secondary:{
      fontSize:20,
      color:"#fff",
      fontWeight:"400"
  },
  text_tertiary:{
    fontSize:20,
    color:"#4448FF",
    fontWeight:"400"
},
})