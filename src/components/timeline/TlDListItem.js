import React, { Component } from 'react';
import { BoxCommentTl } from '../common';

class TlDListItem extends Component {
    render() {
        const { comment, userId } = this.props.tldetail;
        return (
            <BoxCommentTl userId={userId} post={comment} />
        );
    }
}

export default TlDListItem;
