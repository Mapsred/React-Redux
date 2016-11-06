//noinspection JSUnresolvedVariable

import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ''};
        this.messages = [];
    }

    render() {
        return (
            <View style={{flex: 1}} refreshing>
                <View style={styles.contactNameParent} refreshing>
                    <Text style={styles.contactName}>Contact Name</Text>
                </View>
                {/*Message view*/}
                <View style={styles.messageView} refreshing>
                    <Text style={[styles.commonChat, styles.sender]}>Hi, welcome to the chat room !
                        <Text style={styles.timer}>17:20</Text>
                    </Text>
                    <Text style={[styles.commonChat, styles.receiver]}>
                        Test
                        <Text style={styles.timer}>18:49</Text>
                    </Text>
                </View>
                {/*END Message view*/}
                <View style={{flex: 0.1}} refreshing>
                    <TextInput onChangeText={ (message) => this.setState({message}) }
                               value={ this.state.message } placeholder={"Type a message"}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contactNameParent: {backgroundColor: '#434748', padding: 20},
    contactName: {color: 'white', fontWeight: 'bold', fontSize: 18},
    sender: {
        backgroundColor: "#B2B4B5",
        color: "black",
        alignSelf: 'flex-end',
        marginRight: 50,
    },
    receiver: {
        backgroundColor: "white",
        color: "black",
        alignSelf: 'flex-start',
        marginLeft: 50,
    },

    commonChat : {
        marginBottom: 20,
        padding: 15,
        minHeight: 40,
        borderRadius: 5,
    },
    messageView: {
        backgroundColor: '#f2f0ee',
        flex: 0.8,
        paddingTop: 20
    },

    timer: {
        fontSize: 10,
        paddingLeft: 10,
        alignSelf: 'flex-end',
    }
});
