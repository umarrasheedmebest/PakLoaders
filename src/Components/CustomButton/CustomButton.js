import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const CustomButton = ({
    onPress,
    text,
    type
}) => {
  return (
    <TouchableOpacity style={[styles[`container_${type}`]]} onPress={onPress}>
      <Text style={[styles[`text_${type}`]]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

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