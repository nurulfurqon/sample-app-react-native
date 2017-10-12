import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_CANCEL,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../conf/types';

const INIT_STATE = {
    user: null,
    error: '',
    loading: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, loading: false, error: '' };
        case LOGIN_USER_CANCEL:
            return { ...state, loading: false, error: 'login cancel' };
        case LOGIN_USER_FAIL:
            return { ...state, loading: false, error: 'login fail' };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        default:
            return state;
    }
};
