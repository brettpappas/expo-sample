'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Camera, Permissions } from 'expo';
import { BackButton, MyButton } from '../../components'
import style from '../../styles'

export default class CameraScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Camera Screen',
        headerLeft: <BackButton navigation={navigation} />,
    });

    constructor(props) {
        super(props);

        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
        };
    }

    async getLocationAsync() {
        const { Location, Permissions } = Expo;
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            return Location.getCurrentPositionAsync({enableHighAccuracy: true});
        } else {
            throw new Error('Location permission not granted');
        }
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    render() {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{flex:1}}>
                    <Camera style={{flex:1}} type={this.state.type}>
                        <View style={{ flex:1, backgroundColor:'transparent', flexDirection:'row' }}>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                    this.setState({
                                        type: this.state.type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back,
                                    });
                                }}>
                                <Text style={{fontSize:24,color:'#fff'}}>
                                    Flip
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
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

