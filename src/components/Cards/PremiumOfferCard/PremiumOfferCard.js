import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './PremiumOfferCard.style';
import AppText from '../../../constants/AppText';

const {height, width} = Dimensions.get('window');

export default function PremiumOfferCard() {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={null}
      activeOpacity={0.8}>
      <View style={styles.frame}>
        <Image
          resizeMode="contain"
          style={styles.mail_icon}
          source={require('../../../assets/Icons/PremiumOfferIcon.png')}
        />
        <View style={styles.text_container}>
          <Text style={styles.title}>{AppText.FreePremium}</Text>
          <Text style={styles.text}>{AppText.TapToUpgrade}</Text>
        </View>
      </View>
      <Icon name={'chevron-right'} size={width * 0.1} color={'#E5C990'} />
    </TouchableOpacity>
  );
}
