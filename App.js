import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';
import HommeScreen from './screens/HommeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MapboxComponent from './components/Map';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        {/* <HommeScreen /> */}
        <MapboxComponent />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
