import { StyleSheet,
   Text,
    View ,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback

} from 'react-native'
import React from 'react';
import { colors } from '../../globalStyle';

const {primary} = colors;
const KeyboardAvoidingWrapper = ({
    childern

}) => {
  return (
    <KeyboardAvoidingView style={{flex:1,backgroundColor:"#fff"}}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {childern}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidingWrapper

const styles = StyleSheet.create({
    container_primary:{
        backgroundColor:"#4448FF",
        width:166,
        height:48,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10,
        borderRadius:7
    },
    container_secondary:{
      backgroundColor:"#4448FF",
      width:220,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:10,
      marginBottom:10,
      borderRadius:7
    },
    container_tertiary:{
      backgroundColor:"#ffffff",
      width:220,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:10,
      marginBottom:10,
      borderRadius:7,
      borderColor:"#4448FF",
      borderWidth:2,
    },
    text_primary:{
        fontSize:20,
        color:"#fff",
        fontWeight:"400"
    },
    text_secondary:{
      fontSize:20,
      color:"#fff",
      fontWeight:"400"
  },
  text_tertiary:{
    fontSize:20,
    color:"#4448FF",
    fontWeight:"400"
},
})