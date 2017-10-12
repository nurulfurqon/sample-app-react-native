import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Container, 
    Text,
    Thumbnail 
} from 'native-base';
import { connect } from 'react-redux';
import { tlUpdate, tlCreate } from '../../actions';


class AddTLPT extends Component {
    onPostBtn() {
        const { timeline } = this.props;
        this.props.tlCreate({ timeline });
    }
    render() {
        return (
            <Container>
                { /* Header Box Send */ }
                <View style={boxCardHeader}>
                    <View style={headerContet}>
                        <View style={headerContetImg}>
                            <Thumbnail 
                                large
                                style={{ width: 42, height: 42 }} 
                                source={require('./profile.png')} 
                            />
                        </View>
                        <View style={headerContetTitle}>
                            <Text style={title}>Budi Tangkil</Text>
                            <Text style={subTitle}>Bandar Lampung</Text>
                        </View>
                        <View style={headerContetIcon}>
                            <TouchableOpacity
                                activeOpacity={0.7} 
                                onPress={() => this.onPostBtn()}
                            >
                                <Icon name='md-send' size={30} color='#b9b9b9' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                { /* End Header Box Send */ }
                <View style={viewInput}>
                    <TextInput
                        placeholder='What do you think ?'
                        underlineColorAndroid='transparent'
                        style={inputText}
                        value={this.props.timeline}
                        onChangeText={
                            text => this.props.tlUpdate({ prop: 'timeline', value: text })
                        }
                        multiline
                        placeholderTextColor='#bcbcbc'
                        textAlignVertical={'top'}
                    />
                </View>
            </Container>
        );
    }
}

// style 
const styles = {
    boxCardHeader: {
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
        alignItems: 'center',
    },
    headerContetImg: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    headerContetTitle: {
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
        fontSize: 13,
        color: '#9b9b9b'
    },
    headerContetIcon: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    viewInput: {
        flex: 1,
        flexDirection: 'column'
    },
    inputText: {
        flex: 1,
        backgroundColor: '#ffffff',
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 0,
        borderColor: '#ffffff',
        color: '#3b3b3b'
    }

};

const {
    boxCardHeader, 
    headerContet, 
    headerContetImg,
    headerContetTitle,
    title,
    subTitle,
    headerContetIcon,
    inputText,
    viewInput
} = styles;

const mapStateToProps = (state) => {
    const { timeline } = state.tlform;
    return { timeline };
};

export default connect(mapStateToProps, {
    tlUpdate, tlCreate
})(AddTLPT);
