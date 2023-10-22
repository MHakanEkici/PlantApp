import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './QuestionCard.style';

export default function QuestionCard({image, question, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground
        resizeMode="cover"
        source={{
          uri: image,
        }}
        style={styles.container_image}
        imageStyle={styles.image_style}>
        <View style={styles.label_container}>
          <Text style={styles.label} numberOfLines={2}>
            {question}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
