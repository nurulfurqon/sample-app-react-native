import React from 'react';
import { View } from 'react-native';
import { Thumbnail, Text } from 'native-base';

const BoxLikeTl = (props) => {
    const { userId } = props;
    return (
        <View style={boxCardHeader}>
            <View style={headerContent}>
                <View style={headerContentImg}>
                    <Thumbnail 
                        large
                        style={{ width: 38, height: 38 }} 
                        source={require('../timeline/profile.png')} 
                    />
                </View>
                <View style={headerContentTitle}>
                    <Text style={title}>{userId}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = {
    boxCardHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerContentImg: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    headerContentTitle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    title: {
        fontSize: 15,
        fontWeight: '500',
        color: '#373737'
    },
};

const {
    boxCardHeader, 
    headerContent, 
    headerContentImg,
    headerContentTitle,
    title,
} = styles;

export { BoxLikeTl };
