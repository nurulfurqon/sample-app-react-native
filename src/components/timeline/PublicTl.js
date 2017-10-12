import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView, View, Animated, Image } from 'react-native';
import {
    Content
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { tlsFetch } from '../../actions';
import { BtnTimeline } from '../common';
import TlListItem from './TlListItem';

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class PublicTl extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
          scrollY: new Animated.Value(0),
        };
    }
    componentWillMount() {
        this.props.tlsFetch();
        this.createDataSource(this.props);
    }
    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still the old set of props
        this.createDataSource(nextProps);
    }
    createDataSource({ tls }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(tls);
    }
    renderRow(tls) {
        return <TlListItem timeline={tls} />;
    }
    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp',
        });
        
        return (
            <View style={{ flex: 1, backgroundColor: '#eef7fb' }}>
                <Content
                    style={{ flex: 1, backgroundColor: '#eef7fb' }} 
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
                    )}
                >
                    <View style={scrollViewContent}>
                        <BtnTimeline onPress={() => Actions.addplpt()} />
                        <ListView
                            enableEmptySections
                            dataSource={this.dataSource}
                            renderRow={this.renderRow}    
                        />
                    </View>
                </Content>
                {/* gambar banner timline */}
                <Animated.View style={[header, { height: headerHeight }]}>
                    <Image
                        style={backgroundImage} 
                        source={require('./ilustrasi.png')}
                    />
                </Animated.View>
            </View>
        );
    }
}

const styles = {
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#f0f0f0',
        overflow: 'hidden',
    },
    bar: {
        marginTop: 28,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollViewContent: {
        backgroundColor: '#eef7fb',
        marginTop: HEADER_MAX_HEIGHT,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    }
};

const { header, bar, scrollViewContent, backgroundImage } = styles;

const mapStateToProps = state => {
    const tls = _.map(state.tls, (val, uid) => {
        return { ...val, uid };
    });
    return { tls };
};

export default connect(mapStateToProps, { tlsFetch })(PublicTl);
