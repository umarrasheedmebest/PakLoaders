import React, {useState} from 'react';
import CustomBackground from '../../Components/CustomBackground';
import { colors } from '../../globalStyle';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,
    
} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';

 
const ShareComponent = ({
    sideBar
}) => { 
 
    return (
        
            <SafeAreaView style={styles.container}>
              {/* Background Image */}
                 <CustomBackground/>
                 {/* Background Image */}
                <CustomHeader
                text={'Share'}
                ContentView={
                    <View style={{marginTop:10,marginBottom:20,alignItems:"center",justifyContent:"center"}}>
                    <View style={{width:"100%",height:"100%",justifyContent:"space-between",alignItems:"center"}}>
                      <Text style={{fontSize:24,fontWeight:"900",fontFamily:"MontserratAlternates-Medium",color:"#5A5A5A",textTransform:"uppercase"}}>Connect us at</Text>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <TouchableOpacity><Image style={styles.imageStyle} source={require('../../assets/fb.png')}/></TouchableOpacity>
                        <TouchableOpacity><Image style={[styles.imageStyle,{marginHorizontal:10,}]} source={require('../../assets/insta.png')}/></TouchableOpacity>
                        <TouchableOpacity><Image style={styles.imageStyle} source={require('../../assets/twiter.png')}/></TouchableOpacity>

                      
                      
                      
            
                    </View> 
                    </View>
                    </View>
                }
                />
                
               
          
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
    imageStyle:{
        width:50,
        height:50
    }
   
     
});


export default ShareComponent;
