import React,{useEffect} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { colors } from '../../globalStyle';
import { useDispatch } from 'react-redux';
import { completeRidesRequest, } from '../../Redux/slices/RidesSlice';

const CompleteRideComponent = ({ }) => {
  
    const dispatch=useDispatch();
    useEffect(() => {
      dispatch(completeRidesRequest('completed'))
    }, [])
    return (
        <SafeAreaView style={{flex:1,backgroundColor:colors.white}}>

        {/* Today Rides */}
        <View style={styles.container}>
          <Text style={styles.dayStyle}>Today</Text>
          
          <View style={styles.pickContainer}>
            <TouchableOpacity style={{alignSelf:"flex-end",paddingHorizontal:15,}}>
              <Text style={{fontSize:8,fontWeight:"500",color:colors.primary,textDecorationLine:"underline"}}>View details</Text>
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
        {/* Today Rides */}
        {/* Yesterday Rides */}
        <View style={styles.container}>
          <Text style={styles.dayStyle}>Yesterday</Text>
          
          <View style={styles.pickContainer}>
            <TouchableOpacity style={{alignSelf:"flex-end",paddingHorizontal:15,}}>
              <Text style={{fontSize:8,fontWeight:"500",color:colors.primary,textDecorationLine:"underline"}}>View details</Text>
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
          <View style={styles.pickContainer}>
            <TouchableOpacity style={{alignSelf:"flex-end",paddingHorizontal:15,}}>
              <Text style={{fontSize:8,fontWeight:"500",color:colors.primary,textDecorationLine:"underline"}}>View details</Text>
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
        {/* Yesterday Rides */}
        {/* Date */}
        <View style={styles.container}>
          <Text style={styles.dayStyle}>20/08/2022</Text>
          
          <View style={styles.pickContainer}>
            <TouchableOpacity style={{alignSelf:"flex-end",paddingHorizontal:15,}}>
              <Text style={{fontSize:8,fontWeight:"500",color:colors.primary,textDecorationLine:"underline"}}>View details</Text>
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
        {/* Date */}
        {/* Date */}
        <View style={styles.container}>
          <Text style={styles.dayStyle}>15/08/2021</Text>
          
          <View style={styles.pickContainer}>
            <TouchableOpacity style={{alignSelf:"flex-end",paddingHorizontal:15,}}>
              <Text style={{fontSize:8,fontWeight:"500",color:colors.primary,textDecorationLine:"underline"}}>View details</Text>
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

export default CompleteRideComponent;
