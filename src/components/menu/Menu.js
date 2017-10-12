import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { View, Thumbnail, Container } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import { BotFoot } from '../common';

class Menu extends Component {
    render() {
        return (
            <Container>
                <View style={body}>
                    <View style={boxProfile}>
                        <Text style={title}>Profile</Text>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => Actions.profile()}
                        >
                            <View style={profileContent}>
                                <Thumbnail
                                    large
                                    style={{ width: 42, height: 42 }}
                                    source={require('../timeline/profile.png')}
                                />
                                <Text style={profileName}>Budi Kacang</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={boxMain}>
                        <Text style={title}>Main</Text>
                        <View style={mainContent}>
                            <Icon name='md-star' size={22} color='#5db5e5' />
                            <Text style={mainName}>Bookmark</Text>
                        </View>
                        <View style={mainContent}>
                            <Icon name='md-contact' size={22} color='#5db5e5' />
                            <Text style={mainName}>Logout</Text>
                        </View>
                    </View>
                </View>
                <BotFoot />
            </Container>
        );
    }
}

const styles = {
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff'
    },
    boxProfile: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1
    },
    title: {
        fontSize: 16,
        color: '#b7b7b7'
    },
    profileContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 2,
        marginTop: 5
    },
    profileName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#373737',
        marginLeft: 10
    },
    boxMain: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    mainContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 2,
        marginTop: 8
    },
    mainName: {
        fontSize: 14,
        fontWeight: '500',
        color: '#3b3b3b',
        marginLeft: 10
    },
};

const {
    body,
    boxProfile,
    title,
    profileContent,
    profileName,
    boxMain,
    mainContent,
    mainName
} = styles;

export default Menu;
