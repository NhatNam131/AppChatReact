/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TextInput,
    ImageBackground,
    Button
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Container } from 'native-base';
import io from "socket.io-client";
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export default class HomeChat extends React.Component {

    // const [chatMessage, setChatMessage] = useState('')
    // const [chatMessages, setChatMessages] = useState([])

    constructor({ props }) {
        super(props);
        this.state = {
            chatMessage: "",
            chatMessages: [],
            name: '',
            obj: {}
        };
    }

    submitChatMessage = () => {
        if (this.state.chatMessage !== '') {
            this.socket.emit('chat message', {name: this.state.name, chatMessage: this.state.chatMessage});
            // this.setState({ obj: { name: this.state.name, chatMessage: this.state.chatMessage } });
        }
        this.setState({ chatMessage: '' });
    }

    componentDidMount = () => {
        this.setState({ name: this.props.route.params.name });
        this.socket = io("http://192.168.137.1:3000");
        this.socket.on("chat message", obj => {
            this.setState({
                chatMessages: [...this.state.chatMessages, obj]
            });
        });
    }

    render() {
        const Messages = this.state.chatMessages.map((chatmess) => {
            switch (chatmess.name) {
                case this.state.name:
                    return (
                        <View style={styles.chatRight}>
                            <Image style={styles.avatarR} source={require('../images/avatar.png')}></Image>
                            <View style={styles.messageRight}>
                                <Text style={styles.messageNameR}>{chatmess.name}</Text>
                                <Text style={styles.messageR}>{chatmess.chatMessage}</Text>
                            </View>
                        </View>
                    );
                default:
                    return (
                        <View style={styles.chatLeft}>
                            <Image style={styles.avatarL} source={require('../images/avatar.png')}></Image>
                            <View style={styles.messageLeft}>
                                <Text style={styles.messageNameL}>{chatmess.name}</Text>
                                <Text style={styles.messageL}>{chatmess.chatMessage}</Text>
                            </View>
                        </View>
                    );
            }
        });

        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.bg}
                    source={require('../images/bgchat.png')}>
                    <ScrollView>{Messages}</ScrollView>
                    <View style={styles.bottom}>
                        <TextInput
                            style={styles.textInput}
                            autoCorrect={false}
                            placeholder={'Message...'}
                            value={this.state.chatMessage}
                            onChangeText={chatMessage => {
                                this.setState({ chatMessage });
                            }} />
                        <Button
                            style={styles.btnSend}
                            title='Send'
                            onPress={() => this.submitChatMessage()}>
                        </Button>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center'
    },

    bg: {
        width: '100%',
        height: '100%'
    },

    bottom: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 5,
        marginTop: 'auto'
    },

    textInput: {
        height: 50,
        marginRight: 10,
        paddingLeft: 10,
        width: '84.5%',
        fontSize: 15
    },

    messageLeft: {
        flexDirection: 'column',
        marginRight: 5,
        maxWidth: '70%',
    },

    chatRight: {
        flexDirection: 'row-reverse',
        marginTop: 10,
    },

    chatLeft: {
        flexDirection: 'row',
        marginTop: 10
    },

    avatarR: {
        marginRight: 10,
        height: 50,
        width: 50,
        marginTop: 'auto',
        marginBottom: 5
    },

    messageNameR: {
        marginLeft: 'auto',
        color: 'white'
    },

    messageNameL: {
        marginRight: 'auto',
        color: 'white'
    },

    messageR: {
        padding: 10,
        backgroundColor: '#02aace',
        color: 'white',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
        marginBottom: 10,
        marginTop: 5
    },

    avatarL: {
        marginRight: 10,
        height: 50,
        width: 50,
        marginTop: 'auto',
        marginBottom: 5
    },

    messageL: {
        padding: 10,
        backgroundColor: 'white',
        color: 'black',
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        marginBottom: 10,
        marginTop: 5
    },

    btnSend: {
        width: 10
    }
});

//Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

