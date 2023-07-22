import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import Clipboard from '@react-native-community/clipboard';
import Chat from '../../modules/Chat/Chat';
import * as React from 'react';
import { Button,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavigationService from '../../navigation/NavigationService';

// function MyBackButton() {
//   const navigation = useNavigation();

//   return (
//     <Button
//       title="Back"
//       onPress={() => {
//         navigation.navigate('Chat');
//       }}
//     />
//   );
// }
export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}
const getFcmToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
//   Alert.alert('Device Token', fcmToken, [ {text: 'Copy message', onPress: () => CopyAlertMessage(), style: 'cancel'} ], { cancelable: true})
//   CopyAlertMessage = async () => {
//     Clipboard.setString(fcmToken)
// }
  console.log(fcmToken, 'the old token');
  
  if (!fcmToken) {
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log(fcmToken, 'the new genrated token');
        await AsyncStorage.setItem('fcmToken', fcmToken);
//         Alert.alert('Device Token', fcmToken, [ {text: 'Copy message', onPress: () => CopyAlertMessage(), style: 'cancel'} ], { cancelable: true})
//   CopyAlertMessage = async () => {
//     Clipboard.setString(fcmToken)
// }
      }
    } catch (error) {
      console.log(error, 'error rasied in fcmToken');
    }
  }
};
export const notificationListener = async () => {
  
  // Assume a message-notification contains a "type" property in the data payload of the screen to open

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,remoteMessage.data,
    );
   setTimeout(() => {
    NavigationService.navigate("Notification")
   }, 1200);
    
   
    
    if(remoteMessage){
      console.log("Notification call",remoteMessage.data.type)
      // MyBackButton()
    }else{
      console.log("Not call navigation")
    }
  });
  messaging().onMessage(async remoteMessage => {
    Alert.alert('A new Message Genrated',JSON.stringify(remoteMessage))
    console.log('recived in Foreground', remoteMessage,"Type message",remoteMessage.data.type);
    NavigationService.navigate("Notification"
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    )
    if(remoteMessage){
      console.log("Notification call",remoteMessage.data.type)
      // {MyBackButton()}
    }else{
      console.log("Not call navigation")
    }
  });
  
  
  
  

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        setTimeout(() => {
          NavigationService.navigate("Notification")
          console.log("Hekkisdufiahidfhaidhfihaishid")
         }, 1200);
      }
    });
};
