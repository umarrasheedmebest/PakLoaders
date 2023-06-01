import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../globalStyle'
import { useNavigation } from '@react-navigation/native'
useNavigation;

const CustomRides = ({
    detail,
    clarck
}) => {
    const navigation=useNavigation();
  return (
    clarck?
    <View style={styles.subContainer}>
        <View style={{width:"100%",alignItems:"center",marginBottom:15}}>
            <Text style={{fontSize:21,fontWeight:"400",color:colors.primary}}>Trip details</Text>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
     <View style={styles.imgContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('RiderProfile')}>
        <Image style={{width:61,height:61}} source={require('../../assets/HashimProfile.png')}/></TouchableOpacity>
        <View style={{marginLeft:20}} >
            <Text style={{color:colors.primary,fontSize:16,fontWeight:"400"}}>Asif Ali</Text>
            <View style={styles.imgContainer}>
                <Image source={require('../../assets/Stars.png')}/>
                <Text style={{fontSize:16,color:colors.dot,marginLeft:5}}>3.8</Text>
            </View>
            
        
     </View>
     </View>
     <View style={styles.imgContainer}>
                <Image source={require('../../assets/chat_icon_popup.png')}/>
                <Image style={{marginLeft:5}} source={require('../../assets/call_icon_popup.png')}/>
            </View>
    </View>
    <View style={{alignItems:"center",justifyContent:"space-evenly",flexDirection:"row",marginVertical:15}}>
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:12,color:colors.text}}>Pick up</Text>
            <Text style={{fontSize:12,fontWeight:"300",}}>Rawalpindi</Text>
        </View>
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:12,color:colors.text}}>Drop off</Text>
            <Text style={{fontSize:12,fontWeight:"300",}}>Islamabad</Text>
        </View>
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:12,color:colors.text}}>Arrival Time</Text>
            <Text style={{fontSize:12,fontWeight:"300",}}>30:25 min</Text>
        </View>
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:12,color:colors.text}}>Vehicle No</Text>
            <Text style={{fontSize:12,fontWeight:"300",}}>RIL 2827</Text>
        </View>
    </View>
    <View style={{width:"100%",alignItems:"center",flexDirection:"row"}}>
        <Text style={{fontSize:16,fontWeight:"400",color:colors.text}}>Pick up date:</Text>
   <Text style={{fontSize:16,fontWeight:"300",color:colors.text}}>12-02-2022, 12:53 pm</Text>
    </View>
    <View style={{marginTop:20,marginBottom:5,flexDirection:"row"}}>
        <Image style={{width:32,height:212}} source={require('../../assets/riderIcon1.png')}/>
        <View style={{height:212,paddingVertical:7,justifyContent:"space-between",marginLeft:10}}>
            <Text style={styles.commonText}>Clarck pharmacy, 442 Rawalpindi</Text>
            <Text style={styles.commonText}>Clarck pharmacy, 442 Islamabad</Text>
            <Text style={styles.commonText}>Payment</Text>
            <Text style={styles.commonText}>Trip Completed</Text>

        </View>

    </View>
    <View style={{width:"100%",alignItems:"center",marginTop:20}}>
    <TouchableOpacity>
        <View  style={[styles.buttonStyle,{width:121,height:36}]}>
        <Text style={styles.buttonText}>Close</Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>
    :
    detail?
    // Contantent Profile
    <View style={styles.subContainer}>
        <View style={{width:"100%",alignItems:"center",marginBottom:15}}>
            <Text style={{fontSize:21,fontWeight:"400",color:colors.primary}}>Trip details</Text>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
     <View style={styles.imgContainer}>
        <Image style={{width:61,height:61}} source={require('../../assets/HashimProfile.png')}/>
        <View style={{marginLeft:20}} >
            <Text style={{color:colors.primary,fontSize:16,fontWeight:"400"}}>Asif Ali</Text>
            <View style={styles.imgContainer}>
                <Image source={require('../../assets/Stars.png')}/>
                <Text style={{fontSize:16,color:colors.dot,marginLeft:5}}>3.8</Text>
            </View>
            
        
     </View>
     </View>
     <View style={styles.imgContainer}>
                <Image source={require('../../assets/chat_icon_popup.png')}/>
                <Image style={{marginLeft:5}} source={require('../../assets/call_icon_popup.png')}/>
            </View>
    </View>
    <View style={{alignItems:"center",justifyContent:"space-evenly",flexDirection:"row",marginVertical:15}}>
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:12,color:colors.text}}>Pick up</Text>
            <Text style={{fontSize:12,fontWeight:"300",}}>Rawalpindi</Text>
        </View>
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:12,color:colors.text}}>Drop off</Text>
            <Text style={{fontSize:12,fontWeight:"300",}}>Islamabad</Text>
        </View>
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:12,color:colors.text}}>Arrival Time</Text>
            <Text style={{fontSize:12,fontWeight:"300",}}>30:25 min</Text>
        </View>
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:12,color:colors.text}}>Vehicle No</Text>
            <Text style={{fontSize:12,fontWeight:"300",}}>RIL 2827</Text>
        </View>
    </View>
    <View style={{width:"100%",alignItems:"center",flexDirection:"row"}}>
        <Text style={{fontSize:16,fontWeight:"400",color:colors.text}}>Pick up date:</Text>
   <Text style={{fontSize:16,fontWeight:"300",color:colors.text}}>12-02-2022, 12:53 pm</Text>
    </View>
    <View style={{marginTop:20,marginBottom:5,flexDirection:"row"}}>
        <Image style={{width:32,height:212}} source={require('../../assets/riderIcon.png')}/>
        <View style={{height:212,paddingVertical:7,justifyContent:"space-between",marginLeft:10}}>
            <Text style={styles.commonText}>Clarck pharmacy, 442 Rawalpindi</Text>
            <Text style={styles.commonText}>Clarck pharmacy, 442 Islamabad</Text>
            <Text style={styles.commonText}>Payment</Text>
            <Text style={styles.commonText}>Trip Completed</Text>

        </View>

    </View>
    <View style={{width:"100%",alignItems:"center",marginTop:20}}>
    <TouchableOpacity>
        <View  style={[styles.buttonStyle,{width:121,height:36}]}>
        <Text style={styles.buttonText}>Close</Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>
    :
    // contantent Profile
    <View style={styles.container}>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
     <View style={styles.imgContainer}>
        <Image style={{width:61,height:61}} source={require('../../assets/HashimProfile.png')}/>
        <View style={{marginLeft:20}} >
            <Text style={{color:colors.primary,fontSize:16,fontWeight:"400"}}>Asif Ali</Text>
            <View style={styles.imgContainer}>
                <Image source={require('../../assets/Stars.png')}/>
                <Text style={{fontSize:16,color:colors.dot,marginLeft:5}}>3.8</Text>
            </View>
            
        
     </View>
     </View>
     <View style={styles.imgContainer}>
                <Image source={require('../../assets/chat_icon_popup.png')}/>
                <Image style={{marginLeft:5}} source={require('../../assets/call_icon_popup.png')}/>
            </View>
    </View>
    <View style={{alignItems:"center",justifyContent:"space-evenly",flexDirection:"row",marginVertical:15}}>
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:12,color:colors.text}}>Pick up</Text>
            <Text style={{fontSize:12,fontWeight:"300",}}>Rawalpindi</Text>
        </View>
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:12,color:colors.text}}>Pick up</Text>
            <Text style={{fontSize:12,fontWeight:"300",}}>Rawalpindi</Text>
        </View>
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:12,color:colors.text}}>Pick up</Text>
            <Text style={{fontSize:12,fontWeight:"300",}}>Rawalpindi</Text>
        </View>
    </View>
    <View style={{width:"100%",alignItems:"center"}}>
    <TouchableOpacity>
        <View  style={styles.buttonStyle}>
        <Text style={styles.buttonText}>View Details</Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>
  )
}

export default CustomRides

const styles = StyleSheet.create({
    container:{
        width:353,
        height:182,
        backgroundColor:"#fff",
        borderRadius:10,
        paddingHorizontal:15,
        paddingVertical:10,
    },
    subContainer:{
        width:353,
        height:522,
        backgroundColor:"#fff",
        borderRadius:10,
        paddingHorizontal:15,
        paddingVertical:5,
    },
    imgContainer:{
        flexDirection:"row",
        alignItems:"center",
        
    },
    buttonStyle:{
        width:121,
        height:36,
        borderRadius:7,
        backgroundColor:colors.primary,
        alignItems:"center",
        justifyContent:"center"

    },
    buttonText:{
        fontSize:14,
        fontWeight:"400",
        color:"#fff",
    },
    commonText:{
        fontSize:16,
        fontWeight:"400",
        color:colors.text
    }
})