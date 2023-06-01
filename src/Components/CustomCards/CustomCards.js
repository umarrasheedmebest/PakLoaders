import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image } from 'react-native'
import React from 'react'


const CustomCards = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}
    horizontal={true}
    
    
    
    >
        <View style={{alignItems:"center",flexDirection:"row"}}>
        <TouchableOpacity >
            <Image style={[styles.cardImage,{width:228,height:140}]} source={require('../../assets/cards.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image  style={[styles.cardImage,{marginHorizontal:20}]} source={require('../../assets/cards.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={[styles.cardImage,{width:228,height:140}]} source={require('../../assets/cards.png')}/>
        </TouchableOpacity></View>
    </ScrollView>
  )
}

export default CustomCards

const styles = StyleSheet.create({
    cardImage:{
        width:293,height:178,
    }
})