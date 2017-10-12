import {
    TIMELINE_COMMENT_CREATE,
    TIMELINE_COMMENT_UPDATE
} from '../conf/types';

const INITIAL_STATE = {
    comment: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TIMELINE_COMMENT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case TIMELINE_COMMENT_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};
