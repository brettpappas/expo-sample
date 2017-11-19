// import libraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

// create a component
export function BackButton(props) {
    return (
        <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.container}>
            <MaterialCommunityIcons name='chevron-left' size={36} style={styles.icon} />
        </TouchableOpacity>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        padding: 10,
        marginLeft: -10,
        // borderRadius: 10,
        // backgroundColor: '#1997ed',
        // marginTop: 20
    },
    label: {
        color: '#fff',
        fontSize: 18,
    },
    icon: {
        color: '#1997ed',
        // marginTop: 2,
        // marginRight: 10,
        // marginLeft: 10,
    }
});

// make this component available to the app
// export default BackButton;
