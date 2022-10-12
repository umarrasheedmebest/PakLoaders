import React, {useState} from 'react';
import CustomBackground from '../../Components/CustomBackground';
import { colors } from '../../globalStyle';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    
} from 'react-native';

 
const RateComponent = ({
    sideBar
}) => { 
 
    return (
        
            <SafeAreaView style={styles.container}>
              {/* Background Image */}
                 <CustomBackground/>
                 {/* Background Image */}
                <Text>Rate</Text>
                
               
          
         </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       alignItems:"center",
       justifyContent:"center",
    },
   
     
});


export default RateComponent;
