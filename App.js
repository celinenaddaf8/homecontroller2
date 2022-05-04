import React from 'react'

import Login from './screen/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'

import Register from './screen/Register'
import Splash from './screen/Splash'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { LogBox } from 'react-native'
import Swiper from './screen/Swiper'
import Monitor from './screen/Monitor'
import Room from './screen/Room'
import Device from './screen/Device'
import EditDevice from './screen/EditDevice'
import Fetch from './screen/data'
LogBox.ignoreLogs(['Warning: ...'])
LogBox.ignoreAllLogs()

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
  const screenOptions = {
    headerShown: false,
    ...TransitionPresets.SlideFromRightIOS,
  }

  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
      >
        <Stack.Navigator
          initialRouteName="Swiper"
          screenOptions={screenOptions}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              gestureEnabled: true,
              animationEnabled: true,
              gestureDirection: 'horizontal',
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              gestureEnabled: true,
              animationEnabled: true,
              gestureDirection: 'horizontal',
            }}
          />

          <Stack.Screen name="Monitor" component={Monitor} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Swiper" component={Swiper} />
          <Stack.Screen name="Room" component={Room} />
          <Stack.Screen name="Device" component={Device} />
          <Stack.Screen name="Edit" component={EditDevice} />
          <Stack.Screen name="Fetch" component={Fetch} />
        </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
  )
}

export default App
