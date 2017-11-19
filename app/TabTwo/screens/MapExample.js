import React from 'react';
import { MapView } from 'expo';
import { BackButton, MyButton } from '../../components'

export default class MapExample extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Map Example',
        headerLeft: <BackButton navigation={navigation} />,
    });

    render() {
        return (
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 39.103119,
                    longitude: -84.512016,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        );
    }
}