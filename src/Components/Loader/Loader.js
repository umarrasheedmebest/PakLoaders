import { ActivityIndicator, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import {colors} from '../../globalStyle';
const Loader = ({visible=false}) => {
    const {height,width}=useWindowDimensions();
  return (
    visible && (
        <View style={[styles.container,{height,width}]}>
            <View style={styles.loader}>
                < ActivityIndicator size="large" color={colors.text}/>
                <Text style={{marginRight:10,fontSize:16}}>Loading...</Text>
            </View>
        </View>
    )
  );
}

export default Loader

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        zIndex:10,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
    },
    loader:{
        height:70,
        backgroundColor:colors.white,
        marginHorizontal:50,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:20,
    }
})