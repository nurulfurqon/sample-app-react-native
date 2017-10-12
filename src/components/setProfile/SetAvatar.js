import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Text, Button, Content, Thumbnail } from 'native-base';

class SetAvatar extends Component {
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
                        <Text style={title}>Select Your Avatar</Text>
                        <Text style={caption}>
                            Swipe screen to see more avatar
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 30 }}>
                            <Content horizontal showsHorizontalScrollIndicator={false}>
                                <View style={img}>
                                    <Thumbnail
                                        large
                                        style={{ width: 60, height: 60 }}
                                        source={require('../timeline/profile.png')}
                                    />
                                </View>
                                <View style={img}>
                                    <Thumbnail
                                        large
                                        style={{ width: 60, height: 60 }}
                                        source={require('../timeline/profile2.png')}
                                    />
                                </View>
                                <View style={img}>
                                    <Thumbnail
                                        large
                                        style={{ width: 60, height: 60 }}
                                        source={require('../timeline/profile.png')}
                                    />
                                </View>
                                <View style={img}>
                                    <Thumbnail
                                        large
                                        style={{ width: 60, height: 60 }}
                                        source={require('../timeline/profile.png')}
                                    />
                                </View>
                                <View style={img}>
                                    <Thumbnail
                                        large
                                        style={{ width: 60, height: 60 }}
                                        source={require('../timeline/profile.png')}
                                    />
                                </View>
                                <View style={img}>
                                    <Thumbnail
                                        large
                                        style={{ width: 60, height: 60 }}
                                        source={require('../timeline/profile.png')}
                                    />
                                </View>
                            </Content>
                        </View>
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
        width: 260,
        marginTop: 50,
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
    },
    img: {
        marginLeft: 13,
        marginRight: 13
    }
};
const {
    content,
    boxLogo,
    boxContent,
    title,
    logo,
    caption,
    boxButton,
    img
} = styles;

export default SetAvatar;
