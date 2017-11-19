'use strict'
import { TabNavigator } from 'react-navigation'

// Tab-Navigators
import TabOneNavigation from '../TabOne'
import TabTwoNavigation from '../TabTwo'
import TabThreeNavigation from '../TabThree'

const routes = {
    TabOneNavigation: { screen: TabOneNavigation },
    TabTwoNavigation: { screen: TabTwoNavigation },
    TabThreeNavigation: { screen: TabThreeNavigation },
}

const config = {
    navigationOptions: () => ({
        headerTitleStyle: {
            fontWeight: 'normal',
            color: '#fff',
        },
        headerStyle: {
            backgroundColor: '#1997ed',
        },
    }),
    tabBarOptions: {
        activeTintColor: '#0084fb',
        inactiveTintColor: '#999',
        // activeBackgroundColor: '',
        // inactiveBackgroundColor: '',
        labelStyle: {
        },
        style: {
        },
        tabStyle: {
        }
    }
}

export const MainTabs = TabNavigator(routes, config)
