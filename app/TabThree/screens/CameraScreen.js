'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MyButton from '../../components/MyButton'
import BackButton from '../../components/BackButton'
import style from '../../styles'

export default class CameraScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Camera Screen',
        headerLeft: <BackButton navigation={navigation} />,
    });

    render() {
        return (
            <View style={style.baseWindow}>
            </View>
        )
    }
}
