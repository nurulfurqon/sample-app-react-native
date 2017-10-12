import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Thumbnail, Text } from 'native-base';

const BtnTimeline = (props) => (
    <View style={boxButton}>
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={props.onPress}
        >
            <View style={contentBoxButton}>
                <Thumbnail small source={require('../timeline/profile2.png')} />
                <Text style={textBoxButton}>
                    What do you think ?
                </Text>
            </View>
        </TouchableOpacity>
    </View>
);

// style
const styles = {
    boxButton: {
        backgroundColor: '#ffffff',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 1,
        marginBottom: 8,
    },
    contentBoxButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textBoxButton: {
        color: '#bcbcbc',
        marginLeft: 10,
        fontSize: 14
    }
};

const { 
    boxButton, 
    contentBoxButton, 
    textBoxButton
} = styles;


export { BtnTimeline };
