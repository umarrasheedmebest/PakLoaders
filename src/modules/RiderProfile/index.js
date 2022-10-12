import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    ImageBackground,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {colors} from '../../globalStyle';
const RiderProfileComponent = ({ }) => {
    return (
        <SafeAreaView style={styles.container}>
           <ImageBackground style={{width:"100%",height:"100%",}} resizeMode={'stretch'} source={require('../../assets/RiderProfileBack.png')}>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                <View style={{width:"100%",alignItems:"center"}}>
                    <View style={{width:78,height:78,alignItems:"center",justifyContent:"center",borderWidth:1,borderRadius:100,borderColor:"#67A5FF",position:"relative"}}>
                    <Image style={{width:65,height:65}} source={require('../../assets/HashimProfile.png')}/>
                    <Image style={{position:"absolute",bottom:0,right:12}} source={require('../../assets/activeProfile.png')}/>
                    </View>
                    <Text style={{fontSize:16,fontWeight:"400",color:colors.text,marginVertical:5}}>Ali Khan</Text>
                    <View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={require('../../assets/stars1.png')}/>
                        <Text style={{fontSize:12,fontWeight:"400",color:colors.dot}}> 4.5 of 5 (3537)</Text>
                        </View>
                       
                    </View> 
                    <View style={{width:"100%",alignSelf:"flex-start",marginVertical:20}}>
                            <Text style={{fontSize:14,color:colors.text,}}>Please share your experience with us</Text>
                        </View>
                        <View>
                            <Image source={require('../../assets/stars2.png')}/>
                        </View>
                         {/* Description */}
                    <View style={[styles.EmailContainer,{
                      
                      alignItems:"flex-start",
                      
                    }]}>
                       
                        
                        <View>
                            <TextInput style={styles.inputStyle} 
                            multiline={true}
                            placeholder='Write your feedback'
                            placeholderTextColor={"#5A5A5A"}
                            keyboardType={'default'}
                            textAlignVertical={'top'}
                            
                            />
                        </View>
                        
                    </View>
                    {/* Description */}
                    <View>
                        <TouchableOpacity>
                            <View
                            style={{width:166,height:48,backgroundColor:colors.primary,alignItems:"center",justifyContent:"center",
                            borderRadius:7,marginVertical:15,
                        }}
                            >
                                <Text style={{fontSize:20,color:"#fff"}}>Close</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </View>
           </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'rgba(0,0,0,0.8)',
        alignItems:"center",
        justifyContent:"center"
    },
    subContainer:{
        width:329,
        height:467,
        backgroundColor:'#fff',
        shadowColor:"#6C35EE",
        elevation:4,
        borderRadius:7,
        padding:10,
        alignItems:"center"
    },
    EmailContainer:{
        width:303,
        height:82,
        flexDirection:"row",
        alignItems:"center",
        borderRadius:10,
        backgroundColor:"white",
        shadowColor:"#007BFE",
        elevation:10,
        paddingHorizontal:10,
        marginVertical:10,
        marginVertical:40,
      },
      inputStyle:{
        width:303,
        height:82,
        
        marginLeft:10,
      },
      buttonContainer:{
        width:"100%",
        alignItems:"center",
      }
});

export default RiderProfileComponent;
