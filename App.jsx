/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';

import LoginPage from './Page/Login/Page/LoginPage';
import SignUpPage from './Page/SignUp/Page/SignUpPage';

function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginPage"
        options={{
          headerBackAccessibilityLabel: true,
        }}>
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="회원가입"
          component={SignUpPage}
          options={{
            headerBackTitleVisible: false,
            headerTintColor: 'black',
            headerLeftContainerStyle: {paddingLeft: 15, marginRight: -15},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
