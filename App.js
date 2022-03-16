import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './screens/EcommerceTask/HomePage/HomePage';
import Login from './screens/EcommerceTask/Login/Login';

import {LogBox} from 'react-native';
const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{header: () => null}}
        />

        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
