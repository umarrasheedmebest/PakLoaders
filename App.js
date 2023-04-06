// import 'react-native-gesture-handler';

import React from 'react';
import 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './AuthProvider';
import store  from './src/Redux/store';
// import {store} from './src/setup/store';
import { LogBox, View,Text } from 'react-native';

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
    // <View><Text>Hello</Text></View>
    <Provider store={store}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </Provider>
  );
};

export default App;
