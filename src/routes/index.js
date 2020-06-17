import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '../pages/main';
import Func1 from '../pages/func1';
import Func2 from '../pages/func2';
import Func3 from '../pages/func3';

const MainPage = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
    }),
  },
});

const Func1Page = createStackNavigator({
  Func1: {
    screen: Func1,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
    }),
  },
});

const Func2Page = createStackNavigator({
  Func2: {
    screen: Func2,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
    }),
  },
});

const Func3Page = createStackNavigator({
  Func3: {
    screen: Func3,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
    }),
  },
});

const DrawerNavigator = createDrawerNavigator(
  {
    Main: MainPage,
    Func1: Func1Page,
    Func2: Func2Page,
    Func3: Func3Page,
  },
  {
    initialRouteName: 'Main',
  },
);

export default createAppContainer(DrawerNavigator);
