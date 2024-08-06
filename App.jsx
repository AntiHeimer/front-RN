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
import RegisterPage from './Page/Register/Page/RegisterPage';
import Notification from './Utils/Component/Notification';
import NotificationPage from './Page/Notification/Page/NotificationPage';

const LocationStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LocationStackNavigator() {
  return (
    <LocationStack.Navigator>
      <LocationStack.Screen
        name="Location"
        component={LocationPage}
        options={{
          title: '위치',
          headerLeft: () => null,
          headerRight: () => <Notification />,
        }}
      />
      <LocationStack.Screen
        name="Register"
        component={RegisterPage}
        options={{
          title: '관계 등록',
          headerBackAccessibilityLabel: true,
          headerBackTitleVisible: false,
          headerTintColor: 'black',
          headerLeftContainerStyle: {paddingLeft: 15, marginRight: -15},
          headerRight: () => <Notification />,
        }}
      />
    </LocationStack.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Main Tab">
      <Tab.Screen
        name="Location Tab"
        component={LocationStackNavigator}
        options={{title: '위치', headerShown: false}}
      />
      <Tab.Screen
        name="Main Tab"
        component={MainPage}
        options={{
          title: '메인',
          headerRight: () => <Notification />,
          headerStyle: {height: 110},
        }}
      />
      <Tab.Screen
        name="Account Tab"
        component={AccountPage}
        options={{
          title: '계정',
          headerRight: () => <Notification />,
          headerStyle: {height: 110},
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{title: '로그인', headerShown: false}}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUpPage}
          options={{
            title: '회원가입',
            headerBackAccessibilityLabel: true,
            headerBackTitleVisible: false,
            headerTintColor: 'black',
            headerLeftContainerStyle: {paddingLeft: 15, marginRight: -15},
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{
            title: '메인',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Diagnosis"
          component={DiagnosisPage}
          options={{
            title: '진단하기',
            headerBackAccessibilityLabel: true,
            headerBackTitleVisible: false,
            headerTintColor: 'black',
            headerLeftContainerStyle: {paddingLeft: 15, marginRight: -15},

            headerStyle: {height: 110},
          }}
        />
        <Stack.Screen
          name="Diagnosis Result"
          component={DiagnosisResultPage}
          options={{
            title: '진단 결과',
            headerBackAccessibilityLabel: true,
            headerLeft: () => null,
            headerRight: () => <Notification />,
            headerStyle: {height: 110},
          }}
        />
        <Stack.Screen
          name="Diagnosis Result Inquiry"
          component={DiagnosisResultInquiryPage}
          options={{
            title: '진단 결과 조회',
            headerBackAccessibilityLabel: true,
            headerBackTitleVisible: false,
            headerTintColor: 'black',
            headerLeftContainerStyle: {paddingLeft: 15, marginRight: -15},
            headerStyle: {height: 110},
            headerRight: () => <Notification />,
          }}
        />
        <Stack.Screen
          name="Notification"
          component={NotificationPage}
          options={{
            title: '알림',
            headerBackAccessibilityLabel: true,
            headerBackTitleVisible: false,
            headerTintColor: 'black',
            headerLeftContainerStyle: {paddingLeft: 15, marginRight: -15},
            headerStyle: {height: 110},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
