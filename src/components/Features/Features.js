import {View, ScrollView} from 'react-native';
import React from 'react';
import featuresData from '../../constants/FeaturesData';
import styles from './Features.style.js';

import FeatureCard from '../Cards/FeatureCard';

export default function Features() {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {featuresData.map((feature, index) => (
        <React.Fragment key={index}>
          <FeatureCard
            icon={feature.icon}
            highlightedLabel={feature.highlightedLabel}
            label={feature.label}
          />
          <View style={styles.seperator} />
        </React.Fragment>
      ))}
    </ScrollView>
  );
}
