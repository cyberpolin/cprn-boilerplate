import * as React from 'react'
import {useState, useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native';

import LoginStack from './Login/Index'
import MainStack from './Main/Index'
import Loading from '../screens/Loading'


export default function App() {
  const [token, useToken] = useState(false)
  const [redux, useRedux] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      useToken(true)
      useRedux(true)
    }, 2000)
  }, [])
  return (
    <NavigationContainer>
      {!redux ? <Loading /> : token ? <MainStack /> : <LoginStack />}
    </NavigationContainer>
  );
}
// https://reactnavigation.org/docs/hello-react-navigation