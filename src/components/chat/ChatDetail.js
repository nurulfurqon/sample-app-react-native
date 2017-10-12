import React, { Component } from 'react';
import { Text, Image, Dimensions } from 'react-native';
import { Container, Content, Thumbnail, View } from 'native-base';
import { InputChat, BoxChatLeft, BoxChatRight } from '../common';

const styles = {
    contentHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
    },
    titleHeader: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '500',
        color: '#373737'
    },
    contentChat: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20
    },
    chatBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: Dimensions.get('window').height,
        resizeMode: 'cover',
    }
};

const {
    contentHeader,
    titleHeader,
    contentChat,
    chatBackground
} = styles;

class ChatDetail extends Component {
    static navigationOptions = {
        // custom header
        headerTitle: (
            <View style={contentHeader}>
                <Thumbnail
                    large
                    style={{ width: 42, height: 42 }}
                    source={require('../timeline/profile.png')}
                />
                <Text style={titleHeader}>Budi Tangkil</Text>
            </View>
        ),
    }
    render() {
        return (
            <Container>
                <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                    <Image
                        style={chatBackground}
                        source={require('./chat_bground.png')}
                    />
                    <Content>
                        <View style={contentChat}>
                            {/* left chat tampilan chat teman */}
                            <BoxChatLeft date='03.15' chat='hay budi...' />
                            {/* right chat tampilan chat kita */}
                            <BoxChatRight date='03.25' chat='iya dirimu siapa?' />
                        </View>
                    </Content>
                </View>
                <InputChat />
            </Container>
        );
    }
}

export default ChatDetail;
