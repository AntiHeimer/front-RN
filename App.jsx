import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {Image} from 'react-native';

import PersonImg from './src/Utils/Asset/Tab/person.png';
import MapImg from './src/Utils/Asset/Tab/map.png';
import HouseImg from './src/Utils/Asset/Tab/house.png';

import PersonGrayImg from './src/Utils/Asset/Tab/person_gray.png';
import MapGrayImg from './src/Utils/Asset/Tab/map_gray.png';
import HouseGrayImg from './src/Utils/Asset/Tab/house_gray.png';

import LoginPage from './src/Page/Login/Page/LoginPage';
import SignUpPage from './src/Page/SignUp/Page/SignUpPage';

import MainPage from './src/Page/Main/Page/MainPage';
import LocationPage from './src/Page/Location/Page/LocationPage';
import AccountPage from './src/Page/Account/Page/AccountPage';

import DiagnosisPage from './src/Page/Diagnosis/Page/DiagnosisPage';
import DiagnosisResultInquiryPage from './src/Page/DiagnosisResultInquiry/Page/DiagnosisResultInquiryPage';
import DiagnosisResultPage from './src/Page/DiagnosisResult/Page/DiagnosisResultPage';
import RegisterPage from './src/Page/Register/Page/RegisterPage';
import Notification from './src/Utils/Component/Notification';
import NotificationPage from './src/Page/Notification/Page/NotificationPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Main Tab">
      <Tab.Screen
        name="Location Tab"
        component={LocationPage}
        options={{
          title: '위치',
          headerRight: () => <Notification />,
          headerStyle: {height: 110},
          tabBarLabelStyle: {color: 'black'},
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={MapImg} style={{width: 25, height: 25}} />
            ) : (
              <Image source={MapGrayImg} style={{width: 25, height: 25}} />
            ),
        }}
      />
      <Tab.Screen
        name="Main Tab"
        component={MainPage}
        options={{
          title: '메인',
          headerRight: () => <Notification />,
          headerStyle: {height: 110},
          tabBarLabelStyle: {color: 'black'},
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={HouseImg} style={{width: 25, height: 25}} />
            ) : (
              <Image source={HouseGrayImg} style={{width: 25, height: 25}} />
            ),
        }}
      />
      <Tab.Screen
        name="Account Tab"
        component={AccountPage}
        options={{
          title: '계정',
          headerRight: () => <Notification />,
          headerStyle: {height: 110},
          tabBarLabelStyle: {color: 'black'},
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={PersonImg} style={{width: 25, height: 25}} />
            ) : (
              <Image source={PersonGrayImg} style={{width: 25, height: 25}} />
            ),
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
            gestureEnabled: false,
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
            gestureEnabled: false,
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
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{
            title: '관계 등록',
            headerBackAccessibilityLabel: true,
            headerBackTitleVisible: false,
            headerTintColor: 'black',
            headerLeftContainerStyle: {paddingLeft: 15, marginRight: -15},
            headerRight: () => <Notification />,
            headerStyle: {height: 110},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
