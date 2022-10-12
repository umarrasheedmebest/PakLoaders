import React, {useState} from 'react';
import CustomBackground from '../../Components/CustomBackground';
import { colors } from '../../globalStyle';
import { useNavigation } from '@react-navigation/native';

import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,

    
} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';

 
const PaymentComponent = ({
    sideBar
}) => { 
 const navigation=useNavigation();
    return (
        
           <CustomHeader
           postFlat={true}
           Chatprofile={true}
           text={'Payment Method'}
           ContentView={
            <View style={{alignItems:"center"}}>
            <View style={styles.container}>
                {/* Fist Line */}
                <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:6}}>

                
                <View style={{flexDirection:"row"}}>
                    <Text style={{fontSize:12,fontWeight:"500",color:colors.primary,marginRight:10}}>Essential</Text>
                    <Text style={{fontSize:12,fontWeight:"500",color:colors.primary}}>4 Features</Text>
                </View>
                <View>
                    <Text style={{fontSize:8,fontWeight:"400",color:colors.primary,
                textDecorationLine:'underline',
                }}>View Details</Text>
                </View>
                </View>
                {/* Fist Line */}
                {/* Heading */}
                <View style={{marginBottom:5}}>
                    <Text style={{fontSize:18,fontWeight:"500",color:colors.primary,fontFamily:"Poppins_Medium"}}>Unlock 4 Powerful Features</Text>
                </View>
                {/* Heading */}
                {/* 3rd Line */}
                <View style={{marginBottom:10,flexDirection:"row",}}>
                    <Image style={{width:18,height:24,marginRight:7}} source={require('../../assets/tag.png')}/>
                    <View>
                    <Text style={{fontSize:14,fontWeight:"500",fontFamily:"Poppins-Medium",color:colors.text,marginBottom:5}}>Unlimited Load Views</Text>
                    <Text style={{fontSize:10,color:"#A5A5A5",fontWeight:"300",fontFamily:"Poppins-Light",lineHeight:16,letterSpacing:1}}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum {'\n'}
lorem Lorem ipsum lorem ipsum lorem ipsum ....</Text>
                    </View>
                </View>
                {/*3rd Line  */}
                {/* Annual Plan */}
                <View style={{width:"100%",alignItems:"center"}}>

                
                <View style={styles.subConatiner}>
                <Text style={{fontSize:16,fontWeight:"500",fontFamily:"Poppins-Medium",color:colors.primary}}>Annual Plan</Text>
                <View>
                    <View style={{flexDirection:"row",alignItems:"center"}}><Text style={{fontSize:16,color:colors.primary,fontFamily:"Poppins-Medium"}}>16.67</Text>
                    <Text style={{fontSize:12,color:colors.primary,fontFamily:"Poppins-Regular"}}> USD/month</Text></View>
                    
                    <Text style={{fontSize:12,color:colors.primary,fontFamily:"Poppins-Regular"}}>&199.99 Billed Annually</Text>
                </View>
                </View>
                </View>
                {/* Anual Plan */}

            </View>
            {/* Debit Cards */}
            <View style={styles.CardsContainer}>
                {/* Credit Card */}
                <TouchableOpacity onPress={()=>navigation.navigate('DebitCard')}>
                     
                    <View style={{width:329,height:52,backgroundColor:"#EDEDED",borderRadius:7,
                    flexDirection:"row",
                    alignItems:"center",justifyContent:"space-between",
                    paddingHorizontal:20,marginBottom:15,}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image style={{width:28,height:28.38}} source={require('../../assets/ceditcard_icon_mywallet.png')}/>
                    <Text style={{fontSize:15,color:colors.text,marginLeft:20}}>Credit / Debit Card</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/arrow-back2.png')}/>
                    </View>
                    </View>
                </TouchableOpacity>
                {/* Credit Card */}
                {/* Easypaisa Card */}
                <TouchableOpacity>
                     
                    <View style={{width:329,height:52,backgroundColor:"#EDEDED",borderRadius:7,
                    flexDirection:"row",
                    alignItems:"center",justifyContent:"space-between",
                    paddingHorizontal:20,marginBottom:15,}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image style={{width:26,height:27.84}} source={require('../../assets/easypaisa.png')}/>
                    <Text style={{fontSize:15,color:colors.text,marginLeft:24}}>Easypaisa</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/arrow-back2.png')}/>
                    </View>
                    </View>
                </TouchableOpacity>
                {/* Easypaisa Card */}
                {/* Jazzcash Card */}
                <TouchableOpacity>
                     
                    <View style={{width:329,height:52,backgroundColor:"#EDEDED",borderRadius:7,
                    flexDirection:"row",
                    alignItems:"center",justifyContent:"space-between",
                    paddingHorizontal:20,marginBottom:15,}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image style={{width:42,height:23.78}} source={require('../../assets/jazzcash_icon_mywallet.png')}/>
                    <Text style={{fontSize:15,color:colors.text,marginLeft:10}}>Jazzcash</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/arrow-back2.png')}/>
                    </View>
                    </View>
                </TouchableOpacity>
                {/* JazzCash Card */}
                {/* BankAccount Card */}
                <TouchableOpacity>
                     
                    <View style={{width:329,height:52,backgroundColor:"#EDEDED",borderRadius:7,
                    flexDirection:"row",
                    alignItems:"center",justifyContent:"space-between",
                    paddingHorizontal:20,marginBottom:15,}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image style={{width:42,height:31.46}} source={require('../../assets/image-removebg-preview.png')}/>
                    <Text style={{fontSize:15,color:colors.text,marginLeft:12}}>Bank Account</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/arrow-back2.png')}/>
                    </View>
                    </View>
                </TouchableOpacity>
                {/* Credit Card */}

            </View>
            {/* Debit Cards */}

            </View>
           }
           />
        
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
       shadowColor:"#007BFE",
       width:329,
       height:216,
       elevation:4,
       borderRadius:15,
       paddingVertical:10,
        paddingLeft:8,
        
    },
    subConatiner:{
        width:289,
        height:67,
        backgroundColor:"#D9DAFF",
        borderRadius:7,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:15
    },
    CardsContainer:{
      marginVertical:15,  
    }
   
     
});


export default PaymentComponent;
