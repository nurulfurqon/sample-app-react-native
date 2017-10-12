import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    TIMELINE_UPDATE,
    TIMELINE_CREATE,
    TIMELINE_COMMENT_UPDATE,
    TIMELINE_COMMENT_CREATE,
    TIMELINES_FETCH_SUCCESS,
    TIMELINE_DETAIL_FETCH_SUCCESS
} from '../conf/types';

export const tlUpdate = ({ prop, value }) => {
    return {
        type: TIMELINE_UPDATE,
        payload: { prop, value }
    };
};

export const tlCmtUpdate = ({ prop, value }) => {
    return {
        type: TIMELINE_COMMENT_UPDATE,
        payload: { prop, value }
    };
};

export const tlCreate = ({ timeline }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref().child('posts')
            .push({ post: timeline, authorId: currentUser.uid })
            .then(() => {
                dispatch({ type: TIMELINE_CREATE });
                Actions.sMain({ type: 'reset' });
            });
    };
};

export const tlsFetch = () => {
    return (dispatch) => {
        firebase.database().ref('/posts')
            .once('value').then((snapshot) => {
                dispatch({ type: TIMELINES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const tlCmtCreate = ({ uid, comment }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref('/post_comments/' + uid)
            .push({ comment, userId: currentUser.uid })
            .then(() => {
                dispatch({ type: TIMELINE_COMMENT_CREATE });
            });
    };
};

export const tlDFetch = (uid) => {
    return (dispatch) => {
        firebase.database().ref('/post_comments/' + uid)
            .on('value', snapshot => {
                console.log(uid);
                dispatch({ type: TIMELINE_DETAIL_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};
