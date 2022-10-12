import React, {useState} from 'react';
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
 
const RidesComponent = ({
    sideBar
}) => { 
 
    return (
        
           <CustomHeader
           text={'Rides'}
           Chatprofile={true}
           ContentView={
            <>
            <View style={{alignItems:"center"}}>
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>Ongoing</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>Upcoming</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>Completed</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>Cancelled</Text>
                </TouchableOpacity>
            </View>
            <RideList
           

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
