import React, { Component } from 'react';
import { 
    View, 
    Image,
    Animated 
} from 'react-native';
import {
    Container,
    Content, 
    Text
} from 'native-base';
import { BoxCardTimeline } from '../common';

const HEADER_MAX_HEIGHT = 180;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class Profile extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
          scrollY: new Animated.Value(0),
        };
    }
    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp',
        });

        const imageOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 0.1, 0],
            extrapolate: 'clamp',
        });

        const imageTranslate = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -50],
            extrapolate: 'clamp',
        });
        
        return (
            <Container>
                <Content
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
                    )}
                >
                    <View style={scrollViewContent}>
                        <View style={contentTimeline}>
                            <BoxCardTimeline 
                            post="law law law and law"
                            author="Budi Mameda"
                            />
                            <BoxCardTimeline 
                            post="law law law and law"
                            author="Budi Mameda"
                            />
                            <BoxCardTimeline 
                            post="nanka anmkamn anmkan aknma"
                            author="Budi Mameda"
                            />
                            <BoxCardTimeline 
                            post="law law law and law"
                            author="Budi Mameda"
                            />
                        </View>
                    </View>
                </Content>
                <Animated.View style={[boxHeader, { height: headerHeight }]}>
                    <Image 
                        style={backgroundImage}
                        source={require('./ilustrasi_wrath.png')}
                    />
                    <Animated.View 
                        style={{
                            paddingTop: 5,
                            paddingBottom: 5,
                            opacity: imageOpacity,
                            transform: [
                                { translateY: imageTranslate }
                            ] 
                        }}
                    >
                        <View style={contentImgProfile}>
                            <View style={boxCircle} />
                            <Image
                                style={{ width: 60, height: 50 }}
                                source={require('./head_wrath.png')}
                            />
                        </View>
                        <Text style={title}>
                            Budi Mameda
                        </Text>
                        <Text style={text} >
                            Home
                        </Text>
                    </Animated.View>
                </Animated.View>
            </Container>
        );
    }
}

const styles = {
    boxHeader: {
        backgroundColor: '#eef7fb', 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden', 
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover'
    },
    scrollViewContent: {
        flex: 1, 
        marginTop: HEADER_MAX_HEIGHT
    },
    contentTimeline: {
        backgroundColor: '#eef7fb', 
        paddingTop: 8
    },
    contentImgProfile: {
        alignItems: 'center', 
        justifyContent: 'center'
    },
    boxCircle: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: '#d22e2f'
    },
    title: {
        fontSize: 18, 
        color: '#ffffff', 
        fontWeight: '500', 
        marginTop: 10
    },
    text: {
        fontSize: 14,
        color: '#ffffff',
        textAlign: 'center'
    }
};

const { 
    boxHeader,
    backgroundImage,
    scrollViewContent,
    contentTimeline,
    contentImgProfile,
    boxCircle,
    title,
    text 
} = styles; 

export default Profile;
