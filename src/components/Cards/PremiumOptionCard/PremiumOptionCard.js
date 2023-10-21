import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './PremiumOptionCard.style';

export default function PremiumOptionCard({
  duration,
  info,
  isBadged = false,
  badgeText,
  onPress,
  type = 'default',
}) {
  return (
    <TouchableOpacity
      style={styles[type].container}
      onPress={onPress}
      activeOpacity={0.8}>
      <View style={styles[type].selection_dot} />
      <View style={styles[type].info_container}>
        <Text style={styles[type].duration}>{duration}</Text>
        <Text style={styles[type].info}>{info}</Text>
      </View>
      {isBadged && (
        <View style={styles[type].badge}>
          <Text style={styles[type].badge_text}>{badgeText}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
