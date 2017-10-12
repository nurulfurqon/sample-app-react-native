import React, { Component } from 'react';
import { View, Text, ListView, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { 
    Container, 
    Content, 
    Button, 
    Icon,
    List, 
    ListItem,
    Thumbnail 
} from 'native-base';
import { BotFoot } from '../common';

const datas = [
    'Simon Mignolet',
    'Nathaniel Clyne',
    'Dejan Lovren',
    'Mama Sakho',
    'Alberto Moreno',
    'Emre Can',
    'Joe Allen',
    'Phil Coutinho',
    'Alberto Moreno',
    'Emre Can',
    'Joe Allen',
    'Phil Coutinho',
];

class Chat extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
          basic: true,
          listViewData: datas,
        };
      }

    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        // aw itu sempel perumpamaan kalau misal pesan 
        // sudah di baca background color nya akan berubah
        const aw = 10;
        return (
            <Container>
                <View style={bodyContent} >
                    <Content>
                        <List
                            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                            disableRightSwipe
                            renderRow={data =>
                            <TouchableWithoutFeedback onPress={() => Actions.chatdetail()}>
                                <ListItem style={(aw === 10) ? boxListChat : boxListChatRead}>
                                    <View style={listChat}>
                                        <View style={contentImg}>
                                        <Thumbnail
                                            large
                                            style={{ width: 42, height: 42 }}
                                            source={require('../timeline/profile.png')}
                                        />
                                        </View>
                                        <View style={contentText}>
                                            <View style={boxTitle}>
                                                <Text style={title}>{data}</Text>
                                                <Text style={date}>26/10/2017</Text>
                                            </View>
                                            <Text style={(aw === 10) ? text : textRead}>
                                                lorem ipsum dolor
                                            </Text>
                                        </View>
                                    </View>
                                </ListItem>
                            </TouchableWithoutFeedback>
                            }
                            renderLeftHiddenRow={() => null}
                            renderRightHiddenRow={data =>
                            <Button 
                                full 
                                style={{ 
                                    backgroundColor: '#58b1e0', 
                                    elevation: 0 
                                }} 
                                onPress={() => alert(data)}
                            >
                                <Icon active name="trash" />
                            </Button>}
                            rightOpenValue={-65}
                        />
                    </Content>
                </View>
                <BotFoot />
            </Container>
        );
    }
}

const styles = {
    bodyContent: {
        flex: 1,
        backgroundColor: '#eef7fb'
    },
    boxListChat: {
        backgroundColor: '#ffffff',
        borderBottomWidth: 1, 
        borderBottomColor: '#f2f2f2'
    },
    boxListChatRead: {
        backgroundColor: '#fbfbfb',
        borderBottomWidth: 1, 
        borderBottomColor: '#f2f2f2'
    },
    listChat: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 5
    },
    contentImg: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    contentText: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 15,
    },
    boxTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        color: '#373737'
    },
    date: {
        fontSize: 12,
        color: '#ababab',
        textAlign: 'right'
    },
    text: {
        fontSize: 14,
        fontWeight: '500'
    },
    textRead: {
        fontSize: 14,
    }
};

const {
    bodyContent,
    boxListChat,
    boxListChatRead,
    listChat,
    contentImg,
    contentText,
    boxTitle,
    title,
    date,
    text,
    textRead
} = styles;

export default Chat;
