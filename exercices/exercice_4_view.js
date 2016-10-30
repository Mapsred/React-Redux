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
} from 'react-native';

export default class AwesomeProject extends Component {
    render() {
        return (
            <View style={styles.container} refreshing>
                <View style={StyleSheet.flatten([styles.view1])} refreshing>
                    <Text style={StyleSheet.flatten([styles.title])}>Velibs</Text>
                    <Text>Nom : Velib n 01</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF'
    },
    view1: {
        flex: 0.5,
        borderWidth: 1,
        borderColor: '#d6d7da',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    }
});
AppRegistry.registerComponent('AwesomeProject', () => {
    return AwesomeProject;
});