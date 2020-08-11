import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyApB04_-2R3jflCtAL4-9T_DO_qE5ngT4k',
  authDomain: 'dsc-upt.firebaseapp.com',
  databaseURL: 'https://dsc-upt.firebaseio.com',
  projectId: 'dsc-upt',
  storageBucket: 'dsc-upt.appspot.com',
  messagingSenderId: '1004294201218',
  appId: '1:1004294201218:web:d46e92c65cb171d756399b',
  measurementId: 'G-CDKMWCKB9J'
};

//place the config here
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const db = firebase.firestore();
export default firebase;
