import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyB3flqP1DsKu-I8SoZvOf76FPYRdg86zsk',
  authDomain: 'dark-pita.firebaseapp.com',
  projectId: 'dark-pita',
  storageBucket: 'dark-pita.appspot.com',
  messagingSenderId: '125378641069',
  appId: '1:125378641069:web:c764f9acc514307a6c9a24',
  measurementId: 'G-1T1HZCW34M'
};

firebase.initializeApp(config);

export default firebase.database();
