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
import { useSelector } from 'react-redux';
import {eng,Urdu} from '../../Components/Api/Language';
 
const EasyPaisaComponent = ({
    sideBar
}) => { 
 const navigation=useNavigation();
 const data=useSelector.language;
    return (
        
           <CustomHeader
           postFlat={true}
           
           text={'Easy Paisa'}
           ContentView={
            <View style={{alignItems:"center"}}>
            <View style={styles.container}>
                {/* Fist Line */}
                <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:6}}>

                
                <View style={{flexDirection:"row"}}>
                    <Text style={{fontSize:12,fontWeight:"500",color:colors.primary,marginRight:10}}>{data?eng.essential:Urdu.essential}</Text>
                    <Text style={{fontSize:12,fontWeight:"500",color:colors.primary}}>{data?eng.fourFeacture:Urdu.fourFeacture}</Text>
                </View>
                <View>
                    <Text style={{fontSize:8,fontWeight:"400",color:colors.primary,
                textDecorationLine:'underline',
                }}>{data?eng.viewDetail:Urdu.viewDetail}</Text>
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
                     
                    <View style={{width:329,height:55,backgroundColor:"#fff",borderRadius:7,
                    flexDirection:"row",
                    alignItems:"center",justifyContent:"space-between",
                    shadowColor:"#007BFE",
                    elevation:4,
                    paddingHorizontal:10,marginBottom:15,}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image style={{width:28,height:28.38}} source={require('../../assets/easypaisa.png')}/>
                    <View>
                    <Text style={{fontSize:13,color:colors.text,marginLeft:20,fontWeight:"700",}}>Wasif Parvez</Text>
                    <Text style={{fontSize:12,color:colors.text,marginLeft:20,fontWeight:"400",}}>92 302 8373627</Text>
                    </View>
                   
                    </View>
                     <View>
                     <Text style={{fontSize:12,color:colors.text,marginLeft:20,fontWeight:"400",}}>Current Balance</Text>
                     <Text style={{fontSize:12,color:colors.text,marginLeft:20,fontWeight:"400",}}>Rs. 6252</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/check.png')}/>
                    </View>
                    </View>
                </TouchableOpacity>
                {/* Credit Card */}
                {/* Credit Card */}
                <TouchableOpacity onPress={()=>navigation.navigate('DebitCard')}>
                     
                    <View style={{width:329,height:55,backgroundColor:"#fff",borderRadius:7,
                    flexDirection:"row",
                    alignItems:"center",justifyContent:"space-between",
                    shadowColor:"#007BFE",
                    elevation:4,
                    paddingHorizontal:10,marginBottom:15,}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image style={{width:28,height:28.38}} source={require('../../assets/easypaisa.png')}/>
                    <View>
                    <Text style={{fontSize:13,color:colors.text,marginLeft:20,fontWeight:"700",}}>Wasif Parvez</Text>
                    <Text style={{fontSize:12,color:colors.text,marginLeft:20,fontWeight:"400",}}>92 302 8373627</Text>
                    </View>
                   
                    </View>
                     <View>
                     <Text style={{fontSize:12,color:colors.text,marginLeft:20,fontWeight:"400",}}>Current Balance</Text>
                     <Text style={{fontSize:12,color:colors.text,marginLeft:20,fontWeight:"400",}}>Rs. 6252</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/uncheck.png')}/>
                    </View>
                    </View>
                </TouchableOpacity>
                {/* Credit Card */}
                 {/* Credit Card */}
                 <TouchableOpacity onPress={()=>navigation.navigate('DebitCard')}>
                     
                     <View style={{width:329,height:55,backgroundColor:"#fff",borderRadius:7,
                     flexDirection:"row",
                     alignItems:"center",justifyContent:"space-between",
                     shadowColor:"#007BFE",
                     elevation:4,
                     paddingHorizontal:10,marginBottom:15,}}>
                         <View style={{flexDirection:"row",alignItems:"center"}}>
                     <Image style={{width:28,height:28.38}} source={require('../../assets/easypaisa.png')}/>
                     <View>
                     <Text style={{fontSize:13,color:colors.text,marginLeft:20,fontWeight:"700",}}>Wasif Parvez</Text>
                     <Text style={{fontSize:12,color:colors.text,marginLeft:20,fontWeight:"400",}}>92 302 8373627</Text>
                     </View>
                    
                     </View>
                      <View>
                      <Text style={{fontSize:12,color:colors.text,marginLeft:20,fontWeight:"400",}}>Current Balance</Text>
                      <Text style={{fontSize:12,color:colors.text,marginLeft:20,fontWeight:"400",}}>Rs. 6252</Text>
                     </View>
                     <View>
                         <Image source={require('../../assets/uncheck.png')}/>
                     </View>
                     </View>
                 </TouchableOpacity>
                 {/* Credit Card */}
                
               

            </View>
            {/* Debit Cards */}

           {/* Pay Button */}
          <View style={{width:"100%",alignItems:"center",marginTop:30,marginBottom:15}}>
            <TouchableOpacity onPress={()=>navigation.navigate('EasypaisaAccount')}>
                <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Next</Text>
                </View>
            </TouchableOpacity>
          </View>
          {/* Pay Button */}
          {/* Add Button */}
            <View style={{width:"100%",alignItems:"flex-end"}}>
            <TouchableOpacity onPress={()=>setCard(!card)}>
                <View style={styles.addButton}>
                <Image style={{width:32,height:32}} source={require('../../assets/plus.png')}/>
                </View>
            </TouchableOpacity>
            </View>
          {/* Add Button */}


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
    },
    buttonContainer:{
        width:206,
        height:57,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:colors.primary,
        borderRadius:7
    },
    buttonText:{
        fontSize:25,
        fontWeight:"500",
        color:"#fff",
        lineHeight:27,
    },
    addButton:{
        width:59,
        height:59,
        backgroundColor:colors.primary,
        borderRadius:100,
        alignItems:"center",
        justifyContent:"center"
    },
    addButt:{
        width:32,
        height:32,
        backgroundColor:"#fff",
        borderRadius:100,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        color:colors.primary,
        fontSize:20,
        
    }
   
     
});


export default EasyPaisaComponent;
