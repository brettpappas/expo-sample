'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import TabOneScreenOne from './screens/TabOneScreenOne'
import TabOneScreenTwo from './screens/TabOneScreenTwo'

const routes = {
  TabOneScreenOne: { screen: TabOneScreenOne },
  TabOneScreenTwo: { screen: TabOneScreenTwo },
}

// going to disable the header for now
const options = {
  headerMode: 'none',
  initialRouteName: 'TabOneScreenOne'
}

export const NavigatorTabOne = StackNavigator(routes, options)
