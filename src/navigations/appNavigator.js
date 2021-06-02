import { createStackNavigator } from 'react-navigation-stack';
import * as Utils from '../utility';

import {SCREEN_GALLARY } from '../utility/constants';


import Calculator from '../components/screens/ProfileTabScreens/Calculator';

const RouteConfig = {
  
  [SCREEN_GALLARY]: Calculator
};

const APPNavigatorConfig = {
  initialRouteName: Utils.Constants.SCREEN_GALLARY,
  header: null,
  headerMode: 'none'
};

const APPNavigator = createStackNavigator(RouteConfig, APPNavigatorConfig)

export default APPNavigator;
