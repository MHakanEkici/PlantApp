import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './OnboardingTemplete.style';
import CustomButton from '../CustomButton';

const {height, width} = Dimensions.get('window');

export default function OnboardingTemplete({
  item,
  buttonText,
  onButtonPressed,
}) {
  return (
    <ImageBackground
      source={item.backgroundImage}
      resizeMode="contain"
      style={styles.container_image}>
      <SafeAreaView style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.textImage}
          source={item.text}
        />
        <Image resizeMode="contain" style={styles.image} source={item.image} />
        <CustomButton label={buttonText} onPress={onButtonPressed} />
      </SafeAreaView>
    </ImageBackground>
  );
}
