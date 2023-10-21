import {Dimensions, Platform} from 'react-native';

const {height, width} = Dimensions.get('window');

export default {
  card_padding: (height + width) * 0.012,
  left_main: width * 0.05,
};
