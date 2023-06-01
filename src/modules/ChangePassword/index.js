import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import CustomHeader from '../../Components/CustomHeader';
import CustomInput from '../../Components/CustomInput';
import { colors } from '../../globalStyle';

const ChangePasswordComponent = ({ }) => {
    const data=useSelector.language
    return (
        <CustomHeader text={'Change Password'}
        ContentView={
            <View style={styles.container}>
                <View style={{width:111,height:111,borderWidth:1,borderColor:"#67A5FF",borderRadius:100,justifyContent:"center",alignItems:"center",position:"relative"}}>
                    <Image style={{width:94,height:94}} source={require('../../assets/PassProfile.png')}/>
                    <Image style={{width:10,height:10,position:"absolute",right:16,bottom:5}} source={require('../../assets/DotYellow.png')}/>
                </View>
                <View style={{marginVertical:8}}>
                    <Text style={{fontSize:16,fontFamily:"Poppins-Medium",color:colors.primary}}>Ali Khan</Text>
                </View>
                <View style={{marginVertical:50}}>
                    <CustomInput 
                    placeholder={'.......'}
                    label={'Old Password'}
                    width={110}
                    text="Show"
                    />
                     <CustomInput 
                    placeholder={'.......'}
                    label={'New Password'}
                    width={110}
                    text="Show"
                    />
                     <CustomInput 
                    placeholder={'.......'}
                    label={'Confirm Password'}
                    width={135}
                    text="Show"
                    />
                </View>
                <View>
                    <TouchableOpacity>
                        <View style={{width:166,height:48,backgroundColor:colors.primary,alignItems:"center",justifyContent:"center",
                        borderRadius:7,
                    }}>
                            <Text style={{fontSize:20,fontFamily:"Poppins-Regular",color:"#fff"}}>Confirm</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        }
        />
    );
};

const styles = StyleSheet.create({
    container: {
        width:"100%",
        alignItems:"center"
    },
});

export default ChangePasswordComponent;
