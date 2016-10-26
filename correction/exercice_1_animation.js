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
    Animated,
} from 'react-native';

export default class AwesomeProject extends Component {
    constructor() {
        super();

        this.state = {
            height: new Animated.Value(0.5),
        };
    }

    cycleAnimation() {
        Animated.sequence([
            Animated.timing(this.state.height, {
                toValue: 5,
                duration: 2000
            }),
            Animated.timing(this.state.height, {
                toValue: 0,
                duration: 2000
            })
        ]).start(event => {
            if (event.finished) {
                this.cycleAnimation();
            }
        });
    }

    componentDidMount() {
        this.cycleAnimation();
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View
                    style={StyleSheet.flatten([styles.view1, {flex: this.state.height}])}
                >
                    <Text>View 1</Text>
                </Animated.View>

                <Animated.View style={StyleSheet.flatten([styles.view2, {flex: 1}])}>
                    <Text>View 2</Text>
                </Animated.View>
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
        borderWidth: 1,
        borderColor: '#d6d7da',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view2: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCC'
    }
});
AppRegistry.registerComponent('AwesomeProject', () => {
    return AwesomeProject;
});