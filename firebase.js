import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDMr8cn-p8jN1GXukA3B0_lfkgpXq5ykZI',
  authDomain: 'homecontroller-3ffcd.firebaseapp.com',
  projectId: 'homecontroller-3ffcd',
  storageBucket: 'homecontroller-3ffcd.appspot.com',
  messagingSenderId: '607510348776',
  appId: '1:607510348776:web:091358292e65ef6126da5d',
  measurementId: 'G-WF40DWH0RB',
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
