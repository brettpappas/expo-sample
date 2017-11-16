'use strict'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MyButton from '../../components/MyButton'
import BackButton from '../../components/BackButton'

export default class TabTwoScreenTwo extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Redux Example',
        headerLeft: <BackButton navigation={navigation} />,
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontWeight:'bold', fontSize:20, marginBottom:10}}>Tab Two: ReduxExample.js</Text>
                <Text>This screen uses a custom BackButton in the header since the default one takes you back to Tab One.</Text>
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
