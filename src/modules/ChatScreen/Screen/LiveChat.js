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
}
