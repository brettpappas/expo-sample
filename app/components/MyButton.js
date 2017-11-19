// import libraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

// create a component
export function MyButton(props) {
    let icon = <View />;
    let label = <Text />;
    let spacer = <View />;

    if (props.icon && props.children) {
        spacer = <View style={{marginLeft:10}} />;
    }

    if (props.icon) {
        icon = <MaterialCommunityIcons name={props.icon} size={24} style={styles.icon} />;
    }

    if (props.children) {
        label = <Text style={styles.label}>{props.children}</Text>;
    }

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            {icon}
            {spacer}
            {label}
        </TouchableOpacity>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#1997ed',
        marginTop: 20
    },
    label: {
        color: '#fff',
        fontSize: 18,
    },
    icon: {
        color: '#fff',
    }
});

// make this component available to the app
// export default MyButton;
