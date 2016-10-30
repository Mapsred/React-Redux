/**
 * Created by maps_red on 30/10/16.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

const API_URL = 'http://opendata.paris.fr/api/records/1.0/search/?dataset=stations-velib-disponibilites-en-temps-reel&facet=banking&facet=bonus&facet=status&facet=contract_name';

class AwesomeProject {
    constructor() {
        this.cache = AsyncStorage
    }

    async get(url) {
        const key = encodeURIComponent(url);
        try {
            let value = await this.cache.getItem(key);
            if (value !== null) {
                return Promise.resolve({data: JSON.parse(value), from: 'Cache'});
            } else {
                return fetch(url)
                    .then(response => response.json())
                    .then((json) => {
                        this.cache.setItem(key, JSON.stringify(json));
                        return {data: json, from: 'API'};
                    })
                    ;
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    clearCache() {
        AsyncStorage.clear();
    }
}

export default class Ex3ApiClientCache extends Component {
    constructor() {
        super();

        this.apiClient = new ApiClient();
        this.state = {
            data: {},
            requestFrom: ''
        };
    }

    render() {
        const data = JSON.stringify(this.state.data);
        return (
            <View style={styles.container} refreshing>
                <TouchableOpacity onPress={() => {
                    this.apiClient.get(API_URL).then((data) => {
                        this.setState({data: data.data, requestFrom: data.from});
                    });
                }}>
                    <Text style={styles.header}>Request API</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>  {
                    this.setState({data: {}});
                    this.apiClient.clearCache();
                }}>
                    <Text style={styles.header}>Clear cache</Text>
                </TouchableOpacity>

                <Text style={styles.text}>Request from: {this.state.requestFrom}</Text>
                <Text>{data ? data.substring(0, 200)+' ...' : '...'}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30
    },
    text: {
        fontSize: 15,
        marginBottom: 10
    }
});

AppRegistry.registerComponent('AwesomeProject', () => {
    return AwesomeProject;
});