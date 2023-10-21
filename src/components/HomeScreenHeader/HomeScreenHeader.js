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

export default function HomeScreenHeader() {
  return (
    <ImageBackground
      source={require('../../assets/HomeHeaderBackground.png')}
      resizeMode="cover"
      style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header_text_small}>Hi, plant lover!</Text>
        <Text style={styles.header_text_big}>Good Afternoon! ⛅</Text>
        <View style={styles.input_container}>
          <Icon name="magnify" size={30} color={'#ABABAB'} />
          <TextInput
            placeholder={'Search for plants'}
            placeholderTextColor={'#ABABAB'}
            onChangeText={text => console.log(text)}
            style={styles.input}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
