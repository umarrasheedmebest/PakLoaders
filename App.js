// import 'react-native-gesture-handler';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './AuthProvider';
import { persistor, store } from './store';

const App = () => {
  if (!__DEV__) {
    console.log = () => { };
  }
  // if (Platform.OS !== 'web') {
  //   usePreventScreenCapture();
  // }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <AppNavigator />
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
