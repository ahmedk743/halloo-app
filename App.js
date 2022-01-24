/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {LoginStackNavigator} from './src/navigation/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <LoginStackNavigator />
      <StatusBar backgroundColor="#f49822" />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
