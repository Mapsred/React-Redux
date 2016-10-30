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
} from 'react-native';

class AwesomeProject extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={StyleSheet.flatten([{height: 50, padding: 10}, this.props.styles])} refreshing>
                <Text>{this.props.title}</Text>
                {this.props.position && <Text>{this.props.position.lat} - {this.props.position.lng}</Text>}
            </View>
        );
    }
}

VelibStation.propTypes = {
    title: React.PropTypes.string.isRequired,
    position: React.PropTypes.object,
    styles: React.PropTypes.object
};

VelibStation.defaultProps = {
    title: 'No title',
    position: null,
    styles: {}
};

export default class Ex4ReusableComponent extends Component {
    constructor() {
        super();
    }

    render() {
        const data = {
            title: "Station 1",
            position: {
                lat: 12.23242,
                lng: 15.24255
            }
        };

        return (
            <View style={styles.container} refreshing>
                <VelibStation />
                <VelibStation title="Mon titre" />
                <VelibStation title={data.title} position={data.position} />
                <VelibStation
                    title="Custom style"
                    styles={{
                        borderWidth: 1,
                        borderColor: 'black',
                        backgroundColor: 'grey'
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
        paddingTop: 40
    }
});
AppRegistry.registerComponent('AwesomeProject', () => {
    return AwesomeProject;
});