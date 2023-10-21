import {Dimensions, StyleSheet} from 'react-native';
import spacing from '../../../constants/styles/spacing';
import colors from '../../../constants/styles/colors';
import fontSizes from '../../../constants/styles/fontSizes';
import radius from '../../../constants/styles/radius';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: width * 0.42,
    height: height * 0.17,
    padding: spacing.card_padding,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: colors.paywall_card,
    borderRadius: radius.main,
  },
  icon_container: {
    height: (height + width) * 0.035,
    width: (height + width) * 0.035,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: radius.main,
  },
  icon: {
    height: (height + width) * 0.017,
    width: (height + width) * 0.017,
  },
  highlighted_label: {
    fontSize: fontSizes.textBig,
    color: 'white',
    fontWeight: 'bold',
  },
  label: {
    fontSize: fontSizes.text,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: height * 0.01,
  },
});
