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
                {'Inconsolata': require('./assets/fonts/Inconsolata-Regular.ttf')},
                {'Inconsolata-Bold': require('./assets/fonts/Inconsolata-Bold.ttf')},
                {'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf')},
                {'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf')},
                {'Roboto': require('./assets/fonts/Roboto-Regular.ttf')},
                {'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')},
                {'Lato': require('./assets/fonts/Lato-Regular.ttf')},
                {'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf')},
                {'PT_Sans': require('./assets/fonts/PT_Sans-Regular.ttf')},
                {'PT_Sans-Bold': require('./assets/fonts/PT_Sans-Bold.ttf')},
                {'PT_Sans-Narrow': require('./assets/fonts/PT_Sans-Narrow-Regular.ttf')},
                {'PT_Sans-Narrow-Bold': require('./assets/fonts/PT_Sans-Narrow-Bold.ttf')},
                {'Titillium': require('./assets/fonts/Titillium-Regular.ttf')},
                {'Titillium-Bold': require('./assets/fonts/Titillium-Bold.ttf')},
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
