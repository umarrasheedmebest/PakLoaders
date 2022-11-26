// import 'react-native-gesture-handler';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './AuthProvider';
import {store } from './src/setup/store';

const App = () => {
  if (!__DEV__) {
    console.log = () => { };
  }
  // if (Platform.OS !== 'web') {
  //   usePreventScreenCapture();
  // }

  return (
    <Provider store={store}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </Provider>
  );
};

export default App;
