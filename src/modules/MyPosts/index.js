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
import Raksha from '../../assets/SVG_Icons/Icon_2.svg';
import Pickup from '../../assets/SVG_Icons/Icon_1.svg';
import Truk from '../../assets/SVG_Icons/Icon_3.svg';
import TrukSmall from '../../assets/SVG_Icons/Icon_4.svg';
import LargeTruk from '../../assets/SVG_Icons/Icon_5.svg';
import MediumTruk from '../../assets/SVG_Icons/Icon_6.svg';
import TrukOne from '../../assets/SVG_Icons/Icon_7.svg';
import HavyTruk from '../../assets/SVG_Icons/Icon_8.svg';
import Tractor from '../../assets/SVG_Icons/Icon_9.svg';
import DateTime from '../../Components/DateTimePicker/DateTime';
import DateTimePicker from '@react-native-community/datetimepicker';
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
    useWindowDimensions,
    Platform
    
} from 'react-native';
import { useSelector } from 'react-redux';
import {eng,Urdu} from '../../Components/Api/Language';
 
const PostComponent = ({
    navigateCompleteProfileOne,
    navigateVerification,
    
    sideBar,
   
}) => { 
  const mark=useSelector((state)=>state.language)
  const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [textOne, setTextOne] = useState('Empty');
    const onChange=(event,selectedDate)=>{
        const currentDate=selectedDate||date;
        setShow(Platform.OS==='ios');
        setDate(currentDate);
        let tempDate= new Date(currentDate);
        let fDate=tempDate.getDate()+'/'+(tempDate.getMonth()+1)+'/'+tempDate.getFullYear();
        setTextOne(fDate);
        console.log(fDate);
    }
    const showModeOne=(currentDate)=>{
        setShow(true);
        setMode(currentDate);
    }
  const navigation= useNavigation();
 const {height,width}=useWindowDimensions();


 const [showMode, setshowMode] = useState('date')
 const defaultImage=require('../../assets/icon_image.png');
    return (
        
            <SafeAreaView style={styles.container}>
              {show &&(<DateTimePicker
   testID='dateTimePicker'
   value={date}
   mode={mode}
   is24Hour={true}
   display='default'
   onChange={onChange}
   />)}
              {/* Background Image */}
                 <CustomBackground/>
                 {/* Background Image */}
                 <View style={[styles.headerContainer,styles.defaultStyle,{justifyContent:"space-between"}]}>
                  <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                      <Image source={require('../../assets/Button.png')}/>
                  </TouchableOpacity>
                
                  <Text style={{fontSize:18,color:"#fff",fontFamily:"Poppins-Regular"}}>{mark?eng.addPost:Urdu.addPost}</Text>
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
                  <View style={{width:"100%",marginVertical:5,paddingHorizontal:20}}>
                    <Text style={{color:colors.primary,fontSize:24, fontWeight:"500",
                  fontFamily:"Poppins-Medium"}}>{mark?eng.createPost:Urdu.createPost}</Text>
                    <Text style={{fontSize:12,fontFamily:"Poppins-Regular",color:"#5A5A5A",lineHeight:18}}>Welcome Jhon Smith!{'\n'}
Please fill the following form to add a new post.</Text>

                    </View>
                                      {/* CNIC Image
                      <View style={styles.MainCnic}>
                      <View style={styles.boxCnic}>
                      <CustomCNIC defaultImage={defaultImage}  text="Add Luggage Image"/>
                        </View>
                        <View style={styles.boxCnic}>
                        <CustomCNIC defaultImage={defaultImage} text="Add Luggage Image"/>
                        </View>
                       </View> */}
                   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical:10,marginLeft:20}}>
                    {/* Low-Capacity */}
                    <View style={{marginHorizontal:5}}>
                      <TouchableOpacity>
                        <View style={styles.MenuContainer}>
                          <View style={{width:"100%",alignItems:"flex-end",paddingRight:5,paddingTop:2}}>
                           
                            <Image source={require('../../assets/uncheck.png')}/>
                          </View>
                          
                          {/* <Image source={require('../../assets/Low.png')}/> */}
                          <Raksha width={100} height={100}/>
                          <Text style={{fontSize:15,fontFamily:"Poppins-Regular",color:"#5A5A5A"}}>Low-Capacity</Text>
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
                          
                          {/* <Image source={require('../../assets/Medium.png')}/> */}
                          <Pickup width={100} height={100}/>
                          <Text style={{fontSize:15,fontFamily:"Poppins-Regular",color:"#5A5A5A"}}>Medium-Capacity</Text>
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
                          
                          {/* <Image source={require('../../assets/High.png')}/> */}
                          <Truk width={100} height={100}/>

                          <Text style={{fontSize:15,fontFamily:"Poppins-Regular",color:"#5A5A5A"}}>Low-Capacity</Text>
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
                          
                          {/* <Image source={require('../../assets/Low.png')}/> */}
                          <Tractor width={100} height={100}/>

                          <Text style={{fontSize:15,fontFamily:"Poppins-Regular",color:"#5A5A5A"}}>Low-Capacity</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    {/* Low-Capacity */}
                   </ScrollView>
                    
                    {/* Profile */}
                    <View style={{width:"100%",alignItems:"center",justifyContent:"center",marginHorizontal:10}}>
                    
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
                  <CustomInput value={textOne} showModeOne={showModeOne} label="Date of pickup" width={'40%'} eye="flex" calenderr={true} placeholder="12-02-2024"
                   />
                    {/* Input field user Time Pickup */}
                  <CustomInput label="Time of pickup" width={'40%'} eye="none" placeholder="12-02-2024"
                   />
                    {/* Input field user Vehicle Required */}
                  {/* <CustomInput label="No of Vehicle Required" width={'50%'} eye="none" placeholder="02:55 pm"
                   /> */}
                    {/* Button Next */}
                    <CustomButton onPress={()=>navigation.navigate('Vehicle')}  text="Next" type="secondary"/>
                    
                    {/* Button Next */}
                    {/* Button Cancel */}
                    <CustomButton onPress={()=>navigation.navigate('CreatePost')} text="Cancel" type="tertiary"/>
                    
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
        marginVertical:10,
       backgroundColor:"#fff",
        shadowColor:"#007BFE",
        alignItems:"center",
     width:150,
    height:140,
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
