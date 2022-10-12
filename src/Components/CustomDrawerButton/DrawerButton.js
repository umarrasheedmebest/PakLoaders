import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const DrawerButton = ({
    onPress,
    text,
    bgColor,
    source
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
          <View style={{flexDirection:"row",padding:5,paddingHorizontal:15,backgroundColor:bgColor, alignItems:"center",borderRadius:100,height:47,}}>
          <Image style={{width:34,height:34,}} source={source}/>
          <Text style={{marginLeft:20,}}>{text}</Text>
          </View>
          </TouchableOpacity>
  )
}

export default DrawerButton

const styles = StyleSheet.create({})