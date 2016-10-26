/**
 * Created by maps_red on 11/10/16.
 */
//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    AsyncStorage,
    Navigator,
} from 'react-native';

const API_URL = "http://opendata.paris.fr/api/records/1.0/search/?dataset=stations-velib-disponibilites-en-temps-reel&facet=banking&facet=bonus&facet=status&facet=contract_name";

class ApiClient {
    constructor() {
        this.cache = AsyncStorage
    }

    async get(url) {
        const key = encodeURIComponent(url);
        try {
            let value = await this.cache.getItem(key);
            if (value !== null) {
                return Promise.resolve({data: JSON.parse(value), from: "Cache"});
            }else {
                return fetch(url)
                    .then(response => response.json())
                    .then((json) => {
                        this.cache.setItem(key, JSON.stringify(json));
                        return {data: json, from: 'API'};
                    })
            }
        }catch (error) {
            // Error retrieving data
        }
    }

    clearCache() {
        AsyncStorage.clear();
    }
}

class AwesomeProject extends Component {
    constructor() {
        super();
    }
    render() {
        const data = JSON.stringify(this.state.data);
        return (
            <Navigator initialRoute={{title: 'My Initial Scene', index: 0}} renderScene={(route, navigator) =>
                <MyScene title={route.title}
                         onForward={ () => {
                             const nextIndex = route.index + 1;
                             navigator.push({
                                 title: 'Scene ' + nextIndex,
                                 index: nextIndex,
                             });
                         }}
                         onBack={() => {
                             if (route.index == 3) {
                                 navigator.push({
                                     title: 'Scene ' + 1,
                                     index: 1,
                                 });
                             } else if (route.index > 0) {
                                 navigator.pop();
                             }
                         }}/>
            }/>
        )
    }
}

AppRegistry.registerComponent('AwesomeProject', () => {
    return AwesomeProject;
});