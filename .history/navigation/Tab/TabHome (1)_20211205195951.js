import * as React from 'react';
// import {Button, Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackHome from '../Stack/HomeStack';
const Tab = createBottomTabNavigator();

export default function TabHome() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabHome1" component={StackHome} />
    </Tab.Navigator>
  );
}