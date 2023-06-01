import { StyleSheet, 
    Text,
     View,
     Image, 
     TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from '../CustomText';
import {colors} from '../../globalStyle';
const CustomCNIC = ({
    text,
    camera,
    browse,
    defaultImage
}) => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",padding:11,}}>
      <Image style={{width:21,height:21,borderRadius:5,borderWidth:1,}} source={defaultImage}/>
      <TouchableOpacity onPress={camera}>
        <Text style={styles.text_heading}>{text}</Text></TouchableOpacity>
        
        <View style={{display:"flex", flexDirection:"row",textAlign:"center"}}>
            <TouchableOpacity onPress={browse}><Text style={styles.link}>Browse</Text></TouchableOpacity>
            <Text style={styles.text}> an image from {"\n"}
             your Device</Text>
        </View>
       
    </View>
  )
}

export default CustomCNIC;

const styles = StyleSheet.create({
    text_heading:{
        alignSelf:"center",
        color:"#4448FF",
        fontWeight:"700",
        fontFamily:"Poppins-SemiBold.ttf",
        marginVertical:10,
       textAlign:"center",
        fontSize:7,
        
    },
    link:{
       
        color:"#4448FF",
        fontWeight:"700",
        fontFamily:"Poppins-SemiBold.ttf",
        
        
        fontSize:7,
    },
    text:{
        color:colors.text,
        fontSize:6,
        fontWeight:"400",
       
        

    }
})