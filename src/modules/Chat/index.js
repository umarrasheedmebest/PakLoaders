import React, {useState} from 'react';
import CustomBackground from '../../Components/CustomBackground';
import { colors } from '../../globalStyle';
import Chat from '../../Components/Api/Chat';
import CustomHeader from '../../Components/CustomHeader'
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    FlatList
    ,Image,
    TouchableOpacity
    
} from 'react-native';


 
const ChatComponent = ({
    sideBar
}) => { 
 
  const dataCards=({item})=>{
        
    return(
        <>
        
      <TouchableOpacity >
      <View style={styles.dataContainer}>
        {/* First Row user Name */}
        <View style={{display:"flex", flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
          <View style={{flexDirection:"row"}}>
        <View style={{position:"relative"}}><Image style={{width:38,height:38}} source={item.image}/>
        <Image style={{width:8,height:8,position:"absolute",right:0,bottom:2}} source={item.active}/>
        </View>
        <View style={{marginLeft:10,}}>
          <Text style={{fontSize:14,color:colors.text,fontWeight:"400"}}>{item.name}</Text>
          <View>
            <Text>{item.text}</Text>
          </View>
          
        </View>
        </View>
        <View style={{alignItems:"flex-end"}}>
           <Text style={{fontSize:10,fontWeight:"400",color:"#9D9D9D"}}>{item.time}</Text>
           <View>
            <Image source={item.messageNo}/>
           </View>
        </View>
      </View>
        {/* First Row user Name */}
       
     
      </View>
      </TouchableOpacity>
      </>
    )
  }
 
    return (
        
           <CustomHeader
           postFlat={true}
           text={'Chats'}
           ContentView={
            

            <View style={{alignItems:"center"}}>
            <FlatList style={{zIndex:1,}}  data={Chat}
                    keyExtractor={(item)=>item.id}
                    renderItem={(item)=>dataCards(item)}
                    showsVerticalScrollIndicator={false}
                    />
            </View>
           }
           Chatprofile={true}
           />
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       alignItems:"center",
       justifyContent:"center",
    },
    listStyle:{
      width:"100%",
      height:100,
      borderWidth:4,
    },
    dataContainer:{
        width:329,
        height:54,
        padding:10,
        borderRadius:12,
        backgroundColor:"#fff",
       marginVertical:6,
       marginHorizontal:2,
       
       
       shadowColor: "#6C35EE",
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


export default ChatComponent;
