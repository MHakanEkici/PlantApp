import {Dimensions, StyleSheet} from 'react-native';
import spacing from '../../../constants/styles/spacing';
import colors from '../../../constants/styles/colors';
import fontSizes from '../../../constants/styles/fontSizes';
import radius from '../../../constants/styles/radius';

const {height, width} = Dimensions.get('window');

const base_style = StyleSheet.create({
  container: {
    padding: spacing.card_padding,
    borderRadius: radius.main,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.paywall_card,
    width: width * 0.9,
    height: (width + height) * 0.05,
    flexDirection: 'row',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: (width + height) * 0.0005,
  },
  selection_dot: {
    marginRight: spacing.card_padding,
    backgroundColor: colors.paywall_card,
    width: (width + height) * 0.023,
    height: (width + height) * 0.023,
    borderRadius: radius.circle,
  },
  info_container: {
    flex: 1,
  },
  duration: {
    color: 'white',
    fontSize: fontSizes.text,
    fontWeight: 'bold',
  },
  info: {
    fontSize: fontSizes.textSmall,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  badge: {
    backgroundColor: colors.theme,
    zIndex: 1,
    top: 0,
    right: 0,
    position: 'absolute',
    borderTopRightRadius: radius.main,
    borderBottomLeftRadius: radius.main + 8,
    padding: (width + height) * 0.006,
    paddingLeft: (width + height) * 0.01,
  },
  badge_text: {
    color: 'white',
    fontSize: fontSizes.textSmall,
    fontWeight: '700',
  },
});

export default {
  default: base_style,
  selected: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: 'transparent',
      borderColor: colors.theme,
      borderWidth: (width + height) * 0.001,
    },
    selection_dot: {
      ...base_style.selection_dot,
      backgroundColor: 'white',
      borderWidth: (width + height) * 0.008,
      borderColor: colors.theme,
    },
  }),
};
