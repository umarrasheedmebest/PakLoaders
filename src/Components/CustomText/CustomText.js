import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomText = ({
    text,
    link,
    onPress,
    marginVertical,
    type
}) => {
  return (
    
      <View><Text style={[styles[`${type}`]]}>{text}<TouchableOpacity style={{}} onPress={onPress}><Text style={styles.text }>{link}</Text></TouchableOpacity></Text>
    </View>
    
  )
}

export default CustomText

const styles = StyleSheet.create({
    text:{
        color:"#4448FF",
        fontSize:14,
        fontWeight:"500",
        marginLeft:5,
        marginTop:5,
        letterSpacing:1,
    },
    primary:{
     fontSize:18,
    
     marginVertical:15,
     marginTop:30,
     fontFamily:"Poppins-Light.ttf",
     textAlign:"center",
      
    },
    scondary:{
      textAlign:"left",
    }

})