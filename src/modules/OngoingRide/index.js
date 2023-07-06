import React,{useEffect} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    FlatList
} from 'react-native';
import { colors } from '../../globalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { ongoingRidesRequest } from '../../Redux/slices/RidesSlice';
import Loader from '../../Components/Loader/Loader';
import { useNavigation } from '@react-navigation/native';

const OngoingRideComponent = () => {
    const ongoingData=useSelector((state)=>state.rides.ongoingRidesRequest)
    const ongoingResponseData=useSelector((state)=>state.rides.ongoingRidesResponse)
    const navigation=useNavigation();
    console.log(ongoingData+ongoingResponseData)
    const dispatch=useDispatch();
    useEffect(() => {
      dispatch(ongoingRidesRequest('ongoing'))
    }, [])
    const itemRender=(item)=>{
        console.log(item)
    return(
<View style={styles.container}>
       {/* <Text style={styles.dayStyle}>Today</Text> */}
       
       <View style={styles.pickContainer}>
         <TouchableOpacity style={{alignSelf:"flex-end",paddingHorizontal:15,}} onPress={()=>navigation.navigate('Maps')}>
           <Text style={{fontSize:8,fontWeight:"500",color:colors.primary,textDecorationLine:"underline"}}>View details</Text>
         </TouchableOpacity>
         
         <View style={styles.pickContinue}>
         <View style={styles.smallContainer}>
             <Image style={{width:31.23,height:28,marginRight:15}} source={require('../../assets/inprogress.png')}/>
             <View>
                 <Text>Trip Id</Text>
                 <Text>{item.bid_id}</Text>
                 </View>
         </View>
         <View style={{borderLeftWidth:1,height:42,borderColor:"#CCCCCC"}}></View>
         {/* 2nd number */}
         <View style={styles.smallContainer}>
            
             <View style={{alignItems:"center"}}>
                 <Text>Pick up</Text>
                 <Text>{item.pickup_address}</Text>
                 </View>
         </View>
         <View style={{borderLeftWidth:1,height:42,borderColor:"#CCCCCC"}}></View>
         {/* 3nd number */}
         <View style={styles.smallContainer}>
             
             <View style={{alignItems:"center"}}>
                 <Text>Drop off</Text>
                 <Text>{item.dropoff_address}</Text>
                 </View>
                 </View>
         </View>
         
       </View>
       
       </View>
    )
    }
    return (
        <SafeAreaView style={{flex:1,backgroundColor:colors.white,alignItems:'center'}}>
       {  ongoingData  &&<ActivityIndicator  color={colors.primary}/>}
      {ongoingResponseData.length > 0? <FlatList
       data={ongoingResponseData}
       keyExtractor={(item)=>item.id}
       renderItem={({item})=>itemRender(item)}
       />:<Text>Not Data Found</Text>
    }

{/* Today Rides */}
</SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
    
        alignSelf:"flex-start",
        marginVertical:5,
        marginHorizontal:12,
        
    },
    dayStyle:{
        fontSize:13,
        fontWeight:"700",
        color:colors.text,
        marginLeft:10
    },
    pickContainer:{
        width:329,
        height:70,
        borderRadius:10,
        shadowColor:"#007BFE",
        backgroundColor:"#fff",
        elevation:4,
       marginBottom:10,
       
        
    },
    pickContinue:{
    flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:15,
    },
    smallContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    
    },
    pickheading:{
        fontSize:12,
        fontWeight:"500",
        color:colors.text,
    }
});

export default OngoingRideComponent;
