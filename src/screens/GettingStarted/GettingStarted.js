import React from 'react';
import {Text, View} from 'react-native';
import routes from '../../navigation/routes';
import styles from './GettingStarted.style';

import OnboardingTemplete from '../../components/OnboardingTemplete';
import AppText from '../../constants/AppText';

const pageData = {
  backgroundImage: require('../../assets/onboarding/GettingStartedBackground.png'),
  image: require('../../assets/onboarding/GettingStartedImage.png'),
  text: require('../../assets/onboarding/GettingStartedText.png'),
};

export default function GettingStarted({navigation}) {
  function onGetStartedPressed() {
    navigation.navigate(routes.ONBOARDING);
  }

  return (
    <View style={styles.container}>
      <OnboardingTemplete
        item={pageData}
        buttonText={AppText.GetStarted}
        onButtonPressed={onGetStartedPressed}
      />
      <Text style={styles.text}>
        {AppText.GettingStartedScreenText1}
        <Text style={styles.underlined_text} onPress={null}>
          {AppText.GettingStartedScreenText2}
        </Text>
        {AppText.GettingStartedScreenText3}
        <Text style={styles.underlined_text} onPress={null}>
          {AppText.GettingStartedScreenText4}
        </Text>
      </Text>
    </View>
  );
}
