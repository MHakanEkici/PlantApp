import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/styles/colors';
import fontSizes from '../../constants/styles/fontSizes';
import radius from '../../constants/styles/radius';
import spacing from '../../constants/styles/spacing';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  header_text_small: {
    fontSize: fontSizes.text,
    marginLeft: spacing.left_main,
    color: '#13231B',
  },
  header_text_big: {
    color: '#13231B',
    fontSize: fontSizes.titleSmall,
    marginLeft: spacing.left_main,
    fontWeight: 'bold',
  },
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.03,
    width: width * 0.9,
    borderRadius: radius.main,
    marginVertical: spacing.card_padding,
    height: (height + width) * 0.04,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#13231B',
    fontSize: fontSizes.text,
  },
});
