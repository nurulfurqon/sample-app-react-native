import React from 'react';
import { Text } from 'react-native';
import { View } from 'native-base';

const BoxChatLeft = (props) => {
    const { date, chat } = props;
    return (
        <View style={leftContent}>
            <Text>{date}</Text>
            <View style={triangleL} />
            <Text style={boxChatLeft}>
                {chat}
            </Text>
        </View>
    );
};

const styles = {
    leftContent: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 10,
        marginBottom: 10,
    },
    boxChatLeft: {
        backgroundColor: '#5db5e5',
        color: '#ffffff',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 2,
        marginBottom: 2,
        borderRadius: 15,
    },
    triangleL: {
        width: 0,
        height: 0,
        position: 'absolute',
        bottom: 2,
        left: 1,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 13,
        borderTopWidth: 12,
        borderRightColor: 'transparent',
        borderTopColor: '#5db5e5',
        transform: [
            { rotate: '180deg' }
        ]
    }
};

const {
    leftContent,
    boxChatLeft,
    triangleL
} = styles;

export { BoxChatLeft };

