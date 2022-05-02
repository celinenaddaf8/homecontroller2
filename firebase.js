import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCFwkMt0M1MZfsEL0uI9CfEvgqgBwjziWQ",
  authDomain: "homecontroller-dd4a3.firebaseapp.com",
  projectId: "homecontroller-dd4a3",
  storageBucket: "homecontroller-dd4a3.appspot.com",
  messagingSenderId: "707448388660",
  appId: "1:707448388660:web:23e6aef6ed826706c41e61",
  measurementId: "G-VP0FVNE15X",
}

let app

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }
