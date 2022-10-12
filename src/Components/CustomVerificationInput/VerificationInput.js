import { StyleSheet, Text, View,TextInput } from 'react-native';
import React from 'react';
import { colors } from '../../globalStyle';

const VerificationInput = () => {
  return (
    <TextInput 
                     maxLength={1}
                     
                     keyboardType={'numeric'}
                     scrollEnabled={false}
                    
                     style={{
                        width:36,
                        height:65,
                        minHeight:56,
                        borderBottomWidth:1,
                        borderBottomColor:'#5a5a5a',
                        alignContent:'center',
                        textAlign:'center',
                        fontSize:40,
                        color:colors.text,
                        // fontFamily:'Poppins-Thin.ttf',
                        fontWeight:'200',
                        marginHorizontal:4,
                      

                        
                    }} />
  )
}

export default VerificationInput;

const styles = StyleSheet.create({})