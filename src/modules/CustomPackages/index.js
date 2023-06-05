import React, {useState} from 'react';

import CustomBackground from '../../Components/CustomBackground';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../globalStyle';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    View
   
} from 'react-native';
import { set } from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { eng, Urdu } from '../../Components/Api/Language';


 
const PackageComponent = (props) => {
<<<<<<< HEAD

=======
>>>>>>> b5bd23039389ef39bd49eed3aced5ef074a500d9
   const [backColor, setBackColor] = useState(true);
   const [pref, setPref] = useState(false);
   const [ultimate, setUltimate] = useState(false);

<<<<<<< HEAD
   const data=useSelector((state)=>state.language)
console.log(data)
=======
const data=useSelector.language
>>>>>>> b5bd23039389ef39bd49eed3aced5ef074a500d9
    const navigation = useNavigation();
    const essential=()=>{
      if(backColor===false){
        setPref(false);
        setBackColor(true);
        setUltimate(false);
      }
      
    }
    const Prefrered=()=>{
      if(pref===false){
        setPref(true);
        setBackColor(false);
        setUltimate(false);
      }
      
    }
    const Ulti=()=>{
      if(ultimate===false){
        setPref(false);
        setBackColor(false);
        setUltimate(true);
      }
      
    }
  
    return (
        
            <SafeAreaView style={styles.container}>
              {/* Background Image */}
                 <CustomBackground/>
                 {/* Background Image */}
                 <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:20}}>
                 <TouchableOpacity onPress={()=>props.navigation.goBack()}>
             <Image source={require('../../assets/arrow-back.png')}/>
          </TouchableOpacity>
                
                  <Text style={{fontSize:18,color:"#fff",fontFamily:"Poppins-Regular",textAlign:"center"}}>{data?eng.packages:Urdu.packages}</Text>
                  <View style={{width:20,}}></View>
                  
                 </View>
                 <View style={[styles.mainContainer,styles.commonStyle]}>
                  {/* Button Features */}
                  <View style={[styles.defaultStyle,{justifyContent:"space-between",width:"100%",paddingTop:50,}]}>

                    <TouchableOpacity onPress={()=>essential()}>
                         <View style={[styles.headerContainer,{backgroundColor:backColor?"#4448FF":"#fff"}]}>
                        <Text style={{color:backColor?"#fff":"#5A5A5A"}}>{data?eng.essential:Urdu.essential}</Text>
                        <Text style={{color:backColor?"#fff":"#5A5A5A"}} >{data?eng.fourFeacture:Urdu.fourFeacture}</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>Prefrered()}>
                         <View style={[styles.headerContainer,{backgroundColor:pref?"#4448FF":"#fff"}]}>
                        <Text style={{color:pref?"#fff":"#5A5A5A"}}>{data?eng.Prefrered:Urdu.Prefrered}</Text>
                        <Text style={{color:pref?"#fff":"#5A5A5A"}} >{data?eng.sevenFeatures:Urdu.sevenFeatures}</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>Ulti()}>
                         <View style={[styles.headerContainer,{backgroundColor:ultimate?"#4448FF":"#fff"}]}>
                        <Text style={{color:ultimate?"#fff":"#5A5A5A"}}>{data?eng.ultimate:Urdu.ultimate}</Text>
                        <Text style={{color:ultimate?"#fff":"#5A5A5A"}} >13 {data?eng.feature:Urdu.feature}</Text>
                    </View>
                    </TouchableOpacity>
                    

                    
                   
                  </View>
                  {/* Button Feature */}
                  {/* Heading */}
                  <View>
                    <Text style={styles.headingStyle}>{data?eng.unlockFeature:Urdu.unlockFeature}</Text>
                  </View>
                  {/* Heading */}
                  
                  {/* Listing feature */}
                  <View style={{marginBottom:20,}}>
                    
                      <View style={[styles.defaultStyle,{justifyContent:"flex-start",alignItems:"flex-start",}]}>
                        <Image source={require('../../assets/Award.png')}/>
                        <View style={{marginLeft:15,}}>
                        <Text>{data?eng.unlimitedLoad:Urdu.unlimitedLoad}</Text>
                      <Text style={styles.paragraphStyle}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum ....</Text>
                    </View>
                    </View>
                    {/* 2nd feature */}
                    <View style={[styles.defaultStyle,{justifyContent:"flex-start",alignItems:"flex-start",marginVertical:15,}]}>
                        <Image source={require('../../assets/Award.png')}/>
                        <View style={{marginLeft:15,}}>
                        <Text>{data?eng.daystoPay:Urdu.daystoPay}</Text>
                      <Text style={styles.paragraphStyle}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum ....</Text>
                    </View>
                    </View>
                    {/* 2nd feature */}

                     {/* 3nd feature */}
                     <View style={[styles.defaultStyle,{justifyContent:"flex-start",alignItems:"flex-start",marginBottom:15,}]}>
                        <Image source={require('../../assets/Award.png')}/>
                        <View style={{marginLeft:15,}}>
                        <Text>Live Load Updates</Text>
                      <Text style={styles.paragraphStyle}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum ....</Text>
                    </View>
                    </View>
                    {/* 3nd feature */}
                     {/* 4nd feature */}
                     <View style={[styles.defaultStyle,{justifyContent:"flex-start",alignItems:"flex-start",marginBottom:15}]}>
                        <Image source={require('../../assets/Award.png')}/>
                        <View style={{marginLeft:15,}}>
                        <Text>Add Free</Text>
                      <Text style={styles.paragraphStyle}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum ....</Text>
                    </View>
                    </View>
                    {/* 4nd feature */}
                  </View>
                  {/* Listing feature */}
                  {/* Plan */}
                  <View style={{width:"100%",height:81, flexDirection:"row",justifyContent:"space-between"}}>
                    {/* First Plan */}
                  <View style={{width:168,height:"100%",borderWidth:1,borderColor:"#007BFE",borderRadius:7,paddingHorizontal:10,paddingVertical:1}}>
                  <TouchableOpacity>
                    <View>
                      <Text style={{fontSize:16,fontFamily:"Poppins-Medium",color:"#5A5A5A",marginVertical:1,}}>Monthly Plan</Text>
                      <View style={{alignItems:"flex-start"}}>
                        <Text>
                      <Text style={{color:"#007BFE",fontSize:16,marginRight:2,}}>19.99 
                      </Text>                
                      <Text style={{fontFamily:"Poppins-Regular",
                    fontSize:12,}}> USD/month {"\n"}
                      Billed Monthly</Text></Text>
                    </View></View>
                  </TouchableOpacity>
                  </View>
                  {/* First Plan */}

                   {/* 2nd Plan */}
                   <View style={{width:168,height:"100%",borderWidth:1,borderColor:"#007BFE",borderRadius:7,paddingHorizontal:10,paddingVertical:1,backgroundColor:"#D9DAFF"}}>
                  <TouchableOpacity>
                    <View>
                      <Text style={{fontSize:16,fontFamily:"Poppins-Medium",color:"#5A5A5A",marginVertical:1,}}>Annual Plan</Text>
                      <View style={{alignItems:"flex-start"}}>
                        <Text>
                      <Text style={{color:"#007BFE",fontSize:16,marginRight:2,}}>16.67 
                      </Text>                
                      <Text style={{fontFamily:"Poppins-Regular",
                    fontSize:12,}}> USD/month {"\n"}
                    &199.99  Billed Monthly</Text></Text>
                    </View></View>
                  </TouchableOpacity>
                  </View>
                  {/* 2nd Plan */}
                  </View>
                  {/* Plan */}

                  {/* Subcribe */}
                  <View style={{width:"100%",alignItems:"center"}}>
                  <View style={{width:320,height:60,alignItems:"center",justifyContent:"center",backgroundColor:"#4448FF",marginTop:25,borderRadius:7,}}>
                    <TouchableOpacity>
                      <Text style={{fontFamily:"Poppins-Medium",fontSize:18,color:"#fff"}}>Subscribe 199.99 USD/year</Text>
                    </TouchableOpacity>
                  </View>
                  </View>
                  {/* Subcribe */}

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
        width:104,height:50,borderColor:"#007BFE",borderWidth:1,borderRadius:8,padding
      :3,backgroundColor:"#4448FF",
    },
    commonStyle:{
      paddingHorizontal:25,
      
    },
     
   
    
    
      defaultStyle:{
  display:"flex",
  flexDirection:'row',
  alignItems:'center',
  justifyContent:"space-between"
},
headingStyle:{
  fontSize:18,
  fontFamily:"Poppins-Medium",
  color:"#4448FF",
  marginVertical:20,
},
smallHeading:{
fontFamily:"Poppins-Medium",
fontSize:14,
color:"#5A5A5A",
lineHeight:38,
},
paragraphStyle:{
  fontSize:10,
  fontFamily:"Poppins-Light",
  color:"#A5A5A5",
  lineHeight:16,
}

     


      
});


export default PackageComponent;
