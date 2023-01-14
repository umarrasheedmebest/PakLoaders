import React,{useState} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import CustomContainer from '../../Components/CustomContainer';
import CustomHeader from '../../Components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../globalStyle';
import CustomButton from '../../Components/CustomButton';

import Sure from '../../Components/sure';
import CustomCards from '../../Components/CustomCards';
import { useSelector } from 'react-redux';
import {eng,Urdu} from '../../Components/Api/Language'
const DebitCardComponent = ({ }) => {
    const navigation=useNavigation()
const [card, setCard] = useState(false)
const data=useSelector.language
    return (
        <>
        {card?
        <>
        <Sure 
        addCard={true}
        onPress={()=>setCard(!card)}
        confirmPress={()=>navigation.navigate('EasyPaisa')}
        />
         <CustomHeader
        text={data?eng.creditCard:Urdu.creditCard}
        ContentView={
            <>
          <CustomContainer
          vari={colors.dot}
          primary={'#007BFE'}
          /> 
          {/* Pay Button */}
          <View style={{width:"100%",alignItems:"center",marginTop:30,marginBottom:15}}>
            <TouchableOpacity>
                <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{data?eng.payNow:Urdu.payNow}</Text>
                </View>
            </TouchableOpacity>
          </View>
          {/* Pay Button */}
          {/* Add Button */}
            <View style={{width:"100%",alignItems:"flex-end"}}>
            <TouchableOpacity onPress={()=>setCard(!card)}>
                <View style={styles.addButton}>
                <Image style={{width:32,height:32}} source={require('../../assets/plus.png')}/>
                </View>
            </TouchableOpacity>
            </View>
          {/* Add Button */}

          </>
        }
        />
        </>
        
        :
        <CustomHeader
        text={'Credit/Debit Card'}
        ContentView={
            <>
            <CustomCards/>
          <CustomContainer
          vari={colors.dot}
          primary={'#007BFE'}
          /> 
          {/* Pay Button */}
          <View style={{width:"100%",alignItems:"center",marginTop:30,marginBottom:15}}>
            <TouchableOpacity>
                <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{data?eng.payNow:Urdu.payNow}</Text>
                </View>
            </TouchableOpacity>
          </View>
          {/* Pay Button */}
          {/* Add Button */}
            <View style={{width:"100%",alignItems:"flex-end"}}>
            <TouchableOpacity onPress={()=>setCard(!card)}>
                <View style={styles.addButton}>
                <Image style={{width:32,height:32}} source={require('../../assets/plus.png')}/>
                </View>
            </TouchableOpacity>
            </View>
          {/* Add Button */}

          </>
        }
        />
        }
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
       shadowColor:"#007BFE",
       width:329,
       height:216,
       elevation:4,
       borderRadius:15,
       paddingVertical:10,
        paddingLeft:8,
        
    },
    subConatiner:{
        width:289,
        height:67,
        backgroundColor:"#D9DAFF",
        borderRadius:7,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:15
    },
    CardsContainer:{
      marginVertical:15,  
    },
    buttonContainer:{
        width:220,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:colors.primary,
        borderRadius:7
    },
    buttonText:{
        fontSize:18,
        fontFamily:"Poppins-Medium",
        color:"#fff",
        lineHeight:27,
    },
    addButton:{
        width:59,
        height:59,
        backgroundColor:colors.primary,
        borderRadius:100,
        alignItems:"center",
        justifyContent:"center"
    },
    addButt:{
        width:32,
        height:32,
        backgroundColor:"#fff",
        borderRadius:100,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        color:colors.primary,
        fontSize:20,
        
    }
});

export default DebitCardComponent;
