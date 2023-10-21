import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginVertical: (height + width) * 0.015,
  },
  seperator: {
    width: width * 0.02,
  },
});
