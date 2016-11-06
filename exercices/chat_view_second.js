/**
 * Created by maps_red on 06/11/16.
 */

//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import {StyleSheet, Text, View} from 'react-native';

import ChatView from "./ChatView";

export default class AwesomeProject extends Component {
    username = "Maps_red";

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            loadEarlier: true,
            typingText: null,
            isLoadingEarlier: false,
            sending: []
        };
        this.onSend = this.onSend.bind(this);
        AwesomeProject.renderBubble = AwesomeProject.renderBubble.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
    }

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
                    user: {
                        _id: 2,
                        name: 'Medru',
                    },
                },
            ],
        });
    }

    answerDemo(messages) {

        if (messages.length > 0) {
            if ((messages[0].image || messages[0].location) || !this._isAlright) {
                this.setState((previousState) => {
                    return {
                        typingText: 'Contact is typing...'
                    };
                });
            }
        }

        setTimeout(() => {
            AwesomeProject.changeStatus(messages);
            this.onReceive('Automatic Response !');

            this.setState((previousState) => {
                return {typingText: null};
            });
        }, 500);
    }

    static changeStatus(messages, sending = false) {
        for (var i = messages.length - 1; i >= 0; i--) {
            messages[i].status = null;
        }
        if (sending) {
            messages[messages.length - 1].status = "sending...";
        }
        return messages;
    }

    onSend(messages = []) {
        this.setState((previousState) => {
            messages = AwesomeProject.changeStatus(messages, true);
            return {messages: GiftedChat.append(previousState.messages, messages)};
        });

        this.answerDemo(messages);
    }

    onReceive(text) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, {
                    _id: Math.round(Math.random() * 1000000),
                    text: text,
                    createdAt: new Date(),
                    user: {_id: 2, name: this.username},
                }),
            };
        });
    }

    static renderChatView(props) {
        return (<ChatView {...props}/>);
    }

    static renderBubble(props) {
        return (
            <Bubble {...props} wrapperStyle={{left: {backgroundColor: '#f0f0f0'}}}/>
        );
    }

    renderFooter(props) {
        if (this.state.typingText) {
            return (
                <View style={styles.footerContainer} refreshing>
                    <Text style={styles.footerText}>
                        {this.state.typingText}
                    </Text>
                </View>
            );
        }
        return null;
    }

    render() {
        return (
            <GiftedChat messages={this.state.messages} onSend={this.onSend} renderBubble={AwesomeProject.renderBubble}
                        renderChatView={AwesomeProject.renderChatView} user={{_id: 1}}
                        renderFooter={this.renderFooter}/>
        );
    }
}

const styles = StyleSheet.create({
    footerContainer: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    footerText: {
        fontSize: 14,
        color: '#aaa',
    },
});
