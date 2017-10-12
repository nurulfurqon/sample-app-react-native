import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { BoxCardTimeline } from '../common';

class TlListItem extends Component {
    onRowPress() {
        return Actions.detailtl({ timeline: this.props.timeline });
    }
    render() {
        const { post, authorId } = this.props.timeline;
        return (
            <BoxCardTimeline
                post={post}
                author={authorId}
                onPressDetail={this.onRowPress.bind(this)}
                likeDetail={() => Actions.liketl()}
            />
        );
    }
}

export default TlListItem;
