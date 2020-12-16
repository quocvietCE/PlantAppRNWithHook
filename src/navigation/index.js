import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Welcome from '../screens/Welcome';
import Browse from '../screens/Browse';
import Explore from '../screens/Explore';
import Login from '../screens/Login';
import Product from '../screens/Product';
import Settings from '../screens/Settings';
import Signup from '../screens/Signup';
import Forgot from '../screens/Forgot';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Navigation = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Browse" component={Browse} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Forgot" component={Forgot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
