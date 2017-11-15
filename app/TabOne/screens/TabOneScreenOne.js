'use strict'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MyButton from '../../components/MyButton'

export default class TabOneScreenOne extends React.Component {

    constructor (props) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Tab One Screen One</Text>

                <Text style={{fontFamily: 'open-sans-bold', fontSize: 20, marginTop:20}}>
                    Custom font OpenSans-Bold.
                </Text>

                <Text style={{fontFamily: 'roboto', fontSize: 20, marginTop:20}}>
                    Custom font Roboto Regular.
                </Text>

                <MyButton onPress={() => this.props.navigation.navigate('TabOneScreenTwo')}>
                    Go to next screen this tab
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
