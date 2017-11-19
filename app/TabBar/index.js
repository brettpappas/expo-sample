'use strict'

// React
import React from 'react'
import { connect } from 'react-redux'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { MainTabs } from './routes'

const mapStateToProps = (state) => {
  return {
    navigationState: state.tabBar,
  }
}

class TabBar extends React.Component {

    render() {
        const { dispatch, navigationState } = this.props
        return (
            <MainTabs
                navigation={
                    addNavigationHelpers({
                        dispatch: dispatch,
                        state: navigationState,
                    })
                }
            />
        )
    }
}

export default connect(mapStateToProps)(TabBar)
