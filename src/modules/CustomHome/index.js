import React, {useState} from 'react';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput';
import CustomBackground from '../../Components/CustomBackground';
import CustomForground from '../../Components/CustomForground';
import CustomMenu from '../../Components/CustomMenu';
import Home from "../../Components/Api/Home";
import { colors } from '../../globalStyle';
import { useNavigation } from '@react-navigation/native';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    ImageBackground,
    ImageBackgroundBase,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Button,
    ScrollView,
    FlatList
} from 'react-native';
import allData from '../../Components/Api/Home';

 
const HomeComponent = (props,{
    navigateCompleteProfileOne,
    navigateVerification,
    text,
    sideBar,
    navigateBids,
   
}) => { 
  const navigation= useNavigation();
  const [data, setData] = useState(allData);
  const onDelete=(id)=>{
    const newData=[...data];
    const updateData=newData?.filter((todo)=>todo.id!==id)
    setData(updateData);
  }
  const dataCards=({item})=>{
    return(
      <View style={styles.dataContainer}>
        {/* First Row user Name */}
        <View style={{display:"flex", flexDirection:"row",alignItems:"center",}}>
        <View><Image source={item.image}/></View>
        <View style={{marginLeft:10,marginRight:45,}}>
          <Text >{item.name}</Text>
          <View style={{display:"flex",flexDirection:"row",alignItems:"center",}}>
            <Image source={require('../../assets/Stars.png')}/>
            <Text style={{marginLeft:10,}}>(25 reviews)</Text>
          </View>
          
        </View>
        <View><Text>{item.price}/-</Text></View>
      </View>
        {/* First Row user Name */}
        {/* 2nd Row user Name */}
      <View style={[styles.defaultStyle,{marginVertical:12,}]}>
        <View style={[styles.defaultStyle,{marginRight:40,}]}>
          <Image source={require('../../assets/location.jpg')}/>
          <Text style={{marginLeft:15,}}>Rawalpindi,punjab</Text>
        </View>
        <View style={styles.defaultStyle}>
          <Image source={require('../../assets/Bus.jpg')}/>
          <Text style={{marginLeft:15,}}>Suzuki pickup</Text>
        </View>
      </View>
      {/* 2nd Row user Name */}
      {/* 3rd Row user */}
      <View style={[styles.defaultStyle,{justifyContent:"center"}]}>
        
        <TouchableOpacity onPress={()=>onDelete(item.id)} style={styles.container_secondary}>
        <Text style={styles.text_secondary}>Ignore</Text>
       </TouchableOpacity>
      
      
       <TouchableOpacity style={styles.container_primary} onPress={()=> navigation.navigate('Notification')}>
        <Text style={styles.text_primary}>Accept</Text>
       </TouchableOpacity>
      </View>
      {/* 3rd Row user */}
      </View>
    )
  }
    return (
        
            <SafeAreaView style={styles.container}>
              {/* Background Image */}
                 <CustomBackground/>
                 {/* Background Image */}
                 <View style={[styles.headerContainer,styles.defaultStyle,{justifyContent:"space-between"}]}>
                  <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                      <Image source={require('../../assets/Button.png')}/>
                  </TouchableOpacity>
                
                  <Text style={{fontSize:18,color:"#fff",fontFamily:"Poppins-Regular"}}>Home</Text>
                  <View style={styles.defaultStyle}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Notification')} style={{marginRight:10,}}>
                      <Image source={require('../../assets/Bell.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                      <Image source={require('../../assets/profile.png')}/>
                    </TouchableOpacity>
                  </View>
                 </View>
                 <View style={styles.mainContainer}>
                  <View style={{width:"80%",alignItems:"flex-start",marginVertical:5,}}>
                    <Text style={{color:colors.primary,fontSize:16, fontWeight:"600",fontFamily:"Montserrat-Medium"}}>New Bids</Text>
                    </View>
                  
                 
                  <View style={styles.listStyle}>
                    <FlatList style={{zIndex:1,}}  data={data}
                    keyExtractor={(item)=>item.id}
                    renderItem={(item)=>dataCards(item)}
                    showsVerticalScrollIndicator={false}
                    /></View>
                    
                 </View>
                 <View style={styles.MenuContainer}>
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
       alignItems:"center",
        
       
       
        
      },
      headerContainer:{
        width:"100%",
        height:"10%",
        paddingHorizontal:20,
      },
     
      MenuContainer:{
        borderTopLeftRadius:31,
        borderTopRightRadius:31,
       borderColor:"#fff",
        shadowColor:"#4448FF",
        
     width:"101%",
    height:"10%",
    elevation:4,
    justifyContent:"center"
   
    
      },
      dataContainer:{
        width:329,
        height:136,
        padding:10,
        borderRadius:12,
        backgroundColor:"#fff",
       marginVertical:6,
       marginHorizontal:5,
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


      
});


export default HomeComponent;
