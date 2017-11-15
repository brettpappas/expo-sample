'use strict'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'

// Screens
import ApiExample from './screens/ApiExample'
import ReduxExample from './screens/ReduxExample'

const routes = {
    ApiExample: { screen: ApiExample },
    ReduxExample: { screen: ReduxExample },
}

const config = {
    // headerMode: 'none',
    headerLeft: <Text>Go Back</Text>,
    initialRoute: 'ApiExample'
}

export const NavigatorTabTwo = StackNavigator(routes, config)