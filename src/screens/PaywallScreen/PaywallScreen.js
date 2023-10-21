import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './PaywallScreen.style';

import CustomButton from '../../components/CustomButton';
import Features from '../../components/Features';
import PremiumOptionSection from '../../components/PremiumOptionSection';
import IconButton from '../../components/IconButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import onboardingConstants from '../../redux/constants/onboardingConstants';

export default function PaywallScreen() {
  const [selectedPremiumOption, setSelectedPremiumOption] = useState('year');

  const dispatch = useDispatch();

  async function handleSetOnboardingSkipped() {
    dispatch({
      type: onboardingConstants.SET_IS_ONBOARDING_SKIPPED,
      payload: true,
    });
    try {
      await AsyncStorage.setItem('isOnboardSkipped', 'true');
      console.warn('kaydedildi');
    } catch (e) {
      console.warn('Error on saving isOnboardSkipped');
    }
  }

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
        onPress={handleSetOnboardingSkipped}
        style={styles.close_button}
      />
    </View>
  );
}
