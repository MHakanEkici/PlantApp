import {Dimensions, Platform, StatusBar} from 'react-native';

const {height, width} = Dimensions.get('window');

export default {
  title: FontSizePercentage(3.7),
  titleBig: FontSizePercentage(4.7),
  titleSmall: FontSizePercentage(2.7),

  text: FontSizePercentage(2),
  textBig: FontSizePercentage(2.5),
  textSmall: FontSizePercentage(1.5),
};

function FontSizePercentage(percent) {
  const {height, width} = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset =
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight;

  const deviceHeight =
    isIphoneX() || Platform.OS === 'android'
      ? standardLength - offset
      : standardLength;

  const heightPercent = (percent * deviceHeight) / 100;
  // return Math.round(heightPercent);
  return heightPercent;
}

function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926)
  );
}
