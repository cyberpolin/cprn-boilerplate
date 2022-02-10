import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../screens/Index'
import {
  Login,
  Recovery
} from '../screens/Login/Index'

export default function App() {
  return (
    <NavigationContainer>
      <Recovery/>
    </NavigationContainer>
  );
}
// https://reactnavigation.org/docs/hello-react-navigation