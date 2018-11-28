import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore ,compose } from 'redux';
import {Provider} from 'react-redux';
import { rootReducer } from './Reducer/rootReducer';
import { reactReduxFirebase} from 'react-redux-firebase';

import firebase from './firebase';

const rrfConfig = {
    userProfile: 'users',
  }

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase,rrfConfig)
)(createStore);

const store = createStoreWithFirebase(rootReducer);

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
