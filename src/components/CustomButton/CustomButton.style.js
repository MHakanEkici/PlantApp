import {Dimensions, StyleSheet, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {height, width} = Dimensions.get('window');
const hasNotch = DeviceInfo.hasNotch();

import colors from '../../constants/styles/colors';
import fontSizes from '../../constants/styles/fontSizes';
import radius from '../../constants/styles/radius';
import spacing from '../../constants/styles/spacing';

export default StyleSheet.create({
  container: {
    padding: spacing.card_padding,
    borderRadius: radius.main,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colors.theme,
    width: width * 0.9,
    height: (width + height) * 0.048,
    zIndex: 1,
    bottom:
      Platform.OS === 'ios' && hasNotch
        ? (height + width) * 0.07
        : (height + width) * 0.055,
    position: 'absolute',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
