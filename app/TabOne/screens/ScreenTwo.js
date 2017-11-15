'use strict'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MyButton from '../../components/MyButton'

export default class ScreenTwo extends React.Component {
    static navigationOptions = {
        title: 'Config',
        statusBarStyle: 'light-content',
        barStyle: 'light-content',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Tab One Screen Two</Text>
                <MyButton onPress={() => this.props.navigation.goBack()} icon='backburger'>
                    Go back a screen this tab
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
