'use strict'
// React
import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabThree } from './routes'
import { TabButton } from '../components'

const mapStateToProps = (state) => {
    return {
        navigationState: state.tabThree
    }
}

class TabThreeNavigation extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Tab Three',
        tabBarIcon: ({ tintColor }) => <TabButton name='atom' color={tintColor} />
    }

    render() {
        const { dispatch, navigationState} = this.props
        return (
            <NavigatorTabThree
                navigation={addNavigationHelpers({
                    dispatch: dispatch,
                    state: navigationState
                })}
            />
        )
    }
}

export default connect(mapStateToProps)(TabThreeNavigation)
