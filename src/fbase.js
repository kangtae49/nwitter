// import * as firebase from 'firebase/app';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
