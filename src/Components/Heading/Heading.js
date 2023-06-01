import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Heading = ({
    onPress,
    type,
    text
}) => {
  return (
    <View style={styles[`text_${type}`]}>
      <Text style={styles.heading} onPress={onPress}>{text}</Text>
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({
    heading:{
        fontSize:24,
        alignSelf:"center",
        color:"#4448FF",
        fontWeight:"700",
        fontFamily:"Poppins-SemiBold.ttf",
        marginTop:30, 
        letterSpacing:1,
    },
    text_primary:{
        
        alignSelf:"flex-start",
        
    },
    text_secondary:{
        alignSelf:"flex-end",
       
    }
})