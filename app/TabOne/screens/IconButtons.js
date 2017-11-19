'use strict'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BackButton, MyButton } from '../../components'
import style from '../../styles'

export default class IconButtons extends React.Component {
    static navigationOptions = {
        title: 'Icon Buttons',
        statusBarStyle: 'light-content',
        barStyle: 'light-content',
    };

    render() {
        return (
            <View style={style.baseWindow}>
                <MyButton onPress={() => this.props.navigation.goBack()} icon='backburger'>
                    Go Back
                </MyButton>
                <MyButton onPress={() => this.props.navigation.goBack()} icon='bluetooth-audio' />
            </View>
        )
    }
}
