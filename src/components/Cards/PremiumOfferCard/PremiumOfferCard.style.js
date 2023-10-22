import {Dimensions, StyleSheet} from 'react-native';
import radius from '../../../constants/styles/radius';
import spacing from '../../../constants/styles/spacing';
import fontSizes from '../../../constants/styles/fontSizes';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: width * 0.9,
    height: (width + height) * 0.06,
    alignItems: 'center',
    padding: spacing.card_padding,
    flexDirection: 'row',
    borderRadius: radius.main,
    justifyContent: 'space-between',
  },
  frame: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mail_icon: {
    height: (height + width) * 0.03,
    width: (height + width) * 0.035,
  },
  text_container: {
    marginLeft: spacing.card_padding,
  },
  title: {
    color: '#E5C990',
    fontSize: fontSizes.text,
    fontWeight: 'bold',
  },
  text: {
    color: '#E5C990',
  },
});
