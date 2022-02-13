import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home, History} from '../../screens/Main/Index'

const {Navigator, Screen} = createBottomTabNavigator()

export default function MainNavigator(){
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        headerTransparent: true,

        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',

        // tabBarActiveBackgroundColor: 'blue',
        // tabBarInactiveBackgroundColor: 'red',
        tabBarStyle: {
          backgroundColor: 'red'
        }
          
      }}
    >
      <Screen name='Home' component={Home} />
      <Screen name='History' component={History} />
    </Navigator>
  )
}