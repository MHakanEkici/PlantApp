/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, Image, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import onboardingConstants from '../../redux/constants/onboardingConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppText from '../../constants/AppText';
import styles from './PaywallScreen.style';

import CustomButton from '../../components/CustomButton';
import Features from '../../components/Features';
import PremiumOptionSection from '../../components/PremiumOptionSection';
import IconButton from '../../components/IconButton';

export default function PaywallScreen({navigation}) {
  const [selectedPremiumOption, setSelectedPremiumOption] = useState('year');

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      // Prevent default behavior of leaving the screen
      e.preventDefault();
      // Prompt the user before leaving the screen
    });
  }, []);

  async function handleSetOnboardingSkipped() {
    dispatch({
      type: onboardingConstants.SET_IS_ONBOARDING_SKIPPED,
      payload: true,
    });
    try {
      await AsyncStorage.setItem('isOnboardSkipped', 'true');
    } catch (e) {
      console.warn('Error on saving isOnboardSkipped');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/PaywallBackground.png')}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.frame}>
        <Text style={styles.title}>
          {AppText.PlantAppPremium1}
          <Text style={styles.title_secondary}>{AppText.PlantAppPremium2}</Text>
        </Text>
        <Text style={styles.subtitle}>{AppText.AccessAllFeatures}</Text>
        <Features />
        <PremiumOptionSection
          selectedPremiumOption={selectedPremiumOption}
          setSelectedPremiumOption={setSelectedPremiumOption}
        />
      </View>
      <CustomButton label={AppText.TryFree} onPress={null} />
      <IconButton
        iconName={'close'}
        onPress={handleSetOnboardingSkipped}
        style={styles.close_button}
      />
      <Text style={styles.info} onPress={null}>
        {AppText.PaywallScreenInfo1}
      </Text>
      <Text style={styles.text} onPress={null}>
        {AppText.PaywallScreenInfo2}
      </Text>
    </SafeAreaView>
  );
}
