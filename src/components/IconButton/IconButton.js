import {Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './IconButton.style';

const {height, width} = Dimensions.get('window');

export default function IconButton({
  onPress,
  style,
  iconName,
  iconColor = 'white',
  iconSize = (width + height) * 0.02,
}) {
  return (
    <TouchableOpacity
      style={[styles.close_button, style]}
      onPress={onPress}
      activeOpacity={0.5}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
}
