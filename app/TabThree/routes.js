'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import TabThreeScreenOne from './screens/TabThreeScreenOne'
import TouchIDExample from './screens/TouchIDExample'
import CameraScreen from './screens/CameraScreen'

const routes = {
  TabThreeScreenOne: { screen: TabThreeScreenOne },
  TouchIDExample: { screen: TouchIDExample },
  CameraScreen: { screen: CameraScreen },
}

// going to disable the header for now
const options = {
  // headerMode: 'none',
  initialRoute: 'TabThreeScreenOne'
}

export const NavigatorTabThree = StackNavigator(routes, options)
