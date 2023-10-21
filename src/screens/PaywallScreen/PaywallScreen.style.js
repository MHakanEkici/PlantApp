import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/styles/colors';
import fontSizes from '../../constants/styles/fontSizes';
import radius from '../../constants/styles/radius';
import spacing from '../../constants/styles/spacing';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  image: {
    width: width,
    // position: 'absolute',
    // zIndex: 1,
    // top: 0,
  },
  frame: {
    marginLeft: spacing.left_main,
    top: -height * 0.25,
  },
  title: {
    color: 'white',
    fontSize: fontSizes.title,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: fontSizes.textBig,
    marginTop: height * 0.01,
  },
  close_button: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
    width: (width + height) * 0.03,
    height: (width + height) * 0.03,
    top: height * 0.06,
    right: width * 0.1,
    position: 'absolute',
    borderRadius: radius.circle,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
