import React from 'react';
import { Text } from 'react-native';
import { View } from 'native-base';

const BoxChatRight = (props) => {
    const { date, chat } = props;
    return (
        <View style={rightContent}>
            <Text>{date}</Text>
            <View style={triangleR} />
            <Text style={boxChatRight}>
                {chat}
            </Text>
        </View>
    );
};

const styles = {
    rightContent: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginTop: 10,
        marginBottom: 10
    },
    
    boxChatRight: {
        backgroundColor: '#d761ff',
        color: '#ffffff',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 2,
        marginBottom: 2,
        borderRadius: 15,
    },
    
    triangleR: {
        width: 0,
        height: 0,
        position: 'absolute',
        bottom: 2.5,
        right: 1,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 13,
        borderTopWidth: 12,
        borderRightColor: 'transparent',
        borderTopColor: '#d761ff',
        transform: [
            { rotate: '270deg' }
        ]
    }
};

const {
    rightContent,
    boxChatRight,
    triangleR
} = styles;

export { BoxChatRight };

