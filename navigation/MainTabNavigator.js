import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import EventsScreen from '../screens/EventsScreen';
import CelebsScreen from '../screens/CelebsScreen'
import HomeScreen from '../screens/Home';
import MapsScreen from '../screens/MapsScreen';
import SettingsScreen from '../screens/SettingsScreen2';
import TabBarIcon from '../components/TabBarIcon';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});



//Need: Event List(DONE), Celebrities Apperances(DONE), Map(DONE), Settings(DONE), Home(DONE)



const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const EventsStack = createStackNavigator(
  {
    Events: EventsScreen,
  },
  config
);

EventsStack.navigationOptions = {
  tabBarLabel: 'Events',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-journal' : 'md-journal'} />
  ),
};

EventsStack.path = '';

// const SettingsStack = createStackNavigator(
//   {
//     Settings: SettingsScreen,
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
//   ),
// };

// SettingsStack.path = '';

const MapsStack = createStackNavigator(
  {
    Maps: MapsScreen,
  },
  config
);

MapsStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'} />
  ),
};

MapsStack.path = '';

const CelebsStack = createStackNavigator(
  {
    Celebs: CelebsScreen,
  },
  config
);

CelebsStack.navigationOptions = {
  tabBarLabel: 'Celebrity Apperances',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-bowtie' : 'md-bowtie'} />
  ),
};

CelebsStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  MapsStack,
  EventsStack,
  CelebsStack,
  // SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
