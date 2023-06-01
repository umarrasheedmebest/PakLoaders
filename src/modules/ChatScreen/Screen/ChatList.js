import * as React from 'react';
import { View, Text, Image, style, StyleSheet, TouchableOpacity, Modal, ScrollView, TextInput, Dimensions } from "react-native";

import ChatList_CardDesign from './ChatList_CardDesign';

export default function ChatList({ navigation }) {
    return (
        <View style={{ backgroundColor: '#4448FF', flex: 1, }}>
            <View style={{
                backgroundColor: 'white', flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15,}}>
                
                <View style={{ flex: 1, margin: 20, marginTop: 20 }}>
                    <ScrollView>

                        <ChatList_CardDesign
                            time={'3s ago'}
                            name={'Hashim'}
                            heading2={'hey how are you?'}
                            person_img={require('../../assets/Chat/profile_pic_1.png')}
                            totalMessage={'1'}
                            totalMessage_color = {'#4448FF'}
                        />
                        <ChatList_CardDesign
                            time={'02:06 AM'}
                            name={'Moiz Waseem'}
                            heading2={'Yeaah! can i call you back later?'}
                            person_img={require('../../assets/Chat/profile_pic_2.png')}

                        />
                        <ChatList_CardDesign
                            time={'Yesterday'}
                            name={'Wasif Ali'}
                            heading2={'hey how are you?'}
                            person_img={require('../../assets/Chat/profile_pic_3.png')}

                        />
                        <ChatList_CardDesign
                            time={'Yesterday'}
                            name={'Nauman'}
                            heading2={'hey how are you?'}
                            person_img={require('../../assets/Chat/profile_pic_4.png')}

                        />
                        <ChatList_CardDesign
                            time={'20/08/2021'}
                            name={'Amir Shehzad'}
                            heading2={'Can i call you?'}
                            person_img={require('../../assets/Chat/profile_pic_5.png')}

                        />

                    </ScrollView>
                </View>
            </View>
        </View>
    )
}