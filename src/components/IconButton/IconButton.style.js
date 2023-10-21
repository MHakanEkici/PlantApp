import {Dimensions, StyleSheet} from 'react-native';
import radius from '../../constants/styles/radius';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  close_button: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: (width + height) * 0.03,
    height: (width + height) * 0.03,
    borderRadius: radius.circle,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
