import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers";
import {logger} from "../middleware/logger";
import { compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'firebase'

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDUOHz6DbiuYNoO_MQFRCrQz71CRUf6ivs",
    authDomain: "to-notes-do.firebaseapp.com",
    databaseURL: "https://to-notes-do.firebaseio.com",
    projectId: "to-notes-do",
    storageBucket: "to-notes-do.appspot.com",
    messagingSenderId: "245570006234"
};
firebase.initializeApp(firebaseConfig);

// react-redux-firebase options
const config = {
    userProfile: 'users', // firebase root where user profiles are stored
    enableLogging: false, // enable/disable Firebase's database logging
};

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, config),
    applyMiddleware(logger)
)(createStore);

// Create store with reducers and initial state
export const store = createStoreWithFirebase(rootReducer);
