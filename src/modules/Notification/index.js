import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import CustomHeader from '../../Components/CustomHeader';
import { colors } from '../../globalStyle';

const NotificationComponent = ({ }) => {
    return (
        <CustomHeader
        text={'Notifications'}
        ContentView={
            <View>
            <View style={{marginBottom:20,}}>
                <View style={{alignItems:"center",height:66,justifyContent:"center"}}>
                <View style={styles.container}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                    {/* Profile */}
                    <View style={{position:"relative", width:52,height:52}}>
                    <Image style={{width:52,height:52}} source={require('../../assets/notiProfile.png')}/>
                    <Image style={{width:18,height:18,position:"absolute",right:0,bottom:0}} source={require('../../assets/notiFlag.png')}/></View>
                    {/* Profile */}
                    {/* Text */}
                    <View style={styles.text}>
                    <Text style={{fontSize:12,fontFamily:"Poppins-Regular",fontWeight:"400",color:colors.text}}>Upcoming Trip</Text>
                    <Text style={{fontSize:10,lineHeight:15,fontFamily:"Poppins-Regular",fontWeight:"400",color:colors.text}}>
                    Your Trip is going to begin in 10 mins
                    </Text>
                    </View>
                    {/* Text */}
                    </View>
                    <View style={{alignSelf:"flex-start"}}>
                        <Text style={{fontSize:10,fontWeight:"400",fontFamily:"Poppins-Regular",
                    color:"#A5A5A5"}}>Just Now</Text>
                   <TouchableOpacity>
                    <Image style={{width:14,height:4,alignSelf:"flex-end",marginTop:5}} source={require('../../assets/dotBlack.png')}/>
                   </TouchableOpacity>
                    
                    </View>
                </View>
            </View>
            </View>

            <View style={{marginBottom:20,}}>
                <View style={{alignItems:"center",height:66,justifyContent:"center"}}>
                <View style={styles.container}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                    {/* Profile */}
                    <View style={{position:"relative", width:52,height:52}}>
                    <Image style={{width:52,height:52}} source={require('../../assets/secondProfile.png')}/>
                    <Image style={{width:18,height:18,position:"absolute",right:0,bottom:0}} source={require('../../assets/alert.png')}/></View>
                    {/* Profile */}
                    {/* Text */}
                    <View style={styles.text}>
                    <Text style={{fontSize:12,fontFamily:"Poppins-Regular",fontWeight:"400",color:colors.text}}>Nauman Ahmed</Text>
                    <Text style={{fontSize:10,lineHeight:15,fontFamily:"Poppins-Regular",fontWeight:"400",color:colors.text}}>
                    Sent you bid proposal
                    </Text>
                    </View>
                    {/* Text */}
                    </View>
                    <View style={{alignSelf:"flex-start"}}>
                        <Text style={{fontSize:10,fontWeight:"400",fontFamily:"Poppins-Regular",
                    color:"#A5A5A5"}}>02:06 am</Text>
                   <TouchableOpacity>
                    <Image style={{width:14,height:4,alignSelf:"flex-end",marginTop:5}} source={require('../../assets/dotBlack.png')}/>
                   </TouchableOpacity>
                    
                    </View>
                </View>
            </View>
            </View>
            {/* Yesterday Notification */}
            <View>
                <Text style={{fontSize:13,fontWeight:"700",color:colors.text,marginLeft:10}}>Yesterday</Text>
            </View>
             {/* Yesterday Notification */}
             <View style={{marginVertical:10,}}>
                <View style={{alignItems:"center",height:66,justifyContent:"center"}}>
                <View style={styles.container}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                    {/* Profile */}
                    <View style={{position:"relative", width:52,height:52}}>
                    <Image style={{width:52,height:52}} source={require('../../assets/thirdProfile.png')}/>
                    <Image style={{width:18,height:18,position:"absolute",right:0,bottom:0}} source={require('../../assets/alert.png')}/></View>
                    {/* Profile */}
                    {/* Text */}
                    <View style={styles.text}>
                    <Text style={{fontSize:12,fontFamily:"Poppins-Regular",fontWeight:"400",color:colors.text}}>Wasif Sheikh</Text>
                    <Text style={{fontSize:10,lineHeight:15,fontFamily:"Poppins-Regular",fontWeight:"400",color:colors.text}}>
                    Sent you a bid proposal
                    </Text>
                    </View>
                    {/* Text */}
                    </View>
                    <View style={{alignSelf:"flex-start"}}>
                        <Text style={{fontSize:10,fontWeight:"400",fontFamily:"Poppins-Regular",
                    color:"#A5A5A5"}}>11:45 am</Text>
                   <TouchableOpacity>
                    <Image style={{width:14,height:4,alignSelf:"flex-end",marginTop:5}} source={require('../../assets/dotBlack.png')}/>
                   </TouchableOpacity>
                    
                    </View>
                </View>
            </View>
            </View>
            <View style={{marginVertical:10,}}>
                <View style={{alignItems:"center",height:66,justifyContent:"center"}}>
                <View style={styles.container}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                    {/* Profile */}
                    <View style={{position:"relative", width:52,height:52}}>
                    <Image style={{width:52,height:52}} source={require('../../assets/forthProfile.png')}/>
                    <Image style={{width:18,height:18,position:"absolute",right:0,bottom:0}} source={require('../../assets/notiFlag.png')}/></View>
                    {/* Profile */}
                    {/* Text */}
                    <View style={styles.text}>
                    <Text style={{fontSize:12,fontFamily:"Poppins-Regular",fontWeight:"400",color:colors.text}}>Upcoming Trip</Text>
                    <Text style={{fontSize:10,lineHeight:15,fontFamily:"Poppins-Regular",fontWeight:"400",color:colors.text}}>
                    Your Trip is going to begin in 10 mins
                    </Text>
                    </View>
                    {/* Text */}
                    </View>
                    <View style={{alignSelf:"flex-start"}}>
                        <Text style={{fontSize:10,fontWeight:"400",fontFamily:"Poppins-Regular",
                    color:"#A5A5A5"}}>02:33 pm</Text>
                   <TouchableOpacity>
                    <Image style={{width:14,height:4,alignSelf:"flex-end",marginTop:5}} source={require('../../assets/dotBlack.png')}/>
                   </TouchableOpacity>
                    
                    </View>
                </View>
            </View>
            </View>
             {/* Date Notification */}
             <View>
                <Text style={{fontSize:13,fontWeight:"700",color:colors.text,marginLeft:10}}>15/08/2021</Text>
            </View>
             {/* Date Notification */}
             <View style={{marginVertical:10,}}>
                <View style={{alignItems:"center",height:66,justifyContent:"center"}}>
                <View style={styles.container}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                    {/* Profile */}
                    <View style={{position:"relative", width:52,height:52}}>
                    <Image style={{width:52,height:52}} source={require('../../assets/fifthProfile.png')}/>
                    <Image style={{width:18,height:18,position:"absolute",right:0,bottom:0}} source={require('../../assets/alert.png')}/></View>
                    {/* Profile */}
                    {/* Text */}
                    <View style={styles.text}>
                    <Text style={{fontSize:12,fontFamily:"Poppins-Regular",fontWeight:"400",color:colors.text}}>Muhammad Jabir</Text>
                    <Text style={{fontSize:10,lineHeight:15,fontFamily:"Poppins-Regular",fontWeight:"400",color:colors.text}}>
                    sent you a bid proposal
                    </Text>
                    </View>
                    {/* Text */}
                    </View>
                    <View style={{alignSelf:"flex-start"}}>
                        <Text style={{fontSize:10,fontWeight:"400",fontFamily:"Poppins-Regular",
                    color:"#A5A5A5"}}>02:45 pm</Text>
                   <TouchableOpacity>
                    <Image style={{width:14,height:4,alignSelf:"flex-end",marginTop:5}} source={require('../../assets/dotBlack.png')}/>
                   </TouchableOpacity>
                    
                    </View>
                </View>
            </View>
            </View>
            <View style={{marginVertical:10,}}>
                <View style={{alignItems:"center",height:66,justifyContent:"center"}}>
                <View style={styles.container}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                    {/* Profile */}
                    <View style={{position:"relative", width:52,height:52}}>
                    <Image style={{width:52,height:52}} source={require('../../assets/sixProfile.png')}/>
                    <Image style={{width:18,height:18,position:"absolute",right:0,bottom:0}} source={require('../../assets/alert.png')}/></View>
                    {/* Profile */}
                    {/* Text */}
                    <View style={styles.text}>
                    <Text style={{fontSize:12,fontFamily:"Poppins-Regular",fontWeight:"400",color:colors.text}}>Asif Mehmood</Text>
                    <Text style={{fontSize:10,lineHeight:15,fontFamily:"Poppins-Regular",fontWeight:"400",color:colors.text}}>
                    sent you a bid proposal
                    </Text>
                    </View>
                    {/* Text */}
                    </View>
                    <View style={{alignSelf:"flex-start"}}>
                        <Text style={{fontSize:10,fontWeight:"400",fontFamily:"Poppins-Regular",
                    color:"#A5A5A5"}}>04:15pm</Text>
                   <TouchableOpacity>
                    <Image style={{width:14,height:4,alignSelf:"flex-end",marginTop:5}} source={require('../../assets/dotBlack.png')}/>
                   </TouchableOpacity>
                    
                    </View>
                </View>
            </View>
            </View>
            </View>
           
            
            
        }
        />
    );
};

const styles = StyleSheet.create({
    container: {
        width:"95%",
        height:64,
        borderRadius:7,
        shadowColor:"#007BFE",
        backgroundColor:"#fff",
        borderColor:colors.text,
        padding:5,
        elevation:6,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:10,
        paddingVertical:6,
    },
    text:{
        marginLeft:15,
    }
});

export default NotificationComponent;
