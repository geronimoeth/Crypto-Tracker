import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import AddCrypto from './screens/AddCrypto';
import {Provider} from 'react-redux';
import store from './store/store';

const Stack = createNativeStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CryptoList">
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="AddCrypto"
          options={{headerShown: false}}
          component={AddCrypto}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
