/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import onboardingConstants from '../redux/constants/onboardingConstants';
import routes from './routes';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PaywallScreen from '../screens/PaywallScreen';
import Onboarding from '../screens/Onboarding/Onboarding';
import GettingStarted from '../screens/GettingStarted';

export default function NavigationContainter() {
  const Stack = createStackNavigator();

  const {isOnboardSkipped} = useSelector(state => state.onboardingReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    checkIsOnboardSkipped();
  }, [isOnboardSkipped]);

  async function checkIsOnboardSkipped() {
    try {
      const onboardingSkipped = await AsyncStorage.getItem('isOnboardSkipped');
      if (onboardingSkipped === null) {
        console.warn('Okundu ' + onboardingSkipped);
        dispatch({
          type: onboardingConstants.SET_IS_ONBOARDING_SKIPPED,
          payload: false,
        });
      }
    } catch (e) {
      console.log('Failed to fetch the input from storage' + e);
    }
  }

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
