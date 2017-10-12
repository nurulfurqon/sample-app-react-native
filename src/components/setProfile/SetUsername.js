import React, { Component } from 'react';
import { View, Image, TextInput } from 'react-native';
import { Container, Text, Button } from 'native-base';

class SetUsername extends Component {
    render() {
        return (
            <Container style={{ backgroundColor: '#ffffff' }}>
                <View style={boxLogo}>
                    <Image 
                        style={logo}
                        source={require('./logo.png')}
                    />
                </View>
                <View style={content}>
                    <View style={boxContent}>
                        <Text style={title}>Enter Your Pseudonym</Text>
                        <TextInput
                            underlineColorAndroid='#5db5e5'
                            autoFocus
                            placeholderTextColor='#bcbcbc'
                            style={nameText}
                        />
                        <Text style={caption}>
                            Use a pseudonym, not use your{'\n'}real name, ex: Mr.x
                        </Text>
                    </View>
                </View>
                <View style={boxButton}>
                    <Button transparent info>
                        <Text>Save</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}
const styles = {
    content: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#373737'
    },
    logo: {
        position: 'absolute',
        top: 40,
        width: 156,
        height: 40,
    },
    boxLogo: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    boxContent: { 
        width: 250,
        marginTop: 65,
        flexDirection: 'column',
        alignItems: 'center'
    },
    nameText: {
        width: 200,
        height: 45,
        fontSize: 16,
        color: '#373737',
        marginTop: 10,
        marginBottom: 4
    },
    caption: {
        fontSize: 12,
        color: '#9b9b9b',
        textAlign: 'center'
    },
    boxButton: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginTop: 5
    }
};
const {
    content,
    boxLogo,
    boxContent,
    title,
    logo,
    nameText,
    caption,
    boxButton
} = styles;

export default SetUsername;
