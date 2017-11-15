'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import TabThreeScreenOne from './screens/TabThreeScreenOne'
import TabThreeScreenTwo from './screens/TabThreeScreenTwo'
import TabThreeScreenThree from './screens/TabThreeScreenThree'

const routes = {
  TabThreeScreenOne: { screen: TabThreeScreenOne },
  TabThreeScreenTwo: { screen: TabThreeScreenTwo },
  TabThreeScreenThree: { screen: TabThreeScreenThree },

}
// going to disable the header for now
const options = {
  headerMode: 'none',
  initialRoute: 'TabThreeScreenOne'
}

export const NavigatorTabThree = StackNavigator(routes, options)
