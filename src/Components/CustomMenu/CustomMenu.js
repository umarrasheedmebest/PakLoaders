import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../globalStyle';

const CustomMenu = () => {
    const navigation=useNavigation();
  return (
    // Menu bottem
    <View style={styles.menuContainer}>
    <TouchableOpacity
    style={styles.buttonStyle}
    onPress={()=>navigation.navigate('Post')}>
      <View style={{alignItems:"center"}}>
         <Image source={require("../../assets/plus_icon_blue.png")}/>
        <Text style={{color:colors.primary,fontSize:8,fontWeight:"500"}}>Create</Text>
      </View>
       
    </TouchableOpacity>

    <TouchableOpacity
    style={styles.buttonStyle}
    onPress={()=>navigation.navigate("Rides")}>
      <View style={{alignItems:"center"}}>
       <Image source={require("../../assets/Glyph.png")}/>
       <Text style={{fontSize:8,color:"#DFDEDE",fontWeight:"500"}}>My Request</Text>
       </View>
    </TouchableOpacity>
    </View>
  )
}

export default CustomMenu;

const styles = StyleSheet.create({
  menuContainer:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly",
    paddingTop:15
   
   
    
    
    
  }
   
})