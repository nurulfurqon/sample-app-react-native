import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CmtFormReducer from './CmtFormReducer';
import TlFormReducer from './TlFormReducer';
import TlsReducers from './TlsReducers';
import TlDReducers from './TlDReducers';

export default combineReducers({
    auth: AuthReducer,
    cmtform: CmtFormReducer,
    tlform: TlFormReducer,
    tls: TlsReducers,
    tld: TlDReducers
});
