import React, {useState} from 'react';
import CustomBackground from '../../Components/CustomBackground';
import { colors } from '../../globalStyle';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput';
import CustomCNIC from '../../Components/CustomCNIC';
import CustomForground from '../../Components/CustomForground';
import CustomMenu from '../../Components/CustomMenu';
import Home from "../../Components/Api/Home";
import Raksha from '../../assets/SVG_Icons/Icon_2.svg';
import Pickup from '../../assets/SVG_Icons/Icon_1.svg';
import Truk from '../../assets/SVG_Icons/Icon_3.svg';
import TrukSmall from '../../assets/SVG_Icons/Icon_4.svg';
import LargeTruk from '../../assets/SVG_Icons/Icon_5.svg';
import MediumTruk from '../../assets/SVG_Icons/Icon_6.svg';
import TrukOne from '../../assets/SVG_Icons/Icon_7.svg';
import HavyTruk from '../../assets/SVG_Icons/Icon_8.svg';
import Tractor from '../../assets/SVG_Icons/Icon_9.svg';
import { useNavigation } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
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
    FlatList
    
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { addPost } from '../../Redux/slices/PostSlice';


 
const VehicleComponent = ({
    navigateCompleteProfileOne,
    navigateVerification,
    text,
    sideBar,
   ...props
}) => { 
  const [singleFile, setSingleFile] = useState(null);
  // const options={
  //   title:'Select Image',
  //   type:'library',
  //   options:{
  //     maxHeight:200,
  //     maxWidth:200,
  //     selectionLimit:0,
  //     mediaType:'photo',
  //     includeBase64:false,
  //   },
  // }
 const dispatch= useDispatch();
  const navigation= useNavigation();
  // const [image, setImage] = useState({
  //   singleFile:""
  // })
 const defaultImage=require('../../assets/icon_image.png');
 const selectedTruk=async()=>{
   // Opening Document Picker to select one file
   try {
    const res = await DocumentPicker.pick({
      // Provide which type of file you want user to pick
      type: [DocumentPicker.types.images],
      // There can me more options as well
      // DocumentPicker.types.allFiles
      // DocumentPicker.types.images
      // DocumentPicker.types.plainText
      // DocumentPicker.types.audio
      // DocumentPicker.types.pdf
    });
    // Printing the log realted to the file
    // const file=JSON.stringify(res)
    setSingleFile(res);
  }catch(err){
    console.log("image not upload")
  }
  const formData=new FormData;
// const result=await launchImageLibrary(options);
// console.log(result.assets[0]);
// const formData=new FormData();
// formData.append('images',{
//   uri:result.assets[0].uri,
//   type:result.assets[0].type,
//   filename:result.assets[0].fileName,

// });
// formData.append('images',{
//   uri:result.assets[0].uri,
//   type:result.assets[0].type,
//   filename:result.assets[0].fileName,

// });
formData.append('images', singleFile);
formData.append('images', singleFile);

formData.append('pickup_address',"Bhaseen");
formData.append('dropoff_address',"JaloPark");
formData.append('pickup_date',"00-00-12");
formData.append('pickup_time',"sdf");
formData.append('details',"sdf");
formData.append('loaders',"3");
const mainData=formData._parts
dispatch(addPost(mainData));

console.log(mainData)

 }
    return (
        
            <SafeAreaView style={styles.container}>
              {/* Background Image */}
                 <CustomBackground/>
                 {/* Background Image */}
                 {/* Header */}
                 <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:20}}>
           <TouchableOpacity onPress={()=>props.navigation.goBack()}>
       <Image source={require('../../assets/arrow-back.png')}/>
    </TouchableOpacity>
          
            <Text style={{fontSize:18,color:"#fff",fontFamily:"Poppins-Regular",textAlign:"center",}}> Select Vehicle</Text>
            <View style={{width:20,}}></View>
            
           </View>
            {/* MainContainer */}
            
           <ScrollView showsVerticalScrollIndicator={false} style={[styles.mainContainer,styles.commonStyle]}>
            {/* 1st Row */}
                    <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:10,}}>
                    <View>
                      <TouchableOpacity>
                        <View style={[styles.MenuContainer,{height:131}]}>
                        <View style={{width:"100%",alignItems:"flex-end",paddingRight:5,paddingTop:2}}>
                            <Image style={{width:20,height:20}} source={require('../../assets/uncheck.png')}/>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity onPress={()=>selectedTruk()}>
                        <View style={styles.MenuContainer}>
                          <View style={{width:"100%",alignItems:"flex-end",paddingRight:5,paddingTop:2}}>
                            <Image style={{width:20,height:20}} source={require('../../assets/check.png')}/>
                          </View>
                          
                          {/* <Image source={require('../../assets/MediumCapacity.png')}/> */}
                          
                          <TrukSmall width={100} height={100}/>
                          <Text style={{fontSize:16,fontFamily:"Poppins-Regular",color:"#5A5A5A",lineHeight:32,marginTop:10,}}>Medium-Capacity</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    </View>
            {/* 2nd Row */}
            <View style={{flexDirection:"row",justifyContent:"space-between",padding:10,}}>
            <View>
                      <TouchableOpacity >
                        <View style={styles.MenuContainer}>
                          <View style={{width:"100%",alignItems:"flex-end",paddingRight:5,paddingTop:2}}>
                            <Image style={{width:20,height:20}} source={require('../../assets/uncheck.png')}/>
                          </View>
                          
                          {/* <Image source={require('../../assets/HighCapacity.png')}/> */}
                          <Truk width={100} height={100}/>
                          <Text style={{fontSize:16,fontFamily:"Poppins-Regular",color:"#5A5A5A",lineHeight:32,marginTop:10,}}>High-Capacity</Text>
                          <Text style={{fontSize:16,fontWeight:"400",color:"#5A5A5A",lineHeight:32,}}>e.g Shahzor Truck</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity>
                        <View style={styles.MenuContainer}>
                          <View style={{width:"100%",alignItems:"flex-end",paddingRight:5,paddingTop:2}}>
                            <Image style={{width:20,height:20}} source={require('../../assets/uncheck.png')}/>
                          </View>
                          
                          {/* <Image source={require('../../assets/SuperCapacity.png')}/> */}
                         
                          <HavyTruk width={100} height={100}/>
                          <Text style={{fontSize:16,fontWeight:"500",color:"#5A5A5A",lineHeight:32,marginTop:10,}}>Super-Capacity</Text>
                          <Text style={{fontSize:16,fontWeight:"400",color:"#5A5A5A",lineHeight:32,}}>e.g Reefer Truck</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    </View>
                    {/* 3rd Row */}
                    <View style={{flexDirection:"row",justifyContent:"space-between",padding:10,}}>
            <View>
                      <TouchableOpacity>
                        <View style={styles.MenuContainer}>
                          <View style={{width:"100%",alignItems:"flex-end",paddingRight:5,paddingTop:2}}>
                            <Image style={{width:20,height:20}} source={require('../../assets/uncheck.png')}/>
                          </View>
                          
                          {/* <Image source={require('../../assets/XL20.png')}/> */}
                          <TrukOne width={100} height={100}/>
                          <Text style={{fontSize:16,fontFamily:"Poppins-Regular",color:"#5A5A5A",lineHeight:32,marginTop:10,}}>XL20</Text>
                          <Text style={{fontSize:16,fontWeight:"400",color:"#5A5A5A",lineHeight:32,}}>e.g 20 feet Truck</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity>
                        <View style={styles.MenuContainer}>
                          <View style={{width:"100%",alignItems:"flex-end",paddingRight:5,paddingTop:2}}>
                            <Image style={{width:20,height:20}} source={require('../../assets/uncheck.png')}/>
                          </View>
                          
                          {/* <Image source={require('../../assets/XL40.png')}/> */}
                          <LargeTruk width={100} height={100}/>
                          <Text style={{fontSize:16,fontWeight:"500",color:"#5A5A5A",lineHeight:32,marginTop:10,}}>XL40</Text>
                          <Text style={{fontSize:16,fontWeight:"400",color:"#5A5A5A",lineHeight:32,}}>e.g 40 feet Truck</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    </View>
                    <View style={{width:"100%",alignItems:"center",paddingVertical:20,paddingBottom:40,}}>
                    {/* Button Next */}
                    <CustomButton onPress={()=>navigation.navigate('Vehicle')}  text="Post" type="secondary"/>
                    
                    {/* Button Next */}
                    {/* Button Cancel */}
                    <CustomButton text="Cancel" type="tertiary"/>
                    
                    {/* Button Cancel */}
                    </View>
           </ScrollView>
                 {/*MainContainer  */}
                
                
               
          
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
       padding:20,
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
        paddingTop:5,
       backgroundColor:"#fff",
        shadowColor:"#007BFE",
        alignItems:"center",
     width:158,
    height:200,
    elevation:4,
   
   
    
      },
      dataContainer:{
        width:329,
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


export default VehicleComponent;
