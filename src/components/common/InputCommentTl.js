import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class InputCommentTl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 38
        };
    }
    render() {
        return (
            <View style={boxInput}>
                <View style={inputText}>
                    <TextInput
                        {...this.props}
                        placeholder='Add Your Comment!'
                        underlineColorAndroid='transparent'
                        multiline
                        onContentSizeChange={(event) => {
                            this.setState({ height: event.nativeEvent.contentSize.height });
                        }}
                        placeholderTextColor='#bcbcbc'
                        onChangeText={this.props.onChangeText}
                        value={this.props.value}
                        style={[
                            styles.default, 
                            { height: Math.min(130, Math.max(38, this.state.height)) }
                        ]}
                    />
                </View>
                <View style={buttonSend}>
                    <TouchableOpacity
                        activeOpacity={0.7} 
                        onPress={this.props.onPress}
                    >
                        <Icon name='md-send' size={30} color='#b9b9b9' />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    boxInput: {
        padding: 5,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputText: {
        flex: 1,
        margin: 5,
        marginTop: 0,
        borderColor: '#d9d9d9',
        paddingLeft: 15,
        paddingRight: 15, 
        borderWidth: 1,
        borderRadius: 25
    },
    buttonSend: {
        padding: 5,
        paddingTop: 0,
        marginLeft: 5
    }
};

const { 
    boxInput,
    inputText,
    buttonSend
 } = styles;
