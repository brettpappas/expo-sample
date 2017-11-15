'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import Welcome from './screens/Welcome'
import ScreenTwo from './screens/ScreenTwo'

const routes = {
  Welcome: { screen: Welcome },
  ScreenTwo: { screen: ScreenTwo },
}

// going to disable the header for now
const options = {
  // headerMode: 'none',
  initialRouteName: 'Welcome'
}

export const NavigatorTabOne = StackNavigator(routes, options)
