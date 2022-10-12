import React, {useState} from 'react';
import CustomBackground from '../../Components/CustomBackground';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { colors } from '../../globalStyle';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';
const ExpandableCoponent=()=>{
  const [layoutHeight,setLayoutHeight] = useState(0);
  return(
    <View style={{
      marginVertical:15,
    }}>
      <Text style={{fontSize:16, fontFamily:"Poppins-Regular",
    color:"#4448FF"}}>Plan overview</Text>
    <Text style={{fontSize:12,fontFamily:"Poppins-Regular",
  color:"#A5A5A5"}}>
      Covers for cancellation, interruption, loss or any {"\n"}
      damage of luggage
    </Text>
    <View>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginVertical:10,}}>
        <Text style={{fontSize:12,fontFamily:"Poppins-Regular",
  color:"#5A5A5A"}}>Trip Cancellation</Text>
 <Image source={require('../../assets/cross_icon.png')}/>
        
      </View>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginVertical:10,}}>
        <Text style={{fontSize:12,fontFamily:"Poppins-Regular",
  color:"#5A5A5A"}}>Cancellation for any reason</Text>
        <Image source={require('../../assets/cross_icon.png')}/>
      </View>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginVertical:10,}}>
        <Text style={{fontSize:12,fontFamily:"Poppins-Regular",
  color:"#5A5A5A"}}>Trip Dealy</Text>
        <Image source={require('../../assets/tick_icon.png')}/>
      </View>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginVertical:10,}}>
        <Text style={{fontSize:12,fontFamily:"Poppins-Regular",
  color:"#5A5A5A"}}>loss/damage of luggage</Text>
        <Image source={require('../../assets/tick_icon.png')}/>
      </View>
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:25,marginBottom:10,}}>
    <TouchableOpacity>
        <View style={{width:142,height:50,borderColor:"#4448FF",borderRadius:7,alignItems:"center",justifyContent:"center",borderWidth:1.5}}>
          <Text style={{fontSize:18,fontFamily:"Poppins-Medium",
  color:"#4448FF"}}>Cancel</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{width:142,height:50,backgroundColor:"#4448FF",borderRadius:7,alignItems:"center",justifyContent:"center"}}>
          <Text style={{fontSize:18,fontFamily:"Poppins-Medium",
  color:"#fff"}}>Buy</Text>
        </View>
      </TouchableOpacity>
      
    </View>
    </View>
  )
}
const SecondCoponent=()=>{
  // const [layoutHeight,setLayoutHeight] = useState(0);
  return(
    <View style={{
      marginVertical:15,
    }}>
      <Text style={{fontSize:16, fontFamily:"Poppins-Regular",
    color:"#4448FF"}}>Plan overview</Text>
    <Text style={{fontSize:12,fontFamily:"Poppins-Regular",
  color:"#A5A5A5"}}>
      Covers for cancellation, interruption, loss or any {"\n"}
      damage of luggage
    </Text>
    <View>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginVertical:10,}}>
        <Text style={{fontSize:12,fontFamily:"Poppins-Regular",
  color:"#5A5A5A"}}>Trip Cancellation</Text>
 <Text style={{fontSize:8,fontFamily:"Poppins-Regular",color:"#A5A5A5"}}>Available as optional upgared</Text>
        
      </View>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginVertical:10,}}>
        <Text style={{fontSize:12,fontFamily:"Poppins-Regular",
  color:"#5A5A5A"}}>Cancellation for any reason</Text>
        <Text style={{fontSize:8,fontFamily:"Poppins-Regular",color:"#A5A5A5"}}>Available as optional upgared</Text>
      </View>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginVertical:10,}}>
        <Text style={{fontSize:12,fontFamily:"Poppins-Regular",
  color:"#5A5A5A"}}>Trip Dealy</Text>
        <Image source={require('../../assets/tick_icon.png')}/>
      </View>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginVertical:10,}}>
        <Text style={{fontSize:12,fontFamily:"Poppins-Regular",
  color:"#5A5A5A"}}>loss/damage of luggage</Text>
        <Image source={require('../../assets/tick_icon.png')}/>
      </View>
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:25,marginBottom:10,}}>
    <TouchableOpacity>
        <View style={{width:142,height:50,borderColor:"#4448FF",borderRadius:7,alignItems:"center",justifyContent:"center",borderWidth:1.5}}>
          <Text style={{fontSize:18,fontFamily:"Poppins-Medium",
  color:"#4448FF"}}>Cancel</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{width:142,height:50,backgroundColor:"#4448FF",borderRadius:7,alignItems:"center",justifyContent:"center"}}>
          <Text style={{fontSize:18,fontFamily:"Poppins-Medium",
  color:"#fff"}}>Buy</Text>
        </View>
      </TouchableOpacity>
      
    </View>
    </View>
  )
}
const ThirdCoponent=()=>{
  // const [layoutHeight,setLayoutHeight] = useState(0);
  return(
    <View style={{
      marginVertical:15,
    }}>
      <Text style={{fontSize:16, fontFamily:"Poppins-Regular",
    color:"#4448FF"}}>Plan overview</Text>
    <Text style={{fontSize:12,fontFamily:"Poppins-Regular",
  color:"#A5A5A5"}}>
      Covers for cancellation, interruption, loss or any {"\n"}
      damage of luggage
    </Text>
    <View>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginVertical:10,}}>
        <Text style={{fontSize:12,fontFamily:"Poppins-Regular",
  color:"#5A5A5A"}}>Trip Cancellation</Text>
 <Image source={require('../../assets/tick_icon.png')}/>
        
      </View>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginVertical:10,}}>
        <Text style={{fontSize:12,fontFamily:"Poppins-Regular",
  color:"#5A5A5A"}}>Cancellation for any reason</Text>
        <Image source={require('../../assets/tick_icon.png')}/>
      </View>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginVertical:10,}}>
        <Text style={{fontSize:12,fontFamily:"Poppins-Regular",
  color:"#5A5A5A"}}>Trip Dealy</Text>
        <Image source={require('../../assets/tick_icon.png')}/>
      </View>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginVertical:10,}}>
        <Text style={{fontSize:12,fontFamily:"Poppins-Regular",
  color:"#5A5A5A"}}>loss/damage of luggage</Text>
        <Image source={require('../../assets/tick_icon.png')}/>
      </View>
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:25,marginBottom:10,}}>
    <TouchableOpacity>
        <View style={{width:142,height:50,borderColor:"#4448FF",borderRadius:7,alignItems:"center",justifyContent:"center",borderWidth:1.5}}>
          <Text style={{fontSize:18,fontFamily:"Poppins-Medium",
  color:"#4448FF"}}>Cancel</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{width:142,height:50,backgroundColor:"#4448FF",borderRadius:7,alignItems:"center",justifyContent:"center"}}>
          <Text style={{fontSize:18,fontFamily:"Poppins-Medium",
  color:"#fff"}}>Buy</Text>
        </View>
      </TouchableOpacity>
      
    </View>
    </View>
  )
}

 
const InsuredLuggageComponent = (props) => { 
 const [enableList, setEnableList] = useState(true);
 const [secondList, setSecondList] = useState(false);
 const [thirdList, setThirdList] = useState(false);
     return (
        
        <SafeAreaView style={styles.container}>
        {/* Background Image */}
           <CustomBackground/>
           {/* Background Image */}
           <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:20}}>
           <TouchableOpacity onPress={()=>props.navigation.goBack()}>
       <Image source={require('../../assets/arrow-back.png')}/>
    </TouchableOpacity>
          
            <Text style={{fontSize:18,color:"#fff",fontFamily:"Poppins-Regular",textAlign:"center",}}> Luggage Insurance</Text>
            <View style={{width:20,}}></View>
            
           </View>
          
           <View style={[styles.mainContainer,styles.commonStyle]}>
              

              {/* Heading */}
              <View style={{width:"100%",marginTop:20,}}>
              <Text style={styles.headingStyle}>Lugage insurance package</Text>
            </View>
              {/* Heading */}
              <View style={{alignItems:"flex-start",marginTop:5,}}>
                  <Text style={styles.paragraphStyle}>Please purchase any plan to get your luggage insured 
                  </Text>
              </View>
              <View>
                <View style={{width:"100%",height:52,justifyContent:"center",marginTop:10,borderRadius:7,backgroundColor:enableList?"#D9DAFF":"#EDEDED",}}>
                  <TouchableOpacity onPress={()=>setEnableList(!enableList)}>
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",
                  paddingHorizontal:20}}>
                      <View>
                        <Text style={{fontSize:15,fontFamily:"Poppins-Regular",lineHeight:23,}}>Basic Plan</Text>
                      </View>
                      
                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text>Rs.1500/-</Text>
                        <Image style={{marginLeft:10,}} source={enableList?require("../../assets/down-arrow.png"):require("../../assets/right-arrow.png")}/>
                      </View>
                      
                    </View>
                  </TouchableOpacity>
                </View>
                <SafeAreaView style={{paddingHorizontal:20,}}>
                 {enableList?<ExpandableCoponent/>:null}
                </SafeAreaView>
                {/* 2nd List */}
                <View style={{width:"100%",height:52,justifyContent:"center",marginTop:10,borderRadius:7,backgroundColor:secondList?"#D9DAFF":"#EDEDED"}}>
                  <TouchableOpacity onPress={()=>setSecondList(!secondList)}>
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",
                  paddingHorizontal:20}}>
                      <View>
                        <Text style={{fontSize:15,fontFamily:"Poppins-Regular",lineHeight:23,}}>Preferred Plan</Text>
                      </View>
                      
                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text>Rs.2500/-</Text>
                        <Image style={{marginLeft:10,}} source={secondList?require("../../assets/down-arrow.png"):require("../../assets/right-arrow.png")}/>
                      </View>
                      
                    </View>
                  </TouchableOpacity>
                  <View>
                    
                  </View>
                </View>
                <SafeAreaView style={{paddingHorizontal:20,}}>
                 {secondList?<SecondCoponent/>:null}
                </SafeAreaView>
                {/* 2nd list */}

                {/* 3rd List */}
                <View style={{width:"100%",height:52,justifyContent:"center",marginTop:10,borderRadius:7,backgroundColor:thirdList?"#D9DAFF":"#EDEDED"}}>
                  <TouchableOpacity onPress={()=>setThirdList(!thirdList)}>
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",
                  paddingHorizontal:20}}>
                      <View>
                        <Text style={{fontSize:15,fontFamily:"Poppins-Regular",lineHeight:23,}}>Essential Plan</Text>
                      </View>
                      
                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text>Rs.3000/-</Text>
                        <Image style={{marginLeft:10,}} source={thirdList?require("../../assets/down-arrow.png"):require("../../assets/right-arrow.png")}/>
                      </View>
                      
                    </View>
                  </TouchableOpacity>
                  <View>
                    
                  </View>
                </View>
                <SafeAreaView style={{paddingHorizontal:20,}}>
                 {thirdList?<ThirdCoponent/>:null}
                </SafeAreaView>
                {/* 3rd list */}
              </View>

              
              
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


export default InsuredLuggageComponent;
