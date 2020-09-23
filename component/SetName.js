import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,

} from 'react-native';

export default class SetName extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.name}
                    placeholder='Your Name...'
                    onChangeText={(value) => { this.setState({ name: value }) }}>
                </TextInput>
                <TouchableOpacity
                    style={styles.btnSave}
                    onPress={() => this.props.navigation.navigate('HomeChat', { name: this.state.name })}>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },

    name: {
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 5,
        borderColor: 'rgb(222,222,222)',
        borderBottomWidth: 1
    },

    btnSave: {
        borderRadius: 7,
        borderColor: "#ccc",
        borderWidth: 1,
        height: 40,
        margin: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 8
    },
})


