'use strict'
import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Constants } from 'expo'
import MyButton from '../../components/MyButton'
import BackButton from '../../components/BackButton'
import style from '../../styles'

export default class DeviceInfo extends React.Component {
    static navigationOptions = {
        title: 'Device Info',
        statusBarStyle: 'light-content',
        barStyle: 'light-content',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={style.baseWindow}>
                <Text style={{fontFamily: 'PT_Sans', fontSize: 18, marginTop: 10}}>
                    Constants.appOwnership:{"\n"}
                    {Constants.appOwnership}{"\n\n"}

                    Constants.expoVersion:{"\n"}
                    {Constants.expoVersion}{"\n\n"}

                    Constants.deviceId:{"\n"}
                    {Constants.deviceId}{"\n\n"}

                    Constants.platform.ios.model:{"\n"}
                    {Constants.platform.ios.model}{"\n\n"}

                    Constants.platform.ios.platform:{"\n"}
                    {Constants.platform.ios.platform}{"\n\n"}

                    Constants.deviceYearClass:{"\n"}
                    {Constants.deviceYearClass}{"\n\n"}

                    Constants.platform.ios.systemVersion:{"\n"}
                    {Constants.platform.ios.systemVersion}{"\n\n"}
                </Text>
            </View>
        )
    }
}
