import React from 'react';
import {Text, View} from 'react-native';
import OnboardingTemplete from '../../components/OnboardingTemplete';
import routes from '../../navigation/routes';
import styles from './GettingStarted.style';

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
        buttonText={'Get Started'}
        onButtonPressed={onGetStartedPressed}
      />
      <Text style={styles.text}>
        {'By tapping next, you are agreeing to PlantID\n'}
        <Text style={styles.underlined_text} onPress={null}>
          {'Terms of Use '}
        </Text>
        &{' '}
        <Text style={styles.underlined_text} onPress={null}>
          {'Privacy Policy.'}
        </Text>
      </Text>
    </View>
  );
}
