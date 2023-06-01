
import React from 'react'
import
 { StyleSheet,
 Text,
 View,
 SafeAreaView,
 Image,
TouchableOpacity
}
 from 'react-native';
 import CustomInput from '../../Components/CustomInput';
 import {colors} from '../../globalStyle';
 import { useNavigation } from '@react-navigation/native';
const Accounts = ({
  image,
  paraOne,
  paraTwo,
  labelOne,
  labelTwo,

}) => {
  const navigation =useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.easpaisaContainer}>
        {/*Bank Image Container */}
      <View style={styles.imageContainer}>
      <Image style={styles.image} resizeMode={"stretch"} source={image}/>
      </View>
    {/* Bank Image Container */}
    <View style={styles.textContainer}>
    <Text style={styles.text}>{paraOne}</Text>
<Text style={[styles.text,{color:colors.primary}]}>{paraTwo}</Text>
<CustomInput
eye={'none'}
label={labelOne}
placeholder={'92327482937'}
width={190}
/>
<CustomInput
eye={'none'}
label={labelTwo}
placeholder={'....'}
width={85}
/>
    </View>
    <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={()=>navigation.navigate('JazzCash')}>
    <View style={styles.button}>
    <Text style={styles.buttonText}>Cancel</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Bank')}>
    <View style={[styles.button,{backgroundColor:colors.primary}]}>
    <Text style={[styles.buttonText,{color:'#fff'}]}>Confirm</Text>
    </View>
    </TouchableOpacity>
    </View>
      </View>
    </SafeAreaView>
  )
}

export default Accounts;

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  alignItems:"center",
  justifyContent:"center",
},
easpaisaContainer:{
  width:329,
  height:523,
  backgroundColor:"#fff",
  borderRadius:7,
  shadowColor:"#6C35EE",
  elevation:4,
},
imageContainer:{
  marginTop:15,
  marginBottom:30,
  alignItems:"center"
},
image:{
  width:132,
  height:76
},
textContainer:{
  alignItems:"center",
},
text:{
  fontSize:14,
  textAlign:"center",
  color:colors.dot,
  letterSpacing:0.5,
  lineHeight:21,
  marginBottom:10,
},
buttonContainer:{
  flexDirection:"row",
  marginVertical:15,
  alignItems:"center",
  justifyContent:"space-evenly",
  marginHorizontal:10,
},
button:{
  width:142,
  height:50,
  borderWidth:1,
  borderColor:colors.primary,
borderRadius:7,
alignItems:"center",
justifyContent:"center",
},
buttonText:{
  fontSize:18,
  fontWeight:"500",
  color:colors.primary,
}
})