import {ImageBackground, Image, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './OnboardingTemplete.style';

import CustomButton from '../CustomButton';

export default function OnboardingTemplete({
  item,
  buttonText,
  onButtonPressed,
}) {
  const pageComponent = (
    <SafeAreaView style={styles.container}>
      <Image resizeMode="contain" style={styles.textImage} source={item.text} />
      <Image resizeMode="contain" style={styles.image} source={item.image} />
      <CustomButton label={buttonText} onPress={onButtonPressed} />
    </SafeAreaView>
  );

  return item.backgroundImage ? (
    <ImageBackground
      source={item.backgroundImage}
      resizeMode="contain"
      style={styles.container}>
      {pageComponent}
    </ImageBackground>
  ) : (
    pageComponent
  );
}
