import {Dimensions, Platform, StatusBar} from 'react-native';

const {height, width} = Dimensions.get('window');

export default {
  main: (height + width) * 0.012,
  circle: 500,
};
