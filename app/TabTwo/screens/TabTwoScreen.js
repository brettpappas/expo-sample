'use strict'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MyButton from '../../components/MyButton'

export default class TabTwoScreen extends React.Component {
    static navigationOptions = {
        title: 'API Examples',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontWeight:'bold', fontSize:20, marginBottom:10}}>Tab Two</Text>

                <MyButton onPress={() => this.props.navigation.navigate('ApiExample')}>
                    API Example
                </MyButton>

                <MyButton onPress={() => this.props.navigation.navigate('MapExample')}>
                    Map Example
                </MyButton>

                <MyButton onPress={() => this.props.navigation.navigate('ReduxExample')}>
                    Redux Example
                </MyButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
