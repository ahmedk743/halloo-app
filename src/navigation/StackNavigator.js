import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  SignUpScreen,
  VerificationScreen,
  VerificationSuccessScreen,
  CompleteProfileScreen,
  ChatScreen,
} from '../screens/index';
import BottomTabs from './TabNavigator';

const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
      <Stack.Screen
        name="VerificationSuccessScreen"
        component={VerificationSuccessScreen}
      />
      <Stack.Screen
        name="CompleteProfileScreen"
        component={CompleteProfileScreen}
      />

      <Stack.Screen name="ChatScreen" component={ChatScreen} />

      <Stack.Screen name="Main" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export {LoginStackNavigator};
