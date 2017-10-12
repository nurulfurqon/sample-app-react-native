/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import firebase from 'firebase';
import store from './conf/store';
import fbase from './conf/fbase';
import Router from './Router';

export default class App extends Component {
    componentWillMount() {
        firebase.initializeApp(fbase);
        console.ignoredYellowBox = ['Setting a timer'];
    }
    render() {
        return (
            <Provider store={store} >
                <Root>
                    <Router />
                </Root>
            </Provider>
        );
    }
}

