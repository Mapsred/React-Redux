/**
 * Created by maps_red on 06/11/16.
 */
import React from 'react';
import {View, Text} from 'react-native';

export default class ChatView extends React.Component {
    render() {
        if (this.props.currentMessage.status) {
            return (
                <View refreshing>
                    <Text style={{textAlign: "center", color: "#DDD"}}>{this.props.currentMessage.status}</Text>
                </View>
            );
        }
        return null;
    }
}

ChatView.defaultProps = {
    currentMessage: {},
    containerStyle: {},
};

ChatView.propTypes = {
    currentMessage: React.PropTypes.object,
    containerStyle: View.propTypes.style,
};