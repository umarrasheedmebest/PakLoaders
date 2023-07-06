import React,{useEffect} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import { colors } from '../../globalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { cancelRidesRequest, ongoingRidesRequest } from '../../Redux/slices/RidesSlice';
import { useNavigation } from '@react-navigation/native';

const CancelRideComponent = ({ }) => {
  const navvigation=useNavigation();
  const completeData=useSelector((state)=>state.rides.cancelRidesRequest)
  const cancelledResponseData=useSelector((state)=>state.rides.cancelRidesResponse)
  console.log(cancelledResponseData)
  const dispatch=useDispatch();
    useEffect(() => {
      dispatch(cancelRidesRequest('cancelled'))
    }, [])
    const itemRender=(item)=>{
      console.log(item)
  return(
    <View style={styles.container}>
    <Text style={styles.dayStyle}>Today</Text>
    
    <View style={styles.pickContainer}>
      <TouchableOpacity style={{alignSelf:"flex-end",paddingHorizontal:15,}}>
        <Text style={{fontSize:8,fontWeight:"500",color:"#F44336",}}>cancelled</Text>
      </TouchableOpacity>
      
      <View style={styles.pickContinue}>
      <View style={styles.smallContainer}>
          <Image style={{width:31.23,height:28,marginRight:15}} source={require('../../assets/inprogress.png')}/>
          <View>
              <Text>Trip Id</Text>
              <Text>23635</Text>
              </View>
      </View>
      <View style={{borderLeftWidth:1,height:42,borderColor:"#CCCCCC"}}></View>
      {/* 2nd number */}
      <View style={styles.smallContainer}>
         
          <View style={{alignItems:"center"}}>
              <Text>Pick up</Text>
              <Text>Rawalpindi</Text>
              </View>
      </View>
      <View style={{borderLeftWidth:1,height:42,borderColor:"#CCCCCC"}}></View>
      {/* 3nd number */}
      <View style={styles.smallContainer}>
          
          <View style={{alignItems:"center"}}>
              <Text>Drop off</Text>
              <Text>Islamabad</Text>
              </View>
              </View>
      </View>
      
    </View>
    
  </View>
  )
  }
    return (
        <SafeAreaView style={{flex:1,backgroundColor:colors.white,alignItems:'center'}}>
         
         {cancelledResponseData.length==0?<Text>Not Data found</Text>:  <FlatList
       data={cancelledResponseData}
       keyExtractor={(item)=>item.id}
       renderItem={({item})=>itemRender(item)}
       />}
       
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

export default CancelRideComponent;
