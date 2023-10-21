import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/styles/colors';
import fontSizes from '../../constants/styles/fontSizes';
import radius from '../../constants/styles/radius';
import spacing from '../../constants/styles/spacing';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  container_image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
  },
  textImage: {
    alignSelf: 'flex-start',
    marginLeft: spacing.left_main,
  },
  pagination_container: {
    position: 'absolute',
    zIndex: 1,
    bottom: (height + width) * 0.015,
    alignSelf: 'center',
  },
  pagination_dot: {
    width: (height + width) * 0.0085,
    height: (height + width) * 0.0085,
    borderRadius: radius.circle,
  },
});
