import {Dimensions, StyleSheet} from 'react-native';
import radius from '../../../constants/styles/radius';
import spacing from '../../../constants/styles/spacing';
import fontSizes from '../../../constants/styles/fontSizes';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    borderRadius: radius.main,
    width: (height + width) * 0.2,
    height: (height + width) * 0.15,
    marginRight: spacing.left_main / 2,
  },
  container_image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image_style: {
    borderRadius: radius.main,
  },
  label_container: {
    width: (height + width) * 0.2,
    height: (height + width) * 0.06,
    padding: spacing.card_padding,
  },
  label: {
    color: 'white',
    fontSize: fontSizes.text,
    flexWrap: 'wrap',
    fontWeight: '500',
  },
});
