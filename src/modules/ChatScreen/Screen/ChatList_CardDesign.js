import * as React from 'react';
import { View, Text, Image, style, StyleSheet, TouchableOpacity, Modal, ScrollView, TextInput, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';


export default function ChatList_CardDesign(props) {
    const navigation = useNavigation();
    return (
        // background white and rounded all side
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', elevation: 5, marginHorizontal: 3,
            backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10
        }}>

        <TouchableOpacity onPress = {() => navigation.navigate('LiveChat')}>
            {/* Notification icon and details */}
            <View style={{ flexDirection: 'row', }}>
                {/* Notification Icon */}
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ alignSelf: 'baseline', alignItems: 'center', }}>
                        <Image source={require('../../assets/Chat/profile_pic_1.png')} />
                    </View>
                </View>
                {/* TEXT DETAILS */}
                <View style={{ marginLeft: 15, alignSelf: 'center' }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{props.name}</Text>
                    <Text style={{ fontSize: 10 }}>{props.heading2}</Text>
                </View>

            </View>
            </TouchableOpacity>
             {/* total Message and time */}
            <View style={{ marginRight: 10, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 10, color: '#9D9D9D' }}>
                    {props.time}
                </Text>
                <View style={{
                    backgroundColor: props.totalMessage_color, borderRadius: 10, marginTop: 5, marginRight: 2,
                    height: 15, width: 15, justifyContent: 'center'}}>
                
                    <Text style={{
                        fontSize: 6, fontWeight: 'bold', color: 'white', alignSelf: 'center',
                    }}>
                        {props.totalMessage}
                    </Text>
                </View>
            </View>
        
        </View>



    )
}

