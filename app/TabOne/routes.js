'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import Welcome from './screens/Welcome'
import CustomFonts from './screens/CustomFonts'
import IconButtons from './screens/IconButtons'
import DeviceInfo from './screens/DeviceInfo'

const routes = {
  Welcome: { screen: Welcome },
  CustomFonts: { screen: CustomFonts },
  IconButtons: { screen: IconButtons },
  DeviceInfo: { screen: DeviceInfo },
}

// going to disable the header for now
const options = {
  // headerMode: 'none',
  initialRouteName: 'Welcome'
}

export const NavigatorTabOne = StackNavigator(routes, options)
