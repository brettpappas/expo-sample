// import libraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

// create a component
const MyButton = (props) => {
    let icon = <View />;

    if (props.icon) {
        icon = <MaterialCommunityIcons name={props.icon} size={24} style={styles.icon} />
    }

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            {icon}
            <Text style={styles.label}>{props.children}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#1997ed',
        marginTop: 20
    },
    label: {
        color: '#fff',
        fontSize: 18,
    },
    icon: {
        color: '#fff',
        // marginTop: 2,
        marginRight: 10,
    }
});

// make this component available to the app
export default MyButton;
