import {ImageBackground, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
import ScalableImage from 'react-native-scalable-image';
import styles from './OnboardingTemplete.style';

import CustomButton from '../CustomButton';

const {height, width} = Dimensions.get('window');

export default function OnboardingTemplete({
  item,
  buttonText,
  onButtonPressed,
}) {
  const pageComponent = (
    <SafeAreaView style={styles.container}>
      <ScalableImage
        style={styles.textImage}
        width={width * 0.8}
        source={item.text}
      />
      <ScalableImage
        style={styles.image}
        height={height * 0.75}
        source={item.image}
      />
      <CustomButton label={buttonText} onPress={onButtonPressed} />
    </SafeAreaView>
  );

  return item.backgroundImage ? (
    <ImageBackground
      source={item.backgroundImage}
      resizeMode="cover"
      style={styles.container}>
      {pageComponent}
    </ImageBackground>
  ) : (
    pageComponent
  );
}
