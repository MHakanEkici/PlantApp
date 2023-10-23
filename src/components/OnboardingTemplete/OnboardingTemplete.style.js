import {Dimensions, StyleSheet} from 'react-native';
import spacing from '../../constants/styles/spacing';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
  },
  textImage: {
    marginTop: 15,
    alignSelf: 'flex-start',
    marginLeft: spacing.left_main,
  },
});
