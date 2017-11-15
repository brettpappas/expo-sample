'use strict'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MyButton from '../../components/MyButton'

export default class TabOneScreenTwo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Tab One Screen Two</Text>
                <MyButton onPress={() => this.props.navigation.goBack()}>
                    Go back a screen this tab
                </MyButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#69c',
        alignItems:'center',
        justifyContent:'center'
    },
});
