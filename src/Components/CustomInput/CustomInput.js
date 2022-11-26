import { StyleSheet,
   Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    
   } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {colors} from '../../globalStyle';
const CustomInput = ({
    value,
    setValue,
    placeholder,
    label,
    eye,
    scure,
    setScure,
    width,
    index,
    text,
    image,
    calenderr,
    error,
    password,
    onFocus=()=>{},
    ...props
}) => {
  
   const [isFocused,setIsFocused]=useState(false);
   const [show, setShow] = useState(password);
   const showPassword=require("../../assets/show.png");
   const hidePassword=require("../../assets/hide.png");
    const calender=require("../../assets/calender_icon.png");
    
  return (
    <SafeAreaView style={{marginVertical:5,}}>
      <View style={{zIndex:1, width:width,marginBottom:-15,justifyContent:"center",alignItems:"flex-start",}}>
          <Text style={styles.labelStyle}>{label}</Text>
        </View> 
        <View style={[styles.textInput,{borderColor:error?"red":isFocused?"#666666":"gray",
                borderWidth:isFocused?1:1,marginVertical:7,
                flexDirection:"row" 
                }]}>
         
         <TextInput style={{color:colors.text,flex:1,}}
     value={value}
     onChangeText={setValue}
     placeholder={placeholder}
    secureTextEntry={show}
     autoCorrect={false}
     maxLength={15}
     onFocus={()=>{
      onFocus();
      setIsFocused(true);
     }}   
     onBlur={()=>{
      setIsFocused(false);
     }}/>
         <View style={{display:eye, zIndex:index, flexDirection:"row",alignItems:'center', }}>
                       
                         <TouchableOpacity onPress={()=>setShow(!show)} >
                          <Image source={calenderr?calender:show?showPassword:hidePassword} width="100%" height="100%"/>
                          </TouchableOpacity>
                        <Text > {text}  </Text>
              </View>          
                       
                 
     
     </View>
     {error && (
     <Text style={{color:"red",fontSize:12,marginTop:7}}>
      {error}
      </Text>
     )}
     </SafeAreaView>   
             
       
                                               
    
                   

   
  )
}

export default CustomInput

const styles = StyleSheet.create({
   
    textInput:{
        color:"#5A5A5A",
        fontSize:12,
        fontWeight:"400",
        borderRadius:5,
        width:287,height:68,
        borderColor:"#666666", 
        borderWidth:1,
        alignItems:"center",
        paddingHorizontal:5,
      },
      labelStyle:
        {color:"#5A5A5A",fontSize:14,fontWeight:"400", backgroundColor:"#ffffff",paddingHorizontal:2, marginLeft:10,
    },
      
})