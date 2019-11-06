import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Maps from '../screens/Maps';
import FloorPlan from '../screens/FloorPlan';

const MainNavigator = createStackNavigator({
  Maps: { screen: Maps },
  Floor: { screen: FloorPlan },
});

export default createAppContainer(MainNavigator);