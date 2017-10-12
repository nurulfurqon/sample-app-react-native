import React from 'react';
import { View } from 'react-native';
import { Thumbnail, Text } from 'native-base';

const BoxCommentTl = (props) => {
    const { post, userId } = props;
    return (
        <View style={boxCardHeader}>
            <View style={headerContet}>
                <View style={headerContetImg}>
                    <Thumbnail 
                        large
                        style={{ width: 40, height: 40 }} 
                        source={require('../timeline/profile.png')} 
                    />
                </View>
                <View style={headerContetTitle}>
                    <Text style={title}>{userId}</Text>
                    <Text style={subTitle}>{post}</Text>
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
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
    },
    headerContet: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    headerContetImg: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    headerContetTitle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 10
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        color: '#373737'
    },
    subTitle: {
        fontSize: 14,
        color: '#3b3b3b'
    },
};

const {
    boxCardHeader, 
    headerContet, 
    headerContetImg,
    headerContetTitle,
    title,
    subTitle,
} = styles;

export { BoxCommentTl };
