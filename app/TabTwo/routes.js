'use strict'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'

// Screens
import TabTwoScreen from './screens/TabTwoScreen'
import ApiExample from './screens/ApiExample'
import ReduxExample from './screens/ReduxExample'
import MapExample from './screens/MapExample'

const routes = {
    TabTwoScreen: { screen: TabTwoScreen },
    ApiExample: { screen: ApiExample },
    ReduxExample: { screen: ReduxExample },
    MapExample: { screen: MapExample },
}

const config = {
    // headerMode: 'none',
    headerLeft: <Text>Go Back</Text>,
    initialRoute: 'TabTwoScreen'
}

export const NavigatorTabTwo = StackNavigator(routes, config)