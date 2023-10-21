import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './FeatureCard.style';

export default function FeatureCard({icon, highlightedLabel, label}) {
  return (
    <View style={styles.container}>
      <View style={styles.icon_container}>
        <Image resizeMode="contain" style={styles.icon} source={icon} />
      </View>
      <View>
        <Text style={styles.highlighted_label}>{highlightedLabel}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
}
