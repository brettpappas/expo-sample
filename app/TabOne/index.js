'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabOne } from './routes'

// Redux
import { connect } from 'react-redux'

// Icon
// import { FontAwesome } from '@expo/vector-icons'
import TabButton from '../components/TabButton'

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

  render(){
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
