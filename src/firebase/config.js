import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB2cC4uq6LVV4TsScBnTabZoWZYmJCNlRQ",
    authDomain: "muso-ninjas-db81d.firebaseapp.com",
    projectId: "muso-ninjas-db81d",
    storageBucket: "muso-ninjas-db81d.appspot.com",
    messagingSenderId: "243134549295",
    appId: "1:243134549295:web:4b26fd435c4baa327ca5da"
  };


// init firebase
  firebase.initializeApp(firebaseConfig)

//   init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//  timestamp

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp}