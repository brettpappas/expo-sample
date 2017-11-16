'use strict'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MyButton from '../../components/MyButton'
import BackButton from '../../components/BackButton'
import style from '../../styles'

export default class CustomFonts extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Custom Fonts',
        headerLeft: <BackButton navigation={navigation} />,
    });

    constructor (props) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        return (
            <View style={style.baseWindow}>

                <Text style={{fontFamily: 'Inconsolata-Bold', fontSize:22, marginTop:20}}>
                    Custom font Inconsolata Bold.
                </Text>

                <Text style={{fontFamily: 'OpenSans-Bold', fontSize:22, marginTop:20}}>
                    Custom font OpenSans-Bold.
                </Text>

                <Text style={{fontFamily: 'Roboto', fontSize:22, marginTop:20}}>
                    Custom font Roboto Regular.
                </Text>

                <Text style={{fontFamily: 'Roboto-Bold', fontSize:22, marginTop:20}}>
                    Custom font Roboto Bold.
                </Text>

                <Text style={{fontFamily: 'Lato-Bold', fontSize:22, marginTop:20}}>
                    Custom font Lato Bold.
                </Text>

                <Text style={{fontFamily: 'PT_Sans-Bold', fontSize:22, marginTop:20}}>
                    Custom font PT_Sans Bold.
                </Text>

                <Text style={{fontFamily: 'PT_Sans-Narrow-Bold', fontSize:22, marginTop:20}}>
                    Custom font PT_Sans-Narrow Bold.
                </Text>

                <Text style={{fontFamily: 'Titillium-Bold', fontSize:22, marginTop:20}}>
                    Custom font Titillium Bold.
                </Text>
            </View>
        )
    }
}
