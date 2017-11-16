'use strict'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MyButton from '../../components/MyButton'

export default class Welcome extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor (props) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Tab One: Welcome screen without a header.</Text>

                <MyButton onPress={() => this.props.navigation.navigate('CustomFonts')}>
                    Custom Fonts
                </MyButton>

                <MyButton onPress={() => this.props.navigation.navigate('IconButtons')}>
                    Icon Buttons
                </MyButton>

                <MyButton onPress={() => this.props.navigation.navigate('DeviceInfo')}>
                    Device Info
                </MyButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#f0f0f0',
        alignItems:'center',
        justifyContent:'center'
    },
});
