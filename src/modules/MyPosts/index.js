import React, {useState} from 'react';
import CustomBackground from '../../Components/CustomBackground';
import { colors } from '../../globalStyle';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput';
import CustomCNIC from '../../Components/CustomCNIC';
import CustomForground from '../../Components/CustomForground';
import CustomMenu from '../../Components/CustomMenu';
import Home from "../../Components/Api/Home";
import { useNavigation } from '@react-navigation/native';

import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Button,
    ScrollView,
    FlatList,
    useWindowDimensions
    
} from 'react-native';

 
const PostComponent = ({
    navigateCompleteProfileOne,
    navigateVerification,
    text,
    sideBar,
   
}) => { 
  const navigation= useNavigation();
 const {height,width}=useWindowDimensions();

 const defaultImage=require('../../assets/icon_image.png');
    return (
        
            <SafeAreaView style={styles.container}>
              {/* Background Image */}
                 <CustomBackground/>
                 {/* Background Image */}
                 <View style={[styles.headerContainer,styles.defaultStyle,{justifyContent:"space-between"}]}>
                  <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                      <Image source={require('../../assets/Button.png')}/>
                  </TouchableOpacity>
                
                  <Text style={{fontSize:18,color:"#fff",fontFamily:"Poppins-Regular"}}>Add Post</Text>
                  <View style={styles.defaultStyle}>
                    <TouchableOpacity style={{marginRight:10,}}>
                      <Image source={require('../../assets/Bell.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={sideBar}>
                      <Image source={require('../../assets/profile.png')}/>
                    </TouchableOpacity>
                  </View>
                 </View>
                 
                 <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
                  <View style={{width:"100%",alignItems:"flex-start",marginVertical:5,}}>
                    <Text style={{color:colors.primary,fontSize:24, fontWeight:"500",
                  fontFamily:"Poppins-Medium"}}>Create Post</Text>
                    <Text style={{fontSize:12,fontFamily:"Poppins-Regular",color:"#5A5A5A",lineHeight:18}}>Welcome Jhon Smith!{'\n'}
Please fill the following form to add a new post.</Text>
                    </View>
                                      {/* CNIC Image */}
                      <View style={styles.MainCnic}>
                      <View style={styles.boxCnic}>
                      <CustomCNIC defaultImage={defaultImage}  text="Add Luggage Image"/>
                        </View>
                        <View style={styles.boxCnic}>
                        <CustomCNIC defaultImage={defaultImage} text="Add Luggage Image"/>
                        </View>
                       </View>
                   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical:10}}>
                    {/* Low-Capacity */}
                    <View>
                      <TouchableOpacity>
                        <View style={styles.MenuContainer}>
                          <View style={{width:"100%",alignItems:"flex-end",paddingRight:5,paddingTop:2}}>
                            <Image source={require('../../assets/uncheck.png')}/>
                          </View>
                          
                          <Image source={require('../../assets/Low.png')}/>
                          <Text style={{fontSize:9,fontFamily:"Poppins-Regular",color:"#5A5A5A"}}>Low-Capacity</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    {/* Low-Capacity */}
                    {/* Medium-Capacity */}
                    <View style={{marginHorizontal:10}}>
                      <TouchableOpacity>
                        <View style={styles.MenuContainer}>
                          <View style={{width:"100%",alignItems:"flex-end",paddingRight:5,paddingTop:2}}>
                            <Image source={require('../../assets/uncheck.png')}/>
                          </View>
                          
                          <Image source={require('../../assets/Medium.png')}/>
                          <Text style={{fontSize:9,fontFamily:"Poppins-Regular",color:"#5A5A5A"}}>Medium-Capacity</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    {/* Medium-Capacity */}
                    {/* High-Capacity */}
                    <View>
                      <TouchableOpacity>
                        <View style={styles.MenuContainer}>
                          <View style={{width:"100%",alignItems:"flex-end",paddingRight:5,paddingTop:2}}>
                            <Image source={require('../../assets/check.png')}/>
                          </View>
                          
                          <Image source={require('../../assets/High.png')}/>
                          <Text style={{fontSize:9,fontFamily:"Poppins-Regular",color:"#5A5A5A"}}>Low-Capacity</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    {/* High-Capacity */}
                     {/* Low-Capacity */}
                     <View style={{marginHorizontal:10}}>
                      <TouchableOpacity>
                        <View style={styles.MenuContainer}>
                          <View style={{width:"100%",alignItems:"flex-end",paddingRight:5,paddingTop:2}}>
                            <Image source={require('../../assets/uncheck.png')}/>
                          </View>
                          
                          <Image source={require('../../assets/Low.png')}/>
                          <Text style={{fontSize:9,fontFamily:"Poppins-Regular",color:"#5A5A5A"}}>Low-Capacity</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    {/* Low-Capacity */}
                   </ScrollView>
                    
                    {/* Profile */}
                    <View style={{width:"100%",alignItems:"center",justifyContent:"center",}}>
                    
                    {/* Input field user Pickup Location */}
                    <CustomInput label="Pickup Location" width={"40%"} eye="none" placeholder="Clarck pharmacy, 442 Rawalpindi"
                   />
                   {/* Input field user Drop Location */}
                   <CustomInput label="Drop off Location" width={'40%'} eye="none" placeholder="Clarck pharmacy, 442 Islamabad"
                   />
                    {/* Input field user Luggage weight */}
                    <CustomInput label="Luggage weight" width={'40%'} eye="none" placeholder="580 kg"
                   />
                  {/* Input field user date pickup */}
                  <CustomInput label="Date of pickup" width={'40%'} eye="flex" calenderr={true} placeholder="12-02-2024"
                   />
                    {/* Input field user Time Pickup */}
                  <CustomInput label="Time of pickup" width={'40%'} eye="none" placeholder="12-02-2024"
                   />
                    {/* Input field user Vehicle Required */}
                  <CustomInput label="No of Vehicle Required" width={'50%'} eye="none" placeholder="02:55 pm"
                   />
                    {/* Button Next */}
                    <CustomButton onPress={()=>navigation.navigate('Vehicle')}  text="Next" type="secondary"/>
                    
                    {/* Button Next */}
                    {/* Button Cancel */}
                    <CustomButton text="Cancel" type="tertiary"/>
                    
                    {/* Button Cancel */}
                    </View>
                  
                    
                 </ScrollView>
                 <View style={styles.MenuBar}>
                  <View style={styles.MenuLine}></View>
                <CustomMenu/>
                <View style={styles.MenuLine}></View>
                
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
        height:"80%",
       paddingLeft:30,
        borderTopLeftRadius:11,
        borderTopRightRadius:11,
        backgroundColor:"white",
      
        
       
       
        
      },
      headerContainer:{
        width:"100%",
        height:"10%",
        paddingHorizontal:20,
      },
      MenuBar:{
        borderTopLeftRadius:31,
        borderTopRightRadius:31,
       borderColor:"#fff",
        shadowColor:"#4448FF",
        
     width:"101%",
    height:"10%",
    elevation:4,
    justifyContent:"center"

      },
     
      MenuContainer:{
        borderRadius:7,
        
       backgroundColor:"#fff",
        shadowColor:"#007BFE",
        alignItems:"center",
     width:100,
    height:83,
    elevation:10,
    justifyContent:"center"
   
    
      },
      dataContainer:{
        width:"100%",
        height:136,
        padding:10,
        borderRadius:12,
        backgroundColor:"#fff",
       marginVertical:6,
       
       shadowColor: "#000",
       shadowOffset: {
         width: 0,
         height: 2,
       },
       shadowOpacity: 0.25,
       shadowRadius: 3.84,
       
       elevation: 7,
       
       
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
      defaultStyle:{
  display:"flex",
  flexDirection:'row',
  alignItems:'center'
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
iconImage:{
    width:125,
    height:125,
   marginBottom:15,
   marginTop:15,
   
  },
  textInput:{
    color:"#5A5A5A",
    fontSize:12,
    fontWeight:"400",
    borderRadius:5,
    width:287,height:68,
    borderColor:"#666666", 
    borderWidth:1,
  },
  main:{
    fontSize:24, 
    alignSelf:"flex-start",
    color:"#4448FF",
    fontWeight:"700",
    fontFamily:"Poppins-SemiBold.ttf",
    marginVertical:10,
   }
  ,
  paragraph:{
   alignSelf:"flex-start",
   fontSize:12,
   
  },
  MainCnic:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center"
    
  },
  boxCnic:{
    width:93,
    height:92,
    borderWidth:1,
    
    margin:10,
    borderColor:colors.dot,
    borderStyle:"dashed"

  }
   
     
});


export default PostComponent;
