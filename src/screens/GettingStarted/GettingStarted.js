import React from 'react';
import OnboardingTemplete from '../../components/OnboardingTemplete';
import routes from '../../navigation/routes';

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
    <OnboardingTemplete
      item={pageData}
      buttonText={'Get Started'}
      onButtonPressed={onGetStartedPressed}
    />
  );
}
