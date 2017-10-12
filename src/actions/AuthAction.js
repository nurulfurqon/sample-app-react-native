import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    LoginManager, AccessToken,
    GraphRequest, GraphRequestManager
} from 'react-native-fbsdk';
import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_CANCEL,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../conf/types';

export const loginFB = () => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        LoginManager.logInWithReadPermissions([
            'public_profile', 'email', 'user_birthday']).then((result) => {
                if (result.isCancelled) {
                    dispatch({ type: LOGIN_USER_CANCEL });
                } else {
                    AccessToken.getCurrentAccessToken().then((tokenData) => {
                        const credential = firebase.auth
                            .FacebookAuthProvider.credential(tokenData.accessToken);
                        // login fb with credential
                        firebase.auth().signInWithCredential(credential).then(() => {
                            const responseInfoCallback = (error, res) => {
                                if (error) {
                                    console.log(error);
                                } else {
                                    const { currentUser } = firebase.auth();
                                    firebase.database().ref('/users/').child(currentUser.uid).set({
                                        email: res.email,
                                        name: res.name,
                                        username: res.last_name,
                                        birthday: res.birthday,
                                        gender: res.gender,
                                        role: 'member'
                                    });
                                }
                            };

                            const infoRequest = new GraphRequest(
                                '/me',
                                {
                                    accessToken: tokenData.accessToken,
                                    parameters: {
                                        fields: {
                                            string: 'email,name,last_name,gender,birthday'
                                        }
                                    }
                                },
                                responseInfoCallback
                            );

                            // Start the graph request.
                            new GraphRequestManager().addRequest(infoRequest).start();
                        }).then(user => {
                            loginUserSuccess(dispatch, user);
                        });
                    }, (er) => {
                        console.log('error: ' + er);
                        dispatch({ type: LOGIN_USER_FAIL });
                    });
                }
            },
            (er) => {
                console.log('error: ' + er);
                dispatch({ type: LOGIN_USER_FAIL });
            }
            );
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.sMain();
};
