import {Dimensions, StyleSheet} from 'react-native';
import radius from '../../../constants/styles/radius';
import spacing from '../../../constants/styles/spacing';
import fontSizes from '../../../constants/styles/fontSizes';
import colors from '../../../constants/styles/colors';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    borderRadius: radius.main,
    width: width * 0.42,
    height: width * 0.42,
    backgroundColor: 'white',
    marginVertical: spacing.card_padding / 2,
  },
  container_image: {
    flex: 1,
  },
  image_style: {
    borderRadius: radius.main,
  },
  label_container: {
    width: (height + width) * 0.1,
    padding: spacing.card_padding,
  },
  label: {
    color: colors.text,
    fontSize: fontSizes.text,
    flexWrap: 'wrap',
    fontWeight: '500',
  },
});
