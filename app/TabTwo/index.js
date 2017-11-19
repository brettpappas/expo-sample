'use strict'
import React from 'react'
import { connect } from 'react-redux'

import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabTwo } from './routes'
import { TabButton } from '../components'

const mapStateToProps = (state) => {
    return {
        navigationState: state.tabTwo
    }
}

class TabTwoNavigation extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Tab Two',
        tabBarIcon: ({ tintColor }) => <TabButton name='comment-check' color={tintColor} />
    }

    render() {
        const { dispatch, navigationState} = this.props
        return (
            <NavigatorTabTwo
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

export default connect(mapStateToProps)(TabTwoNavigation)
