import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../globalStyle'
const CustomContainer = ({
    vari,
    primary
}) => {
  return (
    <View style={{alignItems:"center",}}>
    <View style={styles.container}>
        {/* Fist Line */}
        <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:6}}>

        
        <View style={{flexDirection:"row"}}>
            <Text style={{fontSize:12,fontWeight:"500",color:colors.primary,marginRight:10}}>Essential</Text>
            <Text style={{fontSize:12,fontWeight:"500",color:colors.primary}}>4 Features</Text>
        </View>
        <View>
            <Text style={{fontSize:8,fontWeight:"400",color:colors.primary,
        textDecorationLine:'underline',
        }}>View Details</Text>
        </View>
        </View>
        {/* Fist Line */}
        {/* Heading */}
        <View style={{marginBottom:5}}>
            <Text style={{fontSize:18,fontWeight:"500",color:colors.primary,fontFamily:"Poppins_Medium"}}>Unlock 4 Powerful Features</Text>
        </View>
        {/* Heading */}
        {/* 3rd Line */}
        <View style={{marginBottom:10,flexDirection:"row",}}>
            <Image style={{width:18,height:24,marginRight:7}} source={require('../../assets/tag.png')}/>
            <View>
            <Text style={{fontSize:14,fontWeight:"500",fontFamily:"Poppins-Medium",color:colors.text,marginBottom:5}}>Unlimited Load Views</Text>
            <Text style={{fontSize:10,color:"#A5A5A5",fontWeight:"300",fontFamily:"Poppins-Light",lineHeight:16,letterSpacing:1}}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum {'\n'}
lorem Lorem ipsum lorem ipsum lorem ipsum ....</Text>
            </View>
        </View>
        {/*3rd Line  */}
        {/* Annual Plan */}
        <View style={{width:"100%",alignItems:"center"}}>

        
        <View style={styles.subConatiner}>
        <Text style={{fontSize:16,fontWeight:"500",fontFamily:"Poppins-Medium",color:colors.primary}}>Annual Plan</Text>
        <View>
            <View style={{flexDirection:"row",alignItems:"center"}}><Text style={{fontSize:16,color:primary,fontFamily:"Poppins-Medium"}}>16.67</Text>
            <Text style={{fontSize:12,color:vari,fontFamily:"Poppins-Regular"}}> USD/month</Text></View>
            
            <Text style={{fontSize:12,color:vari,fontFamily:"Poppins-Regular"}}>&199.99 Billed Annually</Text>
        </View>
        </View>
        </View>
        {/* Anual Plan */}

    </View></View>
  )
}

export default CustomContainer

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
       shadowColor:"#007BFE",
       width:329,
       height:216,
       elevation:4,
       borderRadius:15,
       paddingVertical:10,
        paddingLeft:8,
        marginVertical:2
        
    },
    subConatiner:{
        width:289,
        height:67,
        backgroundColor:"#D9DAFF",
        borderRadius:7,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:15
    },
    CardsContainer:{
      marginVertical:15,  
    }
})