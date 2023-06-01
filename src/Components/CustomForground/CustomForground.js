import { StyleSheet,
    Text,
    View,
    useWindowDimensions,
    Image,
    } from 'react-native'
import React from 'react'

const CustomForground = ({
    source
}) => {
    
  return (
    <View>
    <Image style={[styles.iconImage]} source={source}/>
    </View>
  )
}

export default CustomForground

const styles = StyleSheet.create({
    iconImage:{
        
        minWidth:125,
        minHeight:125,
       marginBottom:15,
       marginTop:15,
       
      }

})