import {Dimensions, Platform, StyleSheet} from 'react-native';
import colors from '../../constants/styles/colors';
import fontSizes from '../../constants/styles/fontSizes';
import spacing from '../../constants/styles/spacing';
import {hasNotch} from 'react-native-device-info';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  image: {
    width: width,
    position: 'absolute',
    zIndex: -1,
    top: 0,
  },
  frame: {
    marginLeft: spacing.left_main,
    top: Platform.OS === 'ios' && hasNotch ? height * 0.27 : height * 0.29,
  },
  title: {
    color: 'white',
    fontSize: fontSizes.title,
    fontWeight: 'bold',
  },
  title_secondary: {
    color: 'white',
    fontSize: fontSizes.title,
    fontWeight: '300',
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: fontSizes.textBig,
    marginTop: height * 0.01,
  },
  close_button: {
    zIndex: 1,
    top: height * 0.06,
    right: width * 0.1,
    position: 'absolute',
  },
  info: {
    bottom:
      Platform.OS === 'ios' && hasNotch
        ? (height + width) * 0.04
        : (height + width) * 0.025,
    alignSelf: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: fontSizes.textSmall - 3.5,
    paddingHorizontal: spacing.left_main,
    position: 'absolute',
  },
  text: {
    bottom:
      Platform.OS === 'ios' && hasNotch
        ? (height + width) * 0.02
        : (height + width) * 0.005,
    alignSelf: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: fontSizes.textSmall - 1,
    paddingHorizontal: spacing.left_main,
    position: 'absolute',
    fontWeight: '500',
  },
});
