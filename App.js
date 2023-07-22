// import 'react-native-gesture-handler';

import React,{useEffect,useRef} from 'react';
import 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './AuthProvider';
import store  from './src/Redux/store';
// import {store} from './src/setup/store';
import { LogBox, View,Text,StatusBar } from 'react-native';
import LogoutModal from './src/Components/LogoutModal/index';
import { MaterialIcon } from './src/Components/Icon/Icon';
import { WebView } from 'react-native-webview';
import { PermissionsAndroid, Platform,Alert } from 'react-native';
import IntentLauncher from 'react-native-intent-launcher';
import DeviceInfo from 'react-native-device-info';
import { notificationListener, requestUserPermission } from './src/Components/NotificationServices/NotificationService';


const App = () => {
  if (!__DEV__) {
    console.log = () => { };
  }
  LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
  // if (Platform.OS !== 'web') {
  //   usePreventScreenCapture();
  // }
  const webViewRef = useRef(null);
  const requestLocationPermission = async () => {
    
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app requires access to your location.',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted.');
          getLocation();
        } else {
          console.log('Location permission not granted.');
        }
      } catch (err) {
        console.warn(err);
      }
    } else if (Platform.OS === 'ios') {
      // Handle iOS permissions using the Permissions module or other libraries
    }
  };
  useEffect(() => {
    requestLocationPermission()
    requestUserPermission();
  notificationListener();
   }, []);
  const handleLocationPermissionDenied = () => {
    Alert.alert(
      'Location Permission Denied',
      'To use this feature, you need to grant location permission.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'Open Settings', onPress: openAppSettings },
      ]
    );
  };
 
  const openAppSettings = () => {
    if (Platform.OS === 'android') {
      const packageName = DeviceInfo.getBundleId();
      // Open app settings for Android
      IntentLauncher.startActivityAsync(

        IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS,
        { data: 'package:' + packageName }
      );
    } else if (Platform.OS === 'ios') {
      // Open app settings for iOS
      Linking.openURL('app-settings:');
    }
  };
  const getLocation = () => {
    // Get the current location coordinates
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        // Inject JavaScript code to set the location on the HTML page
        const jsCode = `
          const latitude = ${latitude};
          const longitude = ${longitude};

          // Use the latitude and longitude as needed in your HTML page
          // For example, you can update a text element with the location
          document.getElementById('location').textContent = 'Latitude: ' + latitude + ', Longitude: ' + longitude;
        `;

        // Execute the JavaScript code within the WebView
        webViewRef.current.injectJavaScript(jsCode);
      },
      error => {
        console.log('Error occurred while retrieving location: ' + error.message);
      }
    );
  };
  

  return (
    // <View>
    //   <Text style={{fontFamily:"Poppins-Black",fontSize:30}}>Hello</Text>
    //   <MaterialIcon size="large" color="purple" name="home" />
    //     <MaterialIcon size="extraLarge" color="black" name="github" />
    //   </View>
    
    // <WebView ref={webViewRef} source={{ html: `<!DOCTYPE html>
    // <html>
    // <head>
    // <meta charset="utf-8">
    // <title>Locate the user</title>
    // <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
    // <link href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css" rel="stylesheet">
    // <script src="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js"></script>
    // <style>
    // body { margin: 0; padding: 0; }
    // #map { position: absolute; top: 0; bottom: 0; width: 100%; }
    // </style>
    // </head>
    // <body>
    // <div id="map"></div>
    // <script>
    //   // TO MAKE THE MAP APPEAR YOU MUST
    //   // ADD YOUR ACCESS TOKEN FROM
    //   // https://account.mapbox.com
    //   mapboxgl.accessToken = 'pk.eyJ1IjoidW1hcnJhc2hlZWQiLCJhIjoiY2xneGZkeW8yMDFleTNnbXNhbXE2ZXUzaCJ9.bg4UxxXQM4o-H3e2S3elQQ';
    // const map = new mapboxgl.Map({
    // container: 'map', // container ID
    // // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    // style: 'mapbox://styles/mapbox/streets-v12', // style URL
    // center: [-24, 42], // starting center in [lng, lat]
    // zoom: 1 // starting zoom
    // });
     
    // // Add geolocate control to the map.
    // map.addControl(
    // new mapboxgl.GeolocateControl({
    // positionOptions: {
    // enableHighAccuracy: true
    // },
    // // When active the map will receive updates to the device's location as it changes.
    // trackUserLocation: true,
    // // Draw an arrow next to the location dot to indicate which direction the device is heading.
    // showUserHeading: true
    // })
    // );
    // </script>
     
    // </body>
    // </html>` }} style={{ flex: 1 }}
    // geolocationEnabled={true}
    // />
    <Provider store={store}>
      <StatusBar hidden={true}/>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </Provider>
    // <LogoutModal/>
  );
};

export default App;
