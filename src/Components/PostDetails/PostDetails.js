import { StyleSheet, Text, View,Image,ImageBackground,TouchableOpacity ,FlatList,useWindowDimensions} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { colors } from '../../globalStyle';

const PostDetails = () => {
    const data =useSelector((state)=>state.post.singlePostData);
    const {height,width}=useWindowDimensions();
    const dataCards=(item)=>{
        console.log(item)
      return  <View style={[styles.container,{height,width}]}>
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
    }
  return (
    <View>
      <FlatList style={{zIndex:2,}}  data={data}
         keyExtractor={(item)=>item.id}
         renderItem={(item)=>dataCards(item)}
         showsVerticalScrollIndicator={false}
         />
    </View>
  )
}

export default PostDetails

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