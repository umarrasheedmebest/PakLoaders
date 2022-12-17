import * as React from 'react';
import { View, Text, Image, style, StyleSheet, TouchableOpacity, Modal, ScrollView, TextInput, Dimensions } from "react-native";
import CustomHeader from '../../../Components/CustomHeader';
const { height, width } = Dimensions.get('window');



export default function LiveChat({ navigation }) {
    return (
        <>
        <CustomHeader
        postFlat={true}
        text="Amir"
        Chatprofile={true}
        ContentView={
             // Background white
             <View >
       
            <View style={{ backgroundColor: 'white', borderTopLeftRadius: 15, borderTopRightRadius: 15,width:"100%",height:"100%" }}>
                {/* activity */}
                <View style={{ flex: 1, }}>
                   

                    <View style={{
                        justifyContent: 'space-between',
                        backgroundColor: '#EDEDED', marginTop: 'auto', borderRadius: 60, flexDirection: 'row'
                    }}>
                        {/* camera_icon microphone_icon attachment_icon */}
                        <View style={{ flexDirection: 'row', marginHorizontal: 10, alignItems: 'center', flex: 1 }}>
                            
                            <Image source={require('../../../assets/camera_icon.png')}
                                style={{ marginHorizontal: 5 }}
                            />
                            <Image source={require('../../../assets/microphone_icon.png')}
                                style={{ marginHorizontal: 5 }}
                            />
                            <Image source={require('../../../assets/attachment_icon.png')}
                                style={{ marginHorizontal: 5 }}
                            />
                            <View style={{ flex: 1 }}>
                                <TextInput placeholder='Type Message' />
                            </View>
                        </View>
                        {/* message send button */}
                        <View style={{ flexDirection: 'row', marginRight: 10, alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Image source={require('../../../assets/send_icon.png')}
                                    style={{  marginTop: 5 }}
                                />
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>
            </View>
            </View>
        }
        />
       
        </>
    )
}
