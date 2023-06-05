import { StyleSheet,LogBox, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen'
import AppNavigator from './src/navigation/AppNavigator';
import store  from './src/Redux/store';
import { Provider } from 'react-redux';
import { AuthProvider } from './AuthProvider';
const App = () => {
  useEffect(() => {
    SplashScreen.hide(); 
  }, []);
//   if (!__DEV__) {
//     console.log = () => { };
//   }
  LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
  
  return (
    // <View>
    //   <Text style={{fontFamily: 'Poppins-Black'}}>Umer Kya ker rhy ho kaam kero</Text>
    // </View>
    <Provider store={store}>
      <AuthProvider>
        <AppNavigator/>
       </AuthProvider>
    </Provider>
    
  )
}

export default App

const styles = StyleSheet.create({})
