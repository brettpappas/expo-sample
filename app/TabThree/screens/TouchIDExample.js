'use strict'
import React from 'react'
import { Fingerprint } from 'expo'
import { View, Text, StyleSheet } from 'react-native'
import { BackButton, MyButton } from '../../components'
import style from '../../styles'

export default class TouchIDExample extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'FingerPrint API',
        headerLeft: <BackButton navigation={navigation} />,
    });

    state = {
        waiting: false,
    };

    render() {
        let authFunction = async () => {
            this.setState({ waiting: true });
            try {
                let result = await Fingerprint.authenticateAsync('This message only shows up on iOS.');

                if (result.success) {
                    alert('Authenticated!');
                } else {
                    alert('Failed to authenticate');
                }
            } finally {
                this.setState({ waiting: false });
            }
        };

        return (
            <View style={style.baseWindow}>
                <MyButton onPress={authFunction}>
                    {this.state.waiting
                    ? 'Waiting for fingerprint... '
                    : 'Authenticate with fingerprint'}
                </MyButton>
            </View>
        );
    }
}
