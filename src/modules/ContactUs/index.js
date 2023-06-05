import React, {useState} from 'react';
import CustomBackground from '../../Components/CustomBackground';
import { colors } from '../../globalStyle';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput
    
} from 'react-native';
import { useSelector } from 'react-redux';
import { eng, Urdu } from '../../Components/Api/Language';


 
const ContactComponent = (props) => { 
    const navigation = useNavigation();
<<<<<<< HEAD
    const data=useSelector((state)=>state.language)
=======
 const data=useSelector.language;
>>>>>>> b5bd23039389ef39bd49eed3aced5ef074a500d9
    return (
        
            <SafeAreaView style={styles.container}>
              {/* Background Image */}
                 <CustomBackground/>
                 {/* Background Image */}
                 <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:20}}>
                 <TouchableOpacity onPress={()=>props.navigation.goBack()}>
             <Image source={require('../../assets/arrow-back.png')}/>
          </TouchableOpacity>
                
                  <Text style={{fontSize:18,color:"#fff",fontFamily:"Poppins-Regular",textAlign:"center",}}> {data?eng.contactUs:Urdu.contactUs}</Text>
                  <View style={{width:20,}}></View>
                  
                 </View>
                {/* Image */}
                 <View style={[styles.mainContainer,styles.commonStyle]}>
                    <View style={styles.contactContainer}>
                        <Image source={require('../../assets/acc.png')}/>
                    </View>
                    {/* Image */}

                    {/* Heading */}
                    <View style={{width:"100%",alignItems:"center"}}>
                    <Text style={styles.headingStyle}>Having Trouble Contact Us</Text>
                  </View>
                    {/* Heading */}
                    <View style={{alignItems:"center"}}>
                        <Text style={styles.paragraphStyle}>Lorem ipsum dolor sit amet, consectetur {"\n"}
                        adipiscing elit. Nullam porta turpis
                        </Text>
                    </View>
                    {/* Email */}
                    <View style={styles.EmailContainer}>
                        <View>
                            <Image source={require('../../assets/envelop.png')}/>
                        </View>
                        
                        <View>
                            <TextInput style={styles.inputStyle} placeholder='Email'
                             placeholderTextColor={"#5A5A5A"}
                             maxLength={20}
                             testID="LoginEmailAddress"
                             textContentType="emailAddress"
                             keyboardType="email-address"
  
                             />
                        </View>
                        
                    </View>
                    {/* Email */}

                    {/* Description */}
                    <View style={[styles.EmailContainer,{
                      height:124,
                      alignItems:"flex-start",
                      
                    }]}>
                        <View>
                            <Image style={{marginTop:7}} source={require('../../assets/discription.png')}/>
                        </View>
                        
                        <View>
                            <TextInput style={styles.inputStyle} 
                            multiline={true}
                            placeholder='Description'
                            placeholderTextColor={"#5A5A5A"}
                            keyboardType={'default'}
                            textAlignVertical={'top'}
                            
                            />
                        </View>
                        
                    </View>
                    {/* Description */}
                    {/* Submit Button */}
                    <View style={styles.buttonContainer}>
                      <CustomButton  text="Submit" type="primary" onPress={()=>navigation.navigate("Home")}/>
                    </View>
                    
                    {/* Submit Button */}
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
        paddingHorizontal:20,
        borderTopLeftRadius:11,
        borderTopRightRadius:11,
        backgroundColor:"white",
       
        
       
       
        
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
        marginTop:30,
        textAlign:"center",
        marginBottom:10,
      },
      EmailContainer:{
        width:"100%",
        height:46,
        flexDirection:"row",
        alignItems:"center",
        borderRadius:10,
        backgroundColor:"white",
        shadowColor:"#007BFE",
        elevation:10,
        paddingHorizontal:10,
        marginVertical:10,
      },
      inputStyle:{
        width:300,
        height:"100%",
        
        marginLeft:10,
      },
      buttonContainer:{
        width:"100%",
        alignItems:"center",
      }
     
});


export default ContactComponent;
