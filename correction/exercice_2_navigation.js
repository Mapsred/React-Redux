/**
 * Created by maps_red on 11/10/16.
 */
//noinspection JSUnresolvedVariable
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity
} from 'react-native';

const routes = [
    {title: 'First Scene', index: 0},
    {title: 'Second Scene', index: 1},
    {title: 'Third Scene', index: 2},
    {title: 'Fourth Scene', index: 3},
];

export default class AwesomeProject extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ title: 'Awesome Scene', index: 0 }}
                renderScene={(route, navigator) => {
                    return <View style={styles.container}>
                        <TouchableOpacity onPress={() => {
                            if (routes[route.index+1]) {
                                navigator.push(routes[route.index+1])
                            } else {
                                navigator.popToTop();
                            }
                        }}>
                            <Text style={styles.text}>Hello {route.title}!</Text>
                            <Text>Scene {route.index}</Text>
                        </TouchableOpacity>
                    </View>
                }}
                style={{paddingTop: 30}}
            />
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
    text: {
        fontSize: 15
    }
});
AppRegistry.registerComponent('AwesomeProject', () => {
    return AwesomeProject;
});