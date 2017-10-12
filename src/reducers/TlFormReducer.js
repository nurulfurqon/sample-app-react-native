import {
    TIMELINE_UPDATE,
    TIMELINE_CREATE
} from '../conf/types';

const INITIAL_STATE = {
    timeline: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TIMELINE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case TIMELINE_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};
