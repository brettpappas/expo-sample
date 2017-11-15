'use strict'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MyButton from '../../components/MyButton'

export default class TabTwoScreenOne extends React.Component {
    static navigationOptions = {
        title: 'API Example',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontWeight:'bold', fontSize:20, marginBottom:10}}>Tab Two: ApiExample.js</Text>
                <Text>This screen uses a custom BackButton in the header since the default one takes you back to Tab One.</Text>

                <MyButton onPress={() => this.props.navigation.navigate('ReduxExample')}>
                    Go to next screen this tab
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
