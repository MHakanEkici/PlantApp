import React from 'react';
import {
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DeviceInfo from 'react-native-device-info';
import routes from './routes';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../constants/styles/colors';
import radius from '../constants/styles/radius';

import HomeScreen from '../screens/HomeScreen';
import HomeScreenHeader from '../components/HomeScreenHeader';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');
const hasNotch = DeviceInfo.hasNotch();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={1}>
    {children}
  </TouchableOpacity>
);

const CustomTabBarIcon = () => (
  <Image
    resizeMode="contain"
    style={styles.image}
    source={require('../assets/Icons/ScanButton.png')}
  />
);

const TabBarIcon = (rest, iconName) => (
  <Icon name={iconName} size={width * 0.06} {...rest} />
);

const TabBarIonicon = (rest, iconName) => (
  <Ionicons name={iconName} size={width * 0.06} {...rest} />
);

const Header = () => <HomeScreenHeader />;

export default function HomeTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.theme,
        tabBarInactiveTintColor: '#BDBDBD',
      })}>
      <Tab.Screen
        name={routes.HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, ...rest}) => TabBarIonicon(rest, 'albums'),
          tabBarLabel: 'Home',
          title: '',
          headerBackground: Header,
          headerBackgroundContainerStyle: styles.header_container,
        }}
      />
      <Tab.Screen
        name={routes.DIAGNOSE}
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, ...rest}) => TabBarIcon(rest, 'shield-plus'),
        }}
      />
      <Tab.Screen
        name={routes.SCAN_SCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: CustomTabBarIcon,
          tabBarButton: props => CustomTabBarButton(props),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name={routes.MY_GARDEN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, ...rest}) => TabBarIcon(rest, 'leaf'),
        }}
      />
      <Tab.Screen
        name={routes.PROFILE}
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, ...rest}) => TabBarIcon(rest, 'account'),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  button: {
    top: -height * 0.045,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.19,
    height: width * 0.19,
    borderRadius: radius.circle,
  },
  image: {
    height: width * 0.2,
    width: width * 0.2,
    marginTop: hasNotch && Platform.OS === 'ios' ? width * 0.05 : 0,
    bottom: -5,
    alignSelf: 'center',
  },
  icon_style: {
    width: (height + width) * 0.025,
    height: (height + width) * 0.025,
  },
  header_container: {
    height: height * 0.24,
  },
});
