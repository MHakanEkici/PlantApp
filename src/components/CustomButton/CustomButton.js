import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './CustomButton.style';

export default function CustomButton({label, ...otherProps}) {
  return (
    <TouchableOpacity style={styles.container} {...otherProps}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}
