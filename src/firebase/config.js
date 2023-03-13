import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyAvcAm4tMOha-B8GNi7ce6bg3pS9CZPVPY",
    authDomain: "moneyappwith-ninja.firebaseapp.com",
    projectId: "moneyappwith-ninja",
    storageBucket: "moneyappwith-ninja.appspot.com",
    messagingSenderId: "155619592846",
    appId: "1:155619592846:web:20d8c42e9387ca281e97df"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
