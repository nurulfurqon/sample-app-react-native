import { TIMELINE_DETAIL_FETCH_SUCCESS } from '../conf/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TIMELINE_DETAIL_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
