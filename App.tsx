/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import {Provider as ReduxProvider} from 'react-redux';

import store from './redux/store';

import { NativeRouter, Routes,Route, Link } from "react-router-native";
import RoutesPath from './RoutesPath';


function App(): JSX.Element {

  return (
    <SafeAreaView>
      <ReduxProvider store={store}>
          {/* <Text></Text>
          <UserList /> */}
          
          <NativeRouter>
         
            <RoutesPath />
           
        
          </NativeRouter>
        </ReduxProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
