import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container_image: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: width,
  },
  textImage: {
    alignSelf: 'flex-start',
    marginLeft: spacing.left_main,
  },
});
