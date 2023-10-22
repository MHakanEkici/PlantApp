import React from 'react';
import NavigationContainter from './navigation/NavigationContainer';
import {Platform, StatusBar} from 'react-native';

export default function App() {
  if (Platform.OS === 'android') {
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('white');
  }

  return <NavigationContainter />;
}
