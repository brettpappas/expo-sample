'use strict'

// React
import React from 'react'
import { connect } from 'react-redux'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabOne } from './routes'

// Icon
import { TabButton } from '../components'

const mapStateToProps = (state) => {
    return {
        navigationState: state.tabOne
    }
}

class TabOneNavigation extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Tab One',
        tabBarIcon: ({ tintColor }) => <TabButton name='code-braces' color={tintColor} />
    }

    render() {
        const { navigationState, dispatch } = this.props
        return (
            <NavigatorTabOne
                navigation={
                    addNavigationHelpers({
                        dispatch: dispatch,
                        state: navigationState
                    })
                }
            />
        )
    }
}

export default connect(mapStateToProps)(TabOneNavigation)
