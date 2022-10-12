import { StyleSheet,
     Text, 
     View,
     ImageBackground,
    useWindowDimensions
    } from 'react-native'
import React from 'react'

const CustomBackground = ({
  CustomBackground
}) => {
    const defaultImage=require("../../assets/background.png");
    const bluebackground=require("../../assets/ChangeBack.png");
  
  return (
    <ImageBackground style={styles.headerImage} source={CustomBackground?bluebackground:defaultImage} />
  )
}

export default CustomBackground

const styles = StyleSheet.create({
    headerImage:{
        width:491,
        height:417,
        position:'absolute',
        top:-205,
        left:-15,
        rotation:-5,
      },
})