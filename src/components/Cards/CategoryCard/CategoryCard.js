import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './CategoryCard.style';

export default function CategoryCard({image, name, onPress}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      <ImageBackground
        resizeMode="cover"
        source={{
          uri: image,
        }}
        style={styles.container_image}
        imageStyle={styles.image_style}>
        <View style={styles.label_container}>
          <Text style={styles.label} numberOfLines={2}>
            {name}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
