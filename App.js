// import 'react-native-gesture-handler';

import React from 'react';
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
const App = () => {
  if (!__DEV__) {
    console.log = () => { };
  }
  LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
  // if (Platform.OS !== 'web') {
  //   usePreventScreenCapture();
  // }

  return (
    // <View>
    //   <Text style={{fontFamily:"Poppins-Black",fontSize:30}}>Hello</Text>
    //   <MaterialIcon size="large" color="purple" name="home" />
    //     <MaterialIcon size="extraLarge" color="black" name="github" />
    //   </View>
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
