import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
import { Content } from 'native-base';
import { BoxCardTimeline, InputCommentTl } from '../common';
import { tlDFetch, tlCmtUpdate, tlCmtCreate } from '../../actions';
import TlDListItem from './TlDListItem';

class TlDetail extends Component {
    componentWillMount() {
        const { uid } = this.props.timeline;
        this.props.tlDFetch(uid);
        this.createDataSource(this.props);
    }
    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still the old set of props
        this.createDataSource(nextProps);
    }
    onCommentBtn() {
        const { uid } = this.props.timeline;
        const { comment } = this.props;
        this.props.tlCmtCreate({ uid, comment });
    }
    createDataSource({ tld }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(tld);
    }
    renderRow(tld) {
        return <TlDListItem tldetail={tld} />;
    }
    render() {
        const { post, authorId } = this.props.timeline;
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Content style={{ flex: 1, backgroundColor: '#ffffff' }}>
                    <BoxCardTimeline post={post} author={authorId} />
                    {/* box komentar */}
                    <View style={{ backgroundColor: '#ffffff' }}>
                        <ListView
                            enableEmptySections
                            dataSource={this.dataSource}
                            renderRow={this.renderRow}
                        />
                    </View>
                </Content>
                {/* tambah komentar */}
                <InputCommentTl
                    value={this.props.comment}
                    onChangeText={
                        text => this.props.tlCmtUpdate({ prop: 'comment', value: text })
                    }
                    onPress={() => this.onCommentBtn()}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const tld = _.map(state.tld, (val, uid) => {
        return { ...val, uid };
    });
    const { comment } = state.cmtform;
    return { tld, comment };
};

export default connect(mapStateToProps, {
    tlDFetch, tlCmtUpdate, tlCmtCreate
})(TlDetail);
