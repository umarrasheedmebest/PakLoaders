import React,{useState} from 'react';
import BidsAPI from "../../Components/Api/BidsAPI";
import Home from "../../Components/Api/Home";
import Sure from '../../Components/sure/Sure';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Image,
    View,
    Dimensions,
  
    ImageBackground,
    ImageBackgroundBase,
    
    TextInput,
   
    Button,
    
    FlatList


} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const images=[
    {key:1, item:require('../../assets/image_detailscrn.png')},
    {key:2, item:require('../../assets/image_detailscrn.png')},
    {key:3, item:require('../../assets/image_detailscrn.png')},
]
const WIDTH =Dimensions.get('window').width;
const HEIGHT=Dimensions.get('window').height;
import CustomBackground from '../../Components/CustomBackground';
import { color } from 'react-native-reanimated';
const BlackDtailComponent = ({
    navigatebids
 }) => {
    const [imgActive, setImgActive] = useState(0);
    const [loading, setLoading] = useState(true);

   const onchange=(nativeEvent)=>{
    if (nativeEvent) {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide != imgActive) {
            setImgActive(slide);
        }
    }
    }
    
    return (
        <SafeAreaView style={styles.container}>
         <Sure />
        {/* Background Image */}
           <CustomBackground/>
           {/* Background Image */}
           <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:20}}>
           <TouchableOpacity onPress={()=>props.navigation.goBack()}>
       <Image source={require('../../assets/arrow-back.png')}/>
    </TouchableOpacity>
          
            <Text style={{fontSize:18,color:"#fff",fontFamily:"Poppins-Regular",textAlign:"center",}}> View details</Text>
            <View style={{width:20,}}></View>
            
           </View>
          
           <View style={[styles.mainContainer,styles.commonStyle]}>
        <SafeAreaView style={styles.carContainer}>
            <View style={styles.wrap}>
            <ScrollView 
            onScroll={({nativeEvent})=> onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
            >
           
              {
                images.map((e,index)=>
                    <Image 
               key={e.key}
                resizeMode='stretch'
               style={styles.wrap}
               source={e.item}
               />
                )
                 
              }
               
                
              
            </ScrollView>
            <View style={styles.wrapDot}>
              {images.map((e,index)=>
              <Text
              key={e.key}
              style={imgActive== index ? styles.dotActive:styles.dot}
              >
                ●
              </Text>
              )}
            </View>
            </View>
             
              </SafeAreaView> 
              <View style={{height:"58%",alignItems:'center'}}>
                <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.listStyle}
              showsVerticalScrollIndicator={false}
              >
                <Text style={{fontSize:13,fontFamily:'Montserrat-Medium',color:"#4448FF"}}>Post Details</Text>
                <View style={[styles.dataContainer,{height:211,padding:10,shadowColor:"#007BFE"}]}>
                <View style={{flexDirection:"row"}}>
                  <Image source={require('../../assets/Waseem.png')}/>
                  
                  <View style={{marginHorizontal:10,}}>
                    <Text style={{fontSize:14,fontFamily:"Poppins-Regular", color:"#5A5A5A"}}>Muhammad Waseem</Text>
                    <View style={{flexDirection:'row'}}>
                      <Image style={styles.starsImage} source={require('../../assets/Star.png')}/>
                      <Image style={styles.starsImage} source={require('../../assets/Star.png')}/>
                      <Image style={styles.starsImage} source={require('../../assets/Star.png')}/>
                      <Image style={styles.starsImage} source={require('../../assets/Star.png')}/>
                      <Image style={styles.starsImage} source={require('../../assets/Star.png')}/>
                      

                    </View>
                  </View>
                  <View style={{flexDirection:"row",marginLeft:70,}}>
                    <TouchableOpacity>
                       <Image style={styles.chat_icon} source={require('../../assets/chat_icon.png')}/>
                    </TouchableOpacity>
                   <TouchableOpacity>
                    <Image style={styles.call_icon} source={require('../../assets/call_icon.png')}/>
                   </TouchableOpacity>
                    
                  </View>
                  </View>
                  {/* 2nd row */}
                  <View style={{flexDirection:"row",alignItems:"center",marginTop:7,}}>
                    <View style={{width:"10%"}}>
                      <Image source={require('../../assets/bulid.png')}/>
                    </View>
                    <View style={{width:"90%",flexDirection:"row"}}>
                      <Text style={{fontSize:14,fontFamily:"Poppins-Regular",
                  color:"#5A5A5A"}}>Pick up:</Text>
                  <Text style={{fontSize:14,fontFamily:"Poppins-light",
                  color:"#5A5A5A"}}> Clarck pharmacy, 442 Rawalpindi</Text>
                    </View>
                    
                  </View>
                  {/* 2nd row */}
              {/* 2nd row */}
              <View style={{flexDirection:"row",alignItems:"center",marginTop:7,}}>
                    <View style={{width:"10%"}}>
                      <Image source={require('../../assets/Dropoff_27.png')}/>
                    </View>
                    <View style={{width:"90%",flexDirection:"row"}}>
                      <Text style={{fontSize:14,fontFamily:"Poppins-Regular",
                  color:"#5A5A5A"}}>Drop off:</Text>
                  <Text style={{fontSize:14,fontFamily:"Poppins-light",
                  color:"#5A5A5A"}}> Clarck pharmacy, 442 Islamabad</Text>
                    </View>
                    
                  </View>
                  {/* 2nd row */}
                   {/* 3nd row */}
                   <View style={{flexDirection:"row",alignItems:"center",marginTop:7,}}>
                    <View style={{width:"10%"}}>
                      <Image source={require('../../assets/calender_icon.png')}/>
                    </View>
                    <View style={{width:"90%",flexDirection:"row"}}>
                      <Text style={{fontSize:14,fontFamily:"Poppins-Regular",
                  color:"#5A5A5A"}}>Date of pick up:</Text>
                  <Text style={{fontSize:14,fontFamily:"Poppins-light",
                  color:"#5A5A5A"}}>12-02-2022, Monday</Text>
                    </View>
                    
                  </View>
                  {/* 3nd row */}
                   {/* 4nd row */}
                   <View style={{flexDirection:"row",alignItems:"center",marginTop:7,}}>
                    <View style={{width:"10%"}}>
                      <Image source={require('../../assets/time_27.png')}/>
                    </View>
                    <View style={{width:"90%",flexDirection:"row"}}>
                      <Text style={{fontSize:14,fontFamily:"Poppins-Regular",
                  color:"#5A5A5A"}}>Timing:</Text>
                  <Text style={{fontSize:14,fontFamily:"Poppins-light",
                  color:"#5A5A5A"}}> 12:50 pm</Text>
                    </View>
                    
                  </View>
                  {/* 4nd row */}
                   {/* 5nd row */}
                   <View style={{flexDirection:"row",alignItems:"center",marginTop:7,}}>
                    <View style={{width:"10%"}}>
                      <Image source={require('../../assets/weight_27.png')}/>
                    </View>
                    <View style={{width:"90%",flexDirection:"row"}}>
                      <Text style={{fontSize:14,fontFamily:"Poppins-Regular",
                  color:"#5A5A5A"}}>Charges:</Text>
                  <Text style={{fontSize:14,fontFamily:"Poppins-light",
                  color:"#5A5A5A"}}> Rs.76346</Text>
                    </View>
                    
                  </View>
                  {/* 5nd row */}
                   {/* 6nd row */}
                   <View style={{flexDirection:"row",alignItems:"center",marginTop:7,}}>
                    <View style={{width:"10%"}}>
                      <Image source={require('../../assets/weight-scale.png')}/>
                    </View>
                    <View style={{width:"90%",flexDirection:"row"}}>
                      <Text style={{fontSize:14,fontFamily:"Poppins-Regular",
                  color:"#5A5A5A"}}>Weight:</Text>
                  <Text style={{fontSize:14,fontFamily:"Poppins-light",
                  color:"#5A5A5A"}}> 500kg</Text>
                    </View>
                    
                  </View>
                  {/* 6nd row */}
                  
                </View> 
                
                </View>
               
                   
                    
        
                    <View style={{flexDirection:"row-reverse",width:"100%",alignItems:"center",justifyContent:"center",marginVertical:50,}}>
                    <TouchableOpacity>
          <View style={{width:109,height:38, backgroundColor:"#4448FF",borderRadius:7,alignItems:"center",justifyContent:"center",marginHorizontal:10,}}>
          <Text style={{fontSize:13,fontFamily:"Poppins-Medium",color:"#fff"}}>Bid</Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View style={{width:109,height:38, borderWidth:1,borderRadius:7,alignItems:"center",justifyContent:"center",borderColor:"#4448FF"}}>
          <Text style={{fontSize:13,fontFamily:"Poppins-Medium",color:"#4448FF"}}>Ignore</Text>
        </View>
        </TouchableOpacity>
                    </View>
                    </ScrollView>
              </View>
              </View>
           
   </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
       

    container: {
        flex: 1,
        backgroundColor: '#fff',
       alignItems:"center",
       
    },
   
      mainContainer:{
        width:"100%",
        height:"90%",
        
        borderTopLeftRadius:21,
        borderTopRightRadius:21,
        
        
       
      },
      contactContainer:{
        width:"100%",
        paddingVertical:50,
        alignItems:"center"
      },
      headingStyle:{
        fontSize:20,
        fontFamily:"Poppins-Medium",
        color:"#4448FF",
       
      },
      paragraphStyle:{
        fontSize:14,
        fontFamily:"Poppins-Regular",
        color:"#5A5A5A",
        lineHeight:16,
        
        textAlign:"center",
        marginBottom:10,
      },
     carContainer:{
        flex:1,
     },
     wrap:{
        width:WIDTH,
        height:HEIGHT * 0.35
     },
     wrapImage:{
        width:100,
        height:300,
     },
     wrapDot:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignSelf:'center'
     },
     dotActive:{
        margin:3,
        color:'#4448FF'
     },
     dot:{
        margin:3,
        color:'#fff'
     },
     listStyle:{
        
      shadowColor: "#000",
shadowOffset: {
 width: 0,
 height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    },
    container_primary:{
      backgroundColor:"#4448FF",
      width:105,
      height:30,
      alignItems:"center",
      justifyContent:"center",
      
      borderRadius:8,
    },
    text_primary:{
      fontSize:14,
      color:"#fff",
      fontWeight:"400"
    },
    container_secondary:{
      backgroundColor:"#E1E1FF",
      width:105,
      height:30,
      alignItems:"center",
      justifyContent:"center",
      
      borderRadius:8,
      marginRight:10,
     
    },
    text_secondary:{
      fontSize:14,
      color:"#5A5A5A",
      fontWeight:"400",
     
    },
    defaultStyle:{
      display:"flex",
      flexDirection:'row',
      alignItems:'center'
    },
    dataContainer:{
      width:341,
      height:136,
      padding:10,
      borderRadius:12,
      backgroundColor:"#fff",
     marginVertical:6,
     
     shadowColor: "#6C35EE",
     shadowOffset: {
       width: 0,
       height: 2,
     },
     shadowOpacity: 0.25,
     shadowRadius: 3.84,
     
     elevation: 7,
     
     
    },
    starsImage:{
      width:9.38,
      height:8.86,
    },
    chat_icon:{
      width:25.16,
      height:20.39,
      marginRight:5,
    },
    call_icon:{
      width:25.29,
      height:23.29,
      
      
    }

   
     
});
export default BlackDtailComponent;
