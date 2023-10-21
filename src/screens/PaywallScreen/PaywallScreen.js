import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './PaywallScreen.style';

import CustomButton from '../../components/CustomButton';
import Features from '../../components/Features';
import PremiumOptionSection from '../../components/PremiumOptionSection';
import IconButton from '../../components/IconButton';

export default function PaywallScreen() {
  const [selectedPremiumOption, setSelectedPremiumOption] = useState('year');

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/PaywallBackground.png')}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.frame}>
        <Text style={styles.title}>
          PlantApp
          <Text style={{color: 'white', fontSize: 30, fontWeight: '300'}}>
            {' '}
            Premium
          </Text>
        </Text>
        <Text style={styles.subtitle}>Access All Featrues</Text>
        <Features />
        <PremiumOptionSection
          selectedPremiumOption={selectedPremiumOption}
          setSelectedPremiumOption={setSelectedPremiumOption}
        />
      </View>
      <CustomButton label={'Try free for 3 days'} onPress={null} />
      <IconButton
        iconName={'close'}
        onPress={null}
        style={styles.close_button}
      />
    </View>
  );
}
