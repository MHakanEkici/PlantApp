import {Dimensions, Platform, StyleSheet} from 'react-native';
import spacing from '../../constants/styles/spacing';
import fontSizes from '../../constants/styles/fontSizes';
import colors from '../../constants/styles/colors';
import {hasNotch} from 'react-native-device-info';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content_container: {
    marginTop:
      Platform.OS === 'ios' && hasNotch ? height * 0.14 : height * 0.18,
    paddingLeft: spacing.left_main,
    paddingBottom: height * 0.2,
  },
  seperator: {
    width: width * 0.03,
  },
  title: {
    fontWeight: '600',
    fontSize: fontSizes.text,
    color: colors.text,
    marginVertical: spacing.card_padding,
  },
  category_list: {
    marginVertical: spacing.card_padding,
    justifyContent: 'space-between',
    paddingRight: spacing.left_main,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
