/**
 * Created by maps_red on 11/10/16.
 */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {stylesheet} from '../components/style';



export default class AwesomeProject extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {counter, increment, decrement} = this.props;

        return (
            <View style={stylesheet.View} refreshing>
                <Text>Nombre actuel : {counter}</Text>
                <TouchableOpacity onPress={increment} style={stylesheet.button}>
                    <Text>Augmenter</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={decrement} style={stylesheet.button}>
                    <Text>Diminuer</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
