import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { View, Thumbnail } from 'native-base';

class BoxCardTimeline extends React.Component {
    state = {
        modalVisible: false,
    }
    
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        const { post, author, onPressDetail, likeDetail } = this.props;
        return (
            <View style={boxCard} >
                { /* Modal Popup */ }
                <Modal
                    animationType="fade"
                    transparent
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this.setModalVisible(!this.state.modalVisible); }}
                >
                    <View style={{ flex: 1, justifyContent: 'center' }}>

                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}
                        >
                            <View style={backModal} />
                        </TouchableWithoutFeedback>

                        <View style={boxModal}>
                            <TouchableOpacity activeOpacity={0.9}>
                                <View style={contentTextModal}>
                                    <Text style={textModal}>
                                        Tambahkan ke Bookmark
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.9}>
                                <View style={contentTextModal}>
                                    <Text style={textModal}>
                                        Kirim Pesan
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                { /* End modal Popup */ }

                <View style={boxCardHeader}>
                    <View style={headerContet}>
                        <View style={headerContetImg}>
                            <Thumbnail
                                large
                                style={{ width: 42, height: 42 }}
                                source={require('../timeline/profile.png')}
                            />
                        </View>
                        <View style={headerContetTitle}>
                            <Text style={title}>Nama</Text>
                            <Text style={subTitle}>Bandar Lampung</Text>
                        </View>
                        <View style={headerContetIcon}>
                            <TouchableOpacity
                                activeOpacity={0.8} 
                                onPress={() => {
                                    this.setModalVisible(true);
                                }}
                            >
                                <Icon name='ios-more' size={30} color='#acacac' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={onPressDetail}>
                    <View style={boxCardBodyWrap}>
                        <View style={boxCardBody}>
                            <Text style={text}>{post}</Text>
                        </View>
                        <View style={boxCardDate}>
                            <View style={capsuleDate}>
                                <Text style={dateText}>5 h ago</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <View style={boxCardFooter}>
                    <View style={love}>
                        <Icon
                            name='ios-heart'
                            style={{ fontSize: 20, color: '#EF5350' }}
                        />
                        <TouchableWithoutFeedback onPress={likeDetail}>
                            <View>
                                <Text style={boxFooterText}>100 Like</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={comment}>
                        <Icon
                            name='ios-text-outline'
                            style={{ fontSize: 22, color: '#9b9b9b' }}
                        />
                        <Text style={boxFooterText}>5 Comment</Text>
                    </View>
                    
                </View>
                {/* End Box Card Footer */}
    
            </View >
            /* End Box Card Timeline */
        );
    } 
}

// style
const styles = {
    boxCard: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        marginBottom: 8,
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 1
    },
    boxCardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1
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
    text: {
        fontSize: 16,
        fontWeight: '300',
        color: '#3b3b3b'
    },
    headerContetIcon: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    boxCardDate: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingTop: 15,
        paddingBottom: 8
    },
    capsuleDate: {
        backgroundColor: '#5db5e5',
        paddingTop: 1,
        paddingBottom: 2,
        paddingLeft: 8,
        paddingRight: 5,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12
    },
    dateText: {
        color: '#ffffff',
        fontSize: 12
    },
    boxCardBodyWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    boxCardBody: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 13,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20
    },
    boxCardFooter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderTopColor: '#f2f2f2',
        borderTopWidth: 1
    },
    love: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginRight: 20
    },
    comment: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginRight: 20
    },
    star: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    boxFooterText: {
        marginLeft: 5,
        fontSize: 14,
        color: '#9b9b9b'
    },
    backModal: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000000',
        opacity: 0.7
    },
    boxModal: {
        position: 'absolute',
        width: 260,
        left: 50,
        padding: 10,
        elevation: 5,
        borderRadius: 4,
        backgroundColor: '#ffffff'
    },
    contentTextModal: {
        padding: 10,
        backgroundColor: '#ffffff'
    },
    textModal: {
        fontSize: 16,
        color: '#373737',
    }
};

const {
    boxCard,
    boxCardHeader,
    headerContet,
    boxCardBody,
    boxCardBodyWrap,
    headerContetImg,
    headerContetTitle,
    title,
    subTitle,
    text,
    headerContetIcon,
    boxCardDate,
    capsuleDate,
    dateText,
    boxCardFooter,
    love,
    comment,
    boxFooterText,
    backModal,
    boxModal,
    contentTextModal,
    textModal
} = styles;

export { BoxCardTimeline };
