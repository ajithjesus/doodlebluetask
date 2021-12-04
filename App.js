

import React,{Component} from 'react';
 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './screens/EcommerceTask/HomePage/HomePage';
import CartPage from './screens/EcommerceTask/CartPage/CartPage';
import Login from './screens/EcommerceTask/Login/Login';




const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{header: () => null}} />
      <Stack.Screen name="HomePage" component={HomePage} options={{header: () => null}} />
      <Stack.Screen name="CartPage" component={CartPage} 
      options={{headerTransparent:true,headerTintColor:'white',headerTitle:'My Cart'}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


 
