import {View} from 'react-native';
import React from 'react';
import styles from './PremiumOptionSection.style';
import PremiumOptionCard from '../Cards/PremiumOptionCard';

export default function PremiumOptionSection({
  selectedPremiumOption,
  setSelectedPremiumOption,
}) {
  return (
    <View>
      <PremiumOptionCard
        duration={'1 Month'}
        info={'$2.99/month, auto renewable'}
        onPress={() => setSelectedPremiumOption('month')}
        type={selectedPremiumOption === 'month' ? 'selected' : 'default'}
        key={'month'}
      />
      <View style={styles.seperator} />
      <PremiumOptionCard
        duration={'1 Year'}
        info={'First 3 days free, then $529,99/year'}
        onPress={() => setSelectedPremiumOption('year')}
        isBadged={true}
        badgeText={'Save 50%'}
        type={selectedPremiumOption === 'year' ? 'selected' : 'default'}
        key={'year'}
      />
    </View>
  );
}
