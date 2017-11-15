// import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

// create a component
const TabButton = (props) => {
    return (
        <MaterialCommunityIcons size={28} name={props.name} color={props.color} style={styles.icon} />
    );
};

// define your styles
const styles = StyleSheet.create({
    icon: {
        // justifyContent: 'center',
        // alignItems: 'center',
    },
});

// make this component available to the app
export default TabButton;
