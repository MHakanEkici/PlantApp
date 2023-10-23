import {Dimensions, Platform, StyleSheet} from 'react-native';
import spacing from '../../constants/styles/spacing';
import fontSizes from '../../constants/styles/fontSizes';
import {hasNotch} from 'react-native-device-info';

const {height, width} = Dimensions.get('window');

const baseTextStyle = {
  bottom:
    Platform.OS === 'ios' && hasNotch
      ? (height + width) * 0.025
      : (height + width) * 0.01,
  alignSelf: 'center',
  flexWrap: 'wrap',
  textAlign: 'center',
  color: 'rgba(89, 113, 101, 0.7)',
  fontSize: fontSizes.textSmall,
  paddingHorizontal: spacing.left_main,
  position: 'absolute',
};

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  text: baseTextStyle,
  underlined_text: {
    ...baseTextStyle,
    textDecorationLine: 'underline',
  },
});
