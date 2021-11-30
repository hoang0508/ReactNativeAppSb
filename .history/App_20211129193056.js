/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import Login from './components/Login/Login';
import Screen from './Screens/Screen';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <>
      {/* <Screen /> */}
      <Icon name="rocket" size={30} color="#900" />
    </>
  );
};

export default App;