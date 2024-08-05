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
import MainPage from './Page/Main/Page/MainPage';

function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="로그인">
        <Stack.Screen
          name="로그인"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="회원가입"
          component={SignUpPage}
          options={{
            headerBackAccessibilityLabel: true,
            headerBackTitleVisible: false,
            headerTintColor: 'black',
            headerLeftContainerStyle: {paddingLeft: 15, marginRight: -15},
          }}
        />
        <Stack.Screen
          name="메인"
          component={MainPage}
          options={{
            gestureEnabled: false,
            // headerLeft: null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
