// import libraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons'

// create a component
const MyButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Text style={{color:'#fff'}}>{props.children}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        padding:20,
        borderRadius:10,
        backgroundColor:'#1997ed',
        marginTop:20
    },
});

// make this component available to the app
export default MyButton;
