import React,{useState} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Image
} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import CustomInput from '../../Components/CustomInput';
import { colors } from '../../globalStyle';
import CustomButton from '../../Components/CustomButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { IMAGE_URL } from '../../Redux/constent/constent';
const EditProfileComponent = ({updateUserName ,updateUserImage}) => {
  const userData= useSelector((state)=>state.user.getUserResponse);
const [editName, setEditName] = useState('')

    return (
       <>
       <CustomHeader text={'Edit Profile'}
       ContentView={
        <View style={styles.container}>
            {/* User MapData */}
            {userData.map((res)=>{
                const data={
                    "full_name":editName
                }
                return <View key={res.id} style={{width:"100%",alignItems:"center"}}>
                    {/* Profile */}
                    <TouchableOpacity onPress={()=>updateUserImage()}>
            <View style={{position:"relative"}}>
                <Image style={{width:94,height:94,borderRadius:100}} source={{uri:`${IMAGE_URL}${res.user_image}`}}
                />
                <Image style={{position:"absolute",width:19,height:19,bottom:0,right:9,}} source={require('../../assets/camera.png')}/>
            </View>
            </TouchableOpacity>
            {/* Name */}
            <View style={{marginVertical:10}}>
                <Text style={{fontSize:16,fontWeight:"400",fontFamily:"Poppins-Regular",color:colors.primary}}>{res.full_name}</Text>
            </View>
            {/* Stars  */}
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Image style={{width:16,height:15.28,}} source={require('../../assets/Star.png')}/>
                <Image style={{width:16,height:15.28,}} source={require('../../assets/Star.png')}/>
                <Image style={{width:16,height:15.28,}} source={require('../../assets/Star.png')}/>
                <Image style={{width:16,height:15.28,}} source={require('../../assets/Star.png')}/>
                <Image style={{width:16,height:15.28,}} source={require('../../assets/Star.png')}/>
                <Text style={{fontSize:9,fontWeight:"400",fontFamily:"Montserrat-Regular",color:colors.text}}> (4.5)</Text>
                <Text style={{fontSize:12,fontWeight:"400",fontFamily:"Poppins-Regular",color:colors.primary}}>  View all reviews</Text>
            </View>
            {/* Stars */}
            <View style={{marginVertical:20,marginHorizontal:5}}>
               
               <CustomInput label={'Full Name'} width={90} eye={'none'}
               placeholder={'Ali Khan'}
               value={editName}
               setValue={(res)=>setEditName(res)}
               />
               {/* <CustomInput label={'Mobile Number'} width={120} eye={'none'}
               placeholder={'92327482937'}
               />
               <CustomInput label={'Secondary Mobile Number'} width={190} eye={'none'}
               placeholder={'92327482937'}
               />
               <CustomInput label={'CNIC Number'} width={110} eye={'none'}
               placeholder={'36464-263273-1'}
               />
               <CustomInput label={'Issue Date'} width={90} eye={'none'}
               placeholder={'12-02-2019'}
               />
               <CustomInput label={'Expiry Date'} width={90} eye={'none'}
               placeholder={'12-02-2024'}
               /> */}
               {/* <CustomInput label={'City'} width={40} eye={'none'}
               placeholder={'Rawalpindi'}
               />
               <CustomInput label={'Province'} width={75} eye={'none'}
               placeholder={'Punjab'}
               /> */}
           </View>
           {/* Buttons */}
           <View>
          <TouchableOpacity onPress={()=>updateUserName(data)}>
           <View style={styles.buttonStyle}>
           <Text style={styles.ButtonText}>Save</Text>
           </View>
          </TouchableOpacity>
          <TouchableOpacity>
           <View style={[styles.buttonStyle,{backgroundColor:"#fff",borderWidth:1,borderColor:colors.primary,marginBottom:70}]}>
           <Text style={[styles.ButtonText,{color:colors.primary}]}>Cancel</Text>
           </View>
          </TouchableOpacity>
           </View>
           {/* Buttons */}
                </View>
                
            })}
            {/* User MapData */}
            
           
        </View>
       }
       />
       </>
    );
};

const styles = StyleSheet.create({
    container: {
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        height:"100%",
        marginTop:40
    },
    buttonStyle:{
        width:220,
        height:50,
        borderRadius:7,
        backgroundColor:"#4448FF",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:20,
    },
    ButtonText:{
        fontSize:18,
        fontFamily:"Poppins-Medium",
        color:"#fff",
    }
});

export default EditProfileComponent;
