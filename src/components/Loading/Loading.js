import {ActivityIndicator} from 'react-native';
import React from 'react';
import colors from '../../constants/styles/colors';

export default function Loading({color = colors.theme, size = 'large'}) {
  return <ActivityIndicator size={size} color={color} />;
}
