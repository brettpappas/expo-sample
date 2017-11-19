'use strict'
import React from 'react'
import { View, Text } from 'react-native'
import { BackButton, MyButton } from '../../components'
import style from '../../styles'

export default class TabThreeScreenOne extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Tab Three: Screen One',
        // headerLeft: <BackButton navigation={navigation} />,
    });

    render() {
        return (
            <View style={style.baseWindow}>
                <MyButton onPress={() => this.props.navigation.navigate('TouchIDExample')}>
                    TouchID Example
                </MyButton>

                <MyButton onPress={() => this.props.navigation.navigate('CameraScreen')}>
                    Custom Camera Example
                </MyButton>

                <MyButton onPress={() => this.props.navigation.navigate('ImagePickerExample')}>
                    Camera / Image Picker
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
