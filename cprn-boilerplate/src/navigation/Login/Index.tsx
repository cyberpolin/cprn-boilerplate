import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { 
  Login,
  Recovery
} from '../../screens/Login/Index'

const Stack = createNativeStackNavigator();

function LoginStack() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Recovery" component={Recovery} />
      </Stack.Navigator>
  );
}

export default LoginStack;
