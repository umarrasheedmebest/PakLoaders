import { ActivityIndicator, StyleSheet, Text, useWindowDimensions, View,Image,TouchableOpacity,TextInput } from 'react-native'
import React,{useState,useContext,} from 'react'
import {colors} from '../../globalStyle';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../../AuthProvider';
import CustomInput from '../../Components/CustomInput';
const Sure = ({profile,logoutBack,deleteBlack,addCard,onPress,confirmPress}) => {
    const {height,width}=useWindowDimensions();
    const [insure, setInsure] = useState(true);
    const [ignore, setIgnore] = useState(true);
    const {logout} = useContext(AuthContext);
    const navigation=useNavigation();
  return (
    addCard? <View style={[styles.container,{height,width}]}>
    <View style={[styles.loader,{height:460,}]}>
        <View>
       <View style={{width:"100%",alignItems:"center",marginTop:30,}}>
        <Text style={{fontSize:20,fontWeight:"bold",color:"#4448FF"}}>Add a Card</Text>
       </View>
       <View style={{width:"100%",alignItems:"center",marginBottom:20,}}>
        <Text style={{fontSize:14,fontFamily:"Poppins-Medium",color:"#5A5A5A"}}>Please enter your Card Details</Text>
       </View>
      {/* Input field */}
      <CustomInput
      label={'Card Holder Name'}
      width={'50%'}
      placeholder={'Jhan Smith'}
      eye={'none'}
      />
      <CustomInput
      label={'Card Number'}
      width={'40%'}
      placeholder={'3748263843826'}
      eye={'none'}
      />
      {/* Date of Birth */}
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:20,}}>
      {/* Month */}
      <View>
      <View style={{zIndex:1, width:60,marginBottom:-15,justifyContent:"center",alignItems:"center"}}>
          <Text style={styles.labelStyle}>March</Text>
        </View> 
      <View style={[styles.textInput,{borderColor:"gray",
                borderWidth:1,marginVertical:7,
                flexDirection:"row" 
                }]}>
         <TextInput style={{color:colors.text,flex:1,}}
     placeholder={'MM'}
     autoCorrect={false}
     />
     </View>
     </View>
     {/* Month */}
      {/* Year */}
      <View>
      <View style={{zIndex:1, width:50,marginBottom:-15,justifyContent:"center",alignItems:"center"}}>
          <Text style={styles.labelStyle}>Year</Text>
        </View> 
      <View style={[styles.textInput,{borderColor:"gray",
                borderWidth:1,marginVertical:7,
                flexDirection:"row" 
                }]}>
         <TextInput style={{color:colors.text,flex:1,}}
     placeholder={'YY'}
     autoCorrect={false}
     />
     </View>
     </View>
     {/* Year */}
      {/* CVV */}
      <View>
      <View style={{zIndex:1, width:40,marginBottom:-15,justifyContent:"center",alignItems:"center"}}>
          <Text style={styles.labelStyle}>Cvv</Text>
        </View> 
      <View style={[styles.textInput,{borderColor:"gray",
                borderWidth:1,marginVertical:7,
                flexDirection:"row" 
                }]}>
         <TextInput style={{color:colors.text,flex:1,}}
     placeholder={'1287'}
     autoCorrect={false}
     />
     </View>
     </View>
     {/* Year */}
     </View>
      {/* Date of Birth */}
      {/* Button default */}
      
      <View style={[styles.defaultStyle,{justifyContent:"space-between",width:"100%",zIndex:11,paddingHorizontal:10,}]}>
           <TouchableOpacity onPress={onPress}>
                <View style={{width:132,height:50,borderColor:"#4448FF",borderRadius:7,alignItems:"center",justifyContent:"center",borderWidth:1.5}}><Text style={{fontSize:18,fontFamily:"Poppins-Medium",color:"#4448FF"}}>Cancel</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={confirmPress}>
                <View style={{width:132,height:50,backgroundColor:"#4448FF",borderRadius:7,alignItems:"center",justifyContent:"center"}}><Text style={{fontSize:18,fontFamily:"Poppins-Medium",color:"#fff"}}>Confirm</Text></View>
            </TouchableOpacity>
           </View>
           {/* Button default */}

    </View>
</View>
</View>:
deleteBlack?
<View style={[styles.container,{height,width}]}>
        <View style={[styles.loader,{height:172,}]}>
            <View>
           <View style={{width:"100%",alignItems:"center",marginVertical:20,}}>
            <Text style={{fontSize:20,fontFamily:"Poppins-Regular",color:"#4448FF"}}>Delete!</Text>
           </View>
           <View style={{width:"100%",alignItems:"center",marginBottom:25,}}>
            <Text style={{fontSize:14,fontFamily:"Poppins-Medium",color:"#5A5A5A"}}>Are you sure you want to delete this item!!</Text>
           </View>
           <View style={[styles.defaultStyle,{justifyContent:"space-evenly",width:"100%",zIndex:11,paddingHorizontal:10,}]}>
           <TouchableOpacity onPress={()=>setInsure(false)}>
                <View style={{width:109,height:38,borderColor:"#4448FF",borderRadius:7,alignItems:"center",justifyContent:"center",borderWidth:1.5}}><Text style={{fontSize:13,fontFamily:"Poppins-Medium",color:"#4448FF"}}>No</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('CreatePost')}>
                <View style={{width:109,height:38,backgroundColor:"#4448FF",borderRadius:7,alignItems:"center",justifyContent:"center"}}><Text style={{fontSize:13,fontFamily:"Poppins-Medium",color:"#fff"}}>Yes</Text></View>
            </TouchableOpacity>
           </View>

        </View>
    </View>
    </View>
:
logoutBack? <View style={[styles.container,{height,width}]}>
<View style={[styles.loader,{height:172}]}>
    <View>
   <View style={{width:"100%",alignItems:"center",marginVertical:20,}}>
    <Text style={{fontSize:15,fontFamily:"Poppins-Regular",color:"#F44336"}}>Logout</Text>
   </View>
   <View style={{width:"100%",alignItems:"center",marginBottom:25,}}>
    <Text style={{fontSize:14,fontFamily:"Poppins-Medium",color:"#5A5A5A"}}>Are you sure you want to Logout!!</Text>
   </View>
   <View style={[styles.defaultStyle,{justifyContent:"space-evenly",width:"100%",zIndex:11,paddingHorizontal:10,}]}>
   <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <View style={{width:109,height:38,borderColor:"#4448FF",borderRadius:7,alignItems:"center",justifyContent:"center",borderWidth:1.5}}><Text style={{fontSize:13,fontFamily:"Poppins-Medium",color:"#4448FF"}}>No</Text></View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>logout()}>
        <View style={{width:109,height:38,backgroundColor:"#4448FF",borderRadius:7,alignItems:"center",justifyContent:"center"}}><Text style={{fontSize:13,fontFamily:"Poppins-Medium",color:"#fff"}}>Yes</Text></View>
    </TouchableOpacity>
   </View>

</View>
</View>
</View>:
profile? 
<View style={[styles.container,{height,width}]}>
    <View style={styles.profile}>
        

       
    <View style={{width:94,height:94,borderWidth:1,
                borderColor:"#67A5FF",borderRadius:100,alignItems:"center",justifyContent:"center",
                position:"relative",
                }}>
                <Image source={require('../../assets/ProfileDetail.png')}/>
                <View style={{position:"absolute",right:15,bottom:3}}>
                    <Image source={require('../../assets/activeProfile.png')}/>
                </View>
                </View>
                {/* Edit Profile */}
                {/* Name */}
                <View>
                    <Text style={{fontSize:16,fontWeight:"400",
                color:colors.text,marginVertical:10}}>Ali Khan</Text>
                </View>
                {/* Name */}
                {/* Reviews */}
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image style={{width:17.12,height:16.28}} source={require('../../assets/Star.png')}/>
                        <Image style={{width:17.12,height:16.28}} source={require('../../assets/Star.png')}/>

                        <Image style={{width:17.12,height:16.28}} source={require('../../assets/Star.png')}/>
                        <Image style={{width:17.12,height:16.28}} source={require('../../assets/Star.png')}/>
                        <Image style={{width:17.12,height:16.28}} source={require('../../assets/Star.png')}/>
                        <Text style={{color:colors.text,fontSize:12,marginLeft:4}}>(4.5) of 5  (3537)</Text>
                    </View>
                   
                </View>
                {/* Reviews */}
    {/* Customers Reviews */}
    <View style={{width:"100%",alignItems:"flex-start",marginTop:15,marginBottom:10}}>
        <Text style={{color:colors.primary,fontSize:12,fontWeight:"500"}}>Customers Reviews</Text>
    </View>
    {/* 1st Review */}
    <View style={styles.profileContainer}>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>

       
    <View style={{flexDirection:"row"}}>
    <Image style={{width:28,height:28}} source={require('../../assets/reviewProfile.png')}/>
    <View style={{marginLeft:10,}}>
        <Text style={{fontSize:11,fontWeight:"500",color:colors.text}}>Jhone</Text>
        <View style={{flexDirection:"row",alignItems:"center"}}>
        <Image source={require('../../assets/Stars.png')}/>  
        <Text style={{fontSize:7,color:colors.text,marginLeft:7}}>(4.1)</Text>   
        </View>
       
    </View>
    </View>
    <View><Text style={{fontSize:10,color:"#9D9D9D"}}>3s ago</Text></View>
     </View>
     <View>
        <Text style={{color:colors.text,fontSize:10,fontWeight:"300",lineHeight:16,marginTop:6,letterSpacing:0.52}}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum{'\n'}
lorem Lorem ipsum lorem ipsum lorem ipsum {'\n'}
lorem ipsum lorem....</Text>
     </View>
    </View>
     {/* 2nd Review */}
     <View style={[styles.profileContainer,{marginTop:15,}]}>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>

       
    <View style={{flexDirection:"row"}}>
    <Image style={{width:28,height:28}} source={require('../../assets/reviewProfile.png')}/>
    <View style={{marginLeft:10,}}>
        <View style={{flexDirection:"row"}}>
            <Text style={{fontSize:11,fontWeight:"500",color:colors.text}}>Edie,</Text>
            <Text style={{fontSize:11,fontWeight:"400"}}> 6 lessons with John</Text>
        </View>
        
        <View style={{flexDirection:"row",alignItems:"center"}}>
        <Image source={require('../../assets/Stars.png')}/>  
        <Text style={{fontSize:7,color:colors.text,marginLeft:7}}>(4.1)</Text>   
        </View>
       
    </View>
    </View>
    <View><Text style={{fontSize:10,color:"#9D9D9D"}}>02:06 AM</Text></View>
     </View>
     <View>
        <Text style={{color:colors.text,fontSize:10,fontWeight:"300",lineHeight:16,marginTop:6,letterSpacing:0.52}}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum{'\n'}
lorem Lorem ipsum lorem ipsum lorem ipsum {'\n'}
lorem ipsum lorem....</Text>
     </View>
    </View>
    {/* Customers Reviews */}
    {/* Close Button */}
    <View>
        <TouchableOpacity>
            <View style={{width:166,height:48, backgroundColor:colors.primary,marginTop:20,borderRadius:7,alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontSize:20,fontWeight:"400",color:"#fff"}}>Close</Text>
            </View>
        </TouchableOpacity>
    </View>
    {/* Close Button */}
    </View> 
    
</View>:
    insure?

        <View style={[styles.container,{height,width}]}>
            <View style={styles.loader}>
                <View>
               <View style={styles.image_container}>
                <Image style={styles.image_style} source={require('../../assets/img_!_17.png')}/>
                <Image style={styles.image_style} source={require('../../assets/img_2_17.png')}/>
               </View>
               <View style={[styles.defaultStyle,{justifyContent:"space-between"}]}>
               <View style={styles.defaultStyle}>
                <Image source={require('../../assets/Usama.png')}/>
                <View style={{marginLeft:8}}>
                    <Text style={styles.text}>Usama Ali</Text>
                    <View style={styles.defaultStyle}>
                        <Image source={require("../../assets/Stars.png")}/> 
                        <Text style={[styles.text,{fontSize:9}]}>(25 reviews)</Text>
                    </View>
                   
                </View>
               </View>
               <View style={styles.defaultStyle}>
                <Image source={require('../../assets/chat_icon_popup.png')}/>
                <Image style={{marginLeft:5}} source={require('../../assets/call_icon_popup.png')}/>
               </View>
               </View>
               <View style={{marginVertical:10,}}>
                <View style={[styles.defaultStyle,{marginBottom:8}]}><Text style={[{fontSize:17,fontWeight:"600"}]}>Name: </Text><Text style={[styles.text,{fontSize:17}]}>Usama Ali</Text></View>
                <View style={[styles.defaultStyle,{marginBottom:8}]}><Text style={[{fontSize:17,fontWeight:"600"}]}>Mobile Number: </Text><Text style={[styles.text,{fontSize:17}]}>92 304762673</Text></View>
                <View style={[styles.defaultStyle,{marginBottom:8}]}><Text style={[{fontSize:17,fontWeight:"600"}]}>Secondary Number: </Text><Text style={[styles.text,{fontSize:17}]}> 92 305827181</Text></View>
                <View style={[styles.defaultStyle,{marginBottom:8}]}><Text style={[{fontSize:17,fontWeight:"600"}]}>City: </Text><Text style={[styles.text,{fontSize:17}]}>Rawalpindi</Text></View>
                <View style={[styles.defaultStyle,{marginBottom:8}]}><Text style={[{fontSize:17,fontWeight:"600"}]}>Province: </Text><Text style={[styles.text,{fontSize:17}]}>Punjab</Text></View>
                
               </View>
               <View style={[styles.defaultStyle,{justifyContent:"center",width:"100%",zIndex:11}]}>
                <TouchableOpacity onPress={()=>setInsure(false)}>
                    <View style={{width:109,height:38,backgroundColor:"#4448FF",borderRadius:7,alignItems:"center",justifyContent:"center"}}><Text style={{fontSize:13,fontFamily:"Poppins-Medium",color:"#fff"}}>Ok</Text></View>
                </TouchableOpacity>
               </View>

            </View>
        </View>
        </View>
   : ignore?
   <View style={[styles.container,{height,width}]}>
            <View style={[styles.loader,{height:172}]}>
                <View>
               <View style={{width:"100%",alignItems:"center",marginVertical:20,}}>
                <Text style={{fontSize:15,fontFamily:"Poppins-Regular",color:"#4448FF"}}>Insure Tips</Text>
               </View>
               <View style={{width:"100%",alignItems:"center",marginBottom:25,}}>
                <Text style={{fontSize:14,fontFamily:"Poppins-Medium",color:"#5A5A5A"}}>Do you want to get your luggage insured?</Text>
               </View>
               <View style={[styles.defaultStyle,{justifyContent:"space-evenly",width:"100%",zIndex:11,paddingHorizontal:10,}]}>
               <TouchableOpacity onPress={()=>setIgnore(false)}>
                    <View style={{width:109,height:38,borderColor:"#4448FF",borderRadius:7,alignItems:"center",justifyContent:"center",borderWidth:1.5}}><Text style={{fontSize:13,fontFamily:"Poppins-Medium",color:"#4448FF"}}>No</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setInsure(false)}>
                    <View style={{width:109,height:38,backgroundColor:"#4448FF",borderRadius:7,alignItems:"center",justifyContent:"center"}}><Text style={{fontSize:13,fontFamily:"Poppins-Medium",color:"#fff"}}>Yes</Text></View>
                </TouchableOpacity>
               </View>

            </View>
        </View>
        </View>
        : 
        <View style={[styles.container,{height,width}]}>
        <View style={[styles.loader,{height:172,}]}>
            <View>
           <View style={{width:"100%",alignItems:"center",marginVertical:20,}}>
            <Text style={{fontSize:15,fontFamily:"Poppins-Regular",color:"#4448FF"}}>Ignore Trip</Text>
           </View>
           <View style={{width:"100%",alignItems:"center",marginBottom:25,}}>
            <Text style={{fontSize:14,fontFamily:"Poppins-Medium",color:"#5A5A5A"}}>Are you sure you want to ignore this trip?</Text>
           </View>
           <View style={[styles.defaultStyle,{justifyContent:"space-evenly",width:"100%",zIndex:11,paddingHorizontal:10,}]}>
           <TouchableOpacity onPress={()=>setInsure(false)}>
                <View style={{width:109,height:38,borderColor:"#4448FF",borderRadius:7,alignItems:"center",justifyContent:"center",borderWidth:1.5}}><Text style={{fontSize:13,fontFamily:"Poppins-Medium",color:"#4448FF"}}>No</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setInsure(false)}>
                <View style={{width:109,height:38,backgroundColor:"#4448FF",borderRadius:7,alignItems:"center",justifyContent:"center"}}><Text style={{fontSize:13,fontFamily:"Poppins-Medium",color:"#fff"}}>Yes</Text></View>
            </TouchableOpacity>
           </View>

        </View>
    </View>
    </View>
    
  );
}

export default Sure;

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        zIndex:10, 
        justifyContent:'center',
        alignItems:"center",
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    loader:{
        width:329,
        height:428,
        backgroundColor:colors.white,
        borderRadius:5,
        flexDirection:"row",
        paddingHorizontal:20,
        justifyContent:"center"
    },
    profile:{
        width:329,
        height:523,
        backgroundColor:colors.white,
        borderRadius:5,
        alignItems:"center",
        padding:20,
         
    },
    image_container:{
    marginVertical:20,
    flexDirection:"row",
   paddingHorizontal:4,
    width:"97%",
    height:"30%",
    justifyContent:"space-between"
    },
    image_style:{
        width:128,
        height:129,
    },
    text:{
        fontSize:14,
        fontFamily:"Poppins-Regular",
        color:"#5A5A5A"
    },
    defaultStyle:{
        flexDirection:"row",
        alignItems:"center",
        
    },
    profileContainer:{
        width:"99%",
        height:103,
        shadowColor:"#007BFE",
        backgroundColor:"#fff",
        elevation:8,
        padding:10,
        borderRadius:16,
       
    },
    textInput:{
        color:"#5A5A5A",
        fontSize:12,
        fontWeight:"400",
        borderRadius:5,
        width:94,height:58,
        borderColor:"#666666", 
        borderWidth:1,
        alignItems:"center",
        paddingHorizontal:5,
      },
      labelStyle:
        {color:"#5A5A5A",fontSize:14,fontWeight:"400", backgroundColor:"#ffffff",paddingHorizontal:2, marginLeft:10,
    },
})