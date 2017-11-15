'use strict'
import { StyleSheet, Dimensions } from 'react-native'
var { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    baseWindow: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
