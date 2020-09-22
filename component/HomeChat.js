/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Image,
    View,
    Text,
    TextInput,
    TouchableOpacity,
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

export function HomeChat({ navigation }) {

    const [chatMessage, setChatMessage] = useState('')
    const [chatMessages, setChatMessages] = useState([])

    //   constructor(props) {
    //     super(props);
    //     this.state = {
    //       chatMessage: "",
    //       chatMessages: []
    //     };
    //   }

    submitChatMessage = () => {
        if (chatMessage !== '') {
            socket.emit('chat message', chatMessage);
        }
        setChatMessage('');
    }

    componentDidMount = () => {
        socket = io("http://192.168.137.1:3000");
        socket.on("chat message", msg => {
            setChatMessages({
                chatMessages: [...chatMessages, msg]
            });
        });
    }

    // render() {
    const Messages = chatMessages.map(chatMessage => (
        <View>
            <Text style={styles.message}>{chatMessage}</Text>
            <Image source={require('../images/avatar.png')}></Image>
        </View>
    ));

    return (
        <View style={styles.container}>
            {/* <Container>
            <Header style={styles.header}>
                <View>
                    <Text style={styles.title}>List</Text>
                </View>
            </Header>
            </Container> */}

            <ImageBackground
                style={styles.bg}
                source={require('../images/bgchat.png')}>
                {Messages}
                <View style={styles.bottom}>
                    <TextInput
                        style={styles.textInput}
                        autoCorrect={false}
                        placeholder={'Message...'}
                        value={chatMessage}
                        onChangeText={(value) => setChatMessage(value)}
                    />
                    {/* <TouchableOpacity style={styles.btnSend}>
              <Image style={styles.btnSend}
                sourse={require('./images/send.png')}></Image>
            </TouchableOpacity> */}
                    <Button
                        style={styles.btnSend}
                        title='Send'
                        onPress={() => submitChatMessage()}>
                    </Button>
                </View>
            </ImageBackground>
        </View>
    );
}
// };

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

    message: {
        padding: 10,
        backgroundColor: '#02aace',
        color: 'white',
        borderTopLeftRadius: 17,
        borderBottomLeftRadius: 17,
        borderTopRightRadius: 17,
        marginTop: 10,
        marginBottom: 10
    },

    btnSend: {
        width: 10
    }
});

//Set-ExecutionPolicy -Scope Process-ExecutionPolicy Bypass

