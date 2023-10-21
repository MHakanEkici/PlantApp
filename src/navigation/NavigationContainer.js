import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './routes';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PaywallScreen from '../screens/PaywallScreen';
import Onboarding from '../screens/Onboarding/Onboarding';
import GettingStarted from '../screens/GettingStarted';

export default function NavigationContainter() {
  const Stack = createStackNavigator();

  const [isOnboardSkipped, setIsOnboardSkipped] = useState(false);

  useEffect(() => {
    //TODO isOnboardSkipped
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isOnboardSkipped ? (
          <>
            <Stack.Screen
              name={routes.HOME_SCREEN}
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={routes.PAYWALL_SCREEN}
              component={PaywallScreen}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name={routes.GETTING_STARTED}
              component={GettingStarted}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={routes.ONBOARDING}
              component={Onboarding}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={routes.PAYWALL_SCREEN}
              component={PaywallScreen}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
