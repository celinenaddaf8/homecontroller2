import firebase from 'firebase'
import { useState } from 'react'
import { getDatabase, ref, set } from 'firebase/database'
var value = null

export function getRelayStatus() {
  var userId = firebase.auth().currentUser.uid
  firebase
    .database()
    .ref('users/' + userId + '/relays/relay1')
    .on('value', function (snapshot) {
      const data = snapshot.val()
      console.log(data)
    })
}
export function SwtichRelayStatus() {
  var userId = firebase.auth().currentUser.uid
  const db = getDatabase()
  set(ref(db, 'users/' + userId + '/relays/'), {
    relay1: 'hello',
  })
}

export function GetDevices() {
  const [isDevices, setIsDevices] = useState(null)
  var userId = firebase.auth().currentUser.uid
  firebase
    .database()
    .ref('users/' + userId + '/devices')
    .on('value', function (snapshot) {
      const data = snapshot.val()
      if (data != isDevices) {
        setIsDevices(data)
      }
    })
  console.log(isDevices)
  return isDevices
}
