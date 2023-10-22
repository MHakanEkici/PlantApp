import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React from 'react';
import styles from './HomeScreenHeader.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppText from '../../constants/AppText';

export default function HomeScreenHeader() {
  return (
    <ImageBackground
      source={require('../../assets/HomeHeaderBackground.png')}
      resizeMode="cover"
      style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header_text_small}>{AppText.HomeHeader1}</Text>
        <Text style={styles.header_text_big}>{AppText.HomeHeader2}</Text>
        <View style={styles.input_container}>
          <Icon name="magnify" size={30} color={'#ABABAB'} />
          <TextInput
            placeholder={AppText.SearchPlant}
            placeholderTextColor={'#ABABAB'}
            onChangeText={text => console.log(text)}
            style={styles.input}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
