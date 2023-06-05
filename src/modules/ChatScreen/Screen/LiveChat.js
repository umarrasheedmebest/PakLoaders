<<<<<<< HEAD
import { useRoute } from '@react-navigation/native';
import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  style,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import {Bubble, GiftedChat,Send} from 'react-native-gifted-chat';
import CustomHeader from '../../../Components/CustomHeader';
import { colors } from '../../../globalStyle';

const {height, width} = Dimensions.get('window');

export default function LiveChat({navigation}) {
  
  const [messages, setMessages] = useState([]);
const route=useRoute();
const {userName,picture,is_active}=route.params;
  console.log(route)
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  const renderSend=(props)=>{
    return(
        <Send 
        {...props}
        >
            <View>
                <Image source={require('../../../assets/send_icon.png')}/>
            </View>

        </Send>
    )
  }
  const scrollToBottomComponent=(props)=>{
    return(
        <Text style={{backgroundColor:"black"}}>H</Text>
    )
  }
  const renderBubble=(props)=>{
    return(
      <Bubble
      {...props}
      wrapperStyle={{
        right:{
           backgroundColor:colors.primary
        }
       
      }}
      textStyle={{
        right:{
          color:'#fff'
        }
      }}
      />
    )
  }
  return (
    <>
      <CustomHeader
        postFlat={true}
        text={userName}
        Chatprofile={true}
        picture={picture}
        ContentView={
          // Background white
          <View>
            <View
              style={{
                backgroundColor: 'white',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                width: '100%',
                height: '100%',
              }}>
              {/* activity */}
              <View style={{flex: 1,backgroundColor:"#fff"}}>
                <GiftedChat
                  messages={messages}
                  onSend={messages => onSend(messages)}
                  user={{
                    _id: 1,
                  }}
                  alwaysShowSend
                  placeholder={"Type a message"}
                  renderSend={renderSend}
                  scrollToBottom
                  scrollToBottomComponent={scrollToBottomComponent}
                  renderBubble={renderBubble}
                />
              </View>
            </View>
          </View>
        }
      />
    </>
  );
=======
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
>>>>>>> b5bd23039389ef39bd49eed3aced5ef074a500d9
}
