import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';

// Redux
import { Provider } from 'react-redux'
import store from './app/store'

// Navigation
import TabBar from './app/TabBar'

export default class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isLoadingComplete: false,
        };
    }

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            return (
                <Provider store={store}>
                    <TabBar />
                </Provider>
            );
        }
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Font.loadAsync([
                // Ionicons.font,
                {'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')},
                {'roboto': require('./assets/fonts/Roboto-Regular.ttf')},
            ]),
        ]);
    };

    _handleLoadingError = error => {
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };
}
