import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View, StyleSheet, Image} from 'react-native';

import {
  ChatHomeScreen,
  CallsScreen,
  RecoverScreen,
  ProfileScreen,
} from '../screens/index';
import {icons} from '../../constants';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const IconText = ({focused, icon, title}) => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={icon}
          style={{
            height: 24,
            width: 24,
            tintColor: focused ? '#f49822' : '#748c94',
          }}
        />
        <Text
          style={{
            color: focused ? '#f49822' : '#748c94',
            fontSize: 10,
          }}>
          {title}
        </Text>
      </View>
    );
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      initialRouteName="ChatHomeScreen"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="ChatHomeScreen"
        component={ChatHomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconText focused={focused} title="Chats" icon={icons.chat} />
          ),
        }}
      />
      <Tab.Screen
        name="CallsScreen"
        component={CallsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconText focused={focused} title="Calls" icon={icons.call} />
          ),
        }}
      />
      <Tab.Screen
        name="RecoverScreen"
        component={RecoverScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconText
              focused={focused}
              title="RecoverSMS"
              icon={icons.recycle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconText focused={focused} title="Profile" icon={icons.user} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
