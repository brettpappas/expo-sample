'use strict'
import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { BackButton, MyButton } from '../../components'

export default class TabTwoScreenOne extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'API Example',
        headerLeft: <BackButton navigation={navigation} />,
    });

    constructor(props) {
        super(props);

        this.config = {
            apiUrl: 'https://jsonplaceholder.typicode.com/users',
        };

        this.state = {
            users: [],
            selected: 0,
            status: {
                door_1: { action: '' },
                door_2: { action: '' },
            },
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <View style={styles.header}>
                    <Text style={styles.headerText}>Tab Two: ApiExample.js</Text>
                </View> */}
                {/* <Text>Door 1: {this.state.status.door_1.action}</Text>
                <Text>Door 2: {this.state.status.door_2.action}</Text> */}
                <FlatList
                    data={this.state.users}
                    extraData={this.state}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        )
    }

    _renderItem = ({item}) => (
        <View key={item.id} style={styles.row}>
            <Text style={styles.username}>{item.name}</Text>
        </View>
    );

    _keyExtractor = (item) => item.id;

    async fetchUsers() {
        console.log('fetchUsers:', this.config.apiUrl);

        try {
            let response = await fetch(this.config.apiUrl);
            let responseJson = [];

            try {
                responseJson = await response.json();
            } catch (error) {
                console.log(error);
                responseJson = [];
            }

            // console.log('users:', responseJson);
            this.setState({ users: responseJson, selected: 1 });
        } catch (error) {
            console.log('error:', error);
        }
    }

    async fetchStatus() {
        let rs = await HomeBot.fetch('/garage/door/status')
        console.log('doorStatus:', rs);
        this.setState({ status: rs });
    }

    componentDidMount() {
        this.fetchUsers();
        // this.fetchStatus();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    row: {
        padding: 15,
        marginBottom: 1,
        backgroundColor: '#fff',
    },
    username: {
        fontSize: 20,
    },
});
