'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import TabTwoScreenOne from './screens/TabTwoScreenOne'
import TabTwoScreenTwo from './screens/TabTwoScreenTwo'

const routes = {
  TabTwoScreenOne: { screen: TabTwoScreenOne },
  TabTwoScreenTwo: { screen: TabTwoScreenTwo },
}
// going to disable the header for now

const options = {
  headerMode: 'none',
  initialRoute: 'TabTwoScreenOne'
}

export const NavigatorTabTwo = StackNavigator(routes, options)
