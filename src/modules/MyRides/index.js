import React, {useState,useEffect} from 'react';
import CustomBackground from '../../Components/CustomBackground';
import { colors } from '../../globalStyle';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View
    
} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RideList from '../../Components/RideList';
import { useDispatch } from 'react-redux';
import { upcomingRidesRequest } from '../../Redux/slices/RidesSlice';
 
const RidesComponent = ({
    sideBar
}) => { 
    const dispatch=useDispatch();
 const [ongoing, setOngoing] = useState(false)
 const [upcoming, setUpcoming] = useState(false)
 const [complete, setComplete] = useState(false)
 const [cancell, setCancell] = useState(false)
 useEffect(() => {
   dispatch(upcomingRidesRequest())
 
   
 }, [])
 
    return (
        
           <CustomHeader
           text={'Rides'}
           Chatprofile={true}
           ContentView={
            <>
            <View style={{alignItems:"center"}}>
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                    setOngoing(true)
                    setUpcoming(false)
                    setComplete(false)
                    setCancell(false)
                }}>
                    <Text style={[styles.buttonText,ongoing&&{borderColor:"blue",
        paddingBottom:4,
        borderBottomWidth:3,
        color:"blue"}]}>Ongoing</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    setOngoing(false)
                    setUpcoming(true)
                    setComplete(false)
                    setCancell(false)
                }}>
                    <Text style={[styles.buttonText,upcoming&&{borderColor:"blue",
        paddingBottom:4,
        borderBottomWidth:3,
        color:"blue"}]}>Upcoming</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    setOngoing(false)
                    setUpcoming(false)
                    setComplete(true)
                    setCancell(false)
                }}
                >
                    <Text style={[styles.buttonText,complete&&{borderColor:"blue",
        paddingBottom:4,
        borderBottomWidth:3,
        color:"blue"}]}>Completed</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    setOngoing(false)
                    setUpcoming(false)
                    setComplete(false)
                    setCancell(true)
                }}
                >
                    <Text style={[styles.buttonText,cancell&&{borderColor:"blue",
        paddingBottom:4,
        borderBottomWidth:3,
        color:"blue"}]}>Cancelled</Text>
                </TouchableOpacity>
            </View>
            <RideList
           ongoning={ongoing}
           upcoming={upcoming}
           completed={complete}
           cancelled={cancell}

            />
            </View>
            </>
           }
           />
        
    );
};

const styles = StyleSheet.create({
    container: {
        width:329,
        height:37,
        borderRadius:7,
        shadowColor:"#007BFE",
       backgroundColor:"#fff",
       marginVertical:5,
        flexDirection:"row",
        elevation:6,
       alignItems:"center",
       justifyContent:"space-evenly",
    },
    buttonText:{
        fontSize:12,
        fontWeight:"700",
        color:colors.text,
        
    }
   
     
});


export default RidesComponent;
