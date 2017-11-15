'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native'
import { ImagePicker, Permissions } from 'expo';

import MyButton from '../../components/MyButton'
import BackButton from '../../components/BackButton'
import style from '../../styles'

export default class CameraScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Camera / Image Picker',
        headerLeft: <BackButton navigation={navigation} />,
    });

    constructor(props) {
        super(props);

        this.state = {
            image: null,
        };
    }

    render() {
        let { image } = this.state;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Pick an image from camera roll" onPress={this._pickImage} />
                <Button title="Take a picture using the camera" onPress={this._captureImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
        );
    }

    _captureImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64: true,
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };
}

const styles = StyleSheet.create({
    button: {
        // flex: 0.1,
        backgroundColor: '#0084fb',
        padding: 10,
        margin: 5,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

