import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class LoginComponent extends Component {

    constructor(props) {
        super(props);
        state={
            userName:''
        }
    }

    render() {
        return <View>
            <Text>Inside of parent Component</Text>
            <TextInput onChangeText={(userName)=>this.setState({userName})} />
            <Button
                onPress={this.props.isValidUser.bind(this, "test")}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    }
}