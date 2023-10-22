import {Dimensions, Platform, StatusBar} from 'react-native';

const {height, width} = Dimensions.get('window');

export default {
  title: FontSizePercentage(3.7),
  titleSmall: FontSizePercentage(2.7),

  text: FontSizePercentage(2),
  textBig: FontSizePercentage(2.5),
  textSmall: FontSizePercentage(1.5),
};

function FontSizePercentage(percent) {
  const standardLength = width > height ? width : height;
  const offset =
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight;

  const deviceHeight =
    isIphoneX() || Platform.OS === 'android'
      ? standardLength - offset
      : standardLength;

  const heightPercent = (percent * deviceHeight) / 100;
  return heightPercent;
}

function isIphoneX() {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 780 ||
      width === 780 ||
      height === 812 ||
      width === 812 ||
      height === 844 ||
      width === 844 ||
      height === 896 ||
      width === 896 ||
      height === 926 ||
      width === 926)
  );
}
