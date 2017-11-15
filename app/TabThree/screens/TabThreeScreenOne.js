'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MyButton from '../../components/MyButton'

export default class TabThreeScreenOne extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'aqua',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Tab Three Screen One' }</Text>

        <MyButton onPress={() => this.props.navigation.navigate('TabThreeScreenTwo')}>
          Go to next screen this tab
        </MyButton>

        <MyButton onPress={() => this.props.navigation.dispatch({ type:'JUMP_TO_TAB', payload:{index:0} })}>
          Jump to Tab One
        </MyButton>

        <MyButton onPress={() => this.props.navigation.dispatch({ type:'JUMP_TO_TAB', payload:{index:1} })}>
          Jump to Tab Two
        </MyButton>
      </View>
    )
  }
}
