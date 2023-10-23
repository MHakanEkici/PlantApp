import {Dimensions, Platform, StyleSheet} from 'react-native';
import radius from '../../constants/styles/radius';
import {hasNotch} from 'react-native-device-info';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  pagination_container: {
    position: 'absolute',
    zIndex: 1,
    bottom: Platform.OS === 'ios' && hasNotch ? (height + width) * 0.01 : 0,
    alignSelf: 'center',
  },
  pagination_dot: {
    width: (height + width) * 0.0085,
    height: (height + width) * 0.0085,
    borderRadius: radius.circle,
  },
});
