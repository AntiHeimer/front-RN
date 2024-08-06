/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';

import LoginPage from './Page/Login/Page/LoginPage';
import SignUpPage from './Page/SignUp/Page/SignUpPage';

import MainPage from './Page/Main/Page/MainPage';
import LocationPage from './Page/Location/Page/LocationPage';
import AccountPage from './Page/Account/Page/AccountPage';

import DiagnosisPage from './Page/Diagnosis/Page/DiagnosisPage';
import DiagnosisResultInquiryPage from './Page/DiagnosisResultInquiry/Page/DiagnosisResultInquiryPage';
import DiagnosisResultPage from './Page/DiagnosisResult/Page/DiagnosisResultPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="메인">
      <Tab.Screen name="위치" component={LocationPage} />
      <Tab.Screen name="메인" component={MainPage} />
      <Tab.Screen name="계정" component={AccountPage} />
    </Tab.Navigator>
  );
}

function App() {
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
          component={MainTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="진단하기"
          component={DiagnosisPage}
          options={{
            headerBackAccessibilityLabel: true,
            headerBackTitleVisible: false,
            headerTintColor: 'black',
            headerLeftContainerStyle: {paddingLeft: 15, marginRight: -15},
          }}
        />
        <Stack.Screen
          name="진단 결과"
          component={DiagnosisResultPage}
          options={{
            headerBackAccessibilityLabel: true,
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name="진단 결과 조회"
          component={DiagnosisResultInquiryPage}
          options={{
            headerBackAccessibilityLabel: true,
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
