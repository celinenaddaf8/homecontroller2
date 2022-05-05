import firebase from 'firebase'
import { useState } from 'react'
var flag = '0'
export function FetchData() {
  const [number, setNumber] = useState(null)

  firebase
    .database()
    .ref('numbers/number1')
    .on('value', function (snapchot) {
      const data = snapchot.val()
      console.log('this is the data ' + data)
      if (data != number) {
        setNumber(data)
      }
    })
  return number
}

function GetRelayStatus() {
  const [isEnableed, setIsEnableed] = useState(null)
  firebase
    .database()
    .ref('relayStatus/relayStatus')
    .on('value', function (snapchot) {
      const data = snapchot.val()
      if (data != isEnableed) {
        setIsEnableed(data)
      }
    })
  return isEnableed
}

export function SwtichRelayStatus() {
  firebase
    .database()
    .ref('relayStatus')
    .update({
      relayStatus1: flag,
    })
    .then(() => console.log(flag))
  if (flag == '0') {
    flag = '1'
  } else {
    console.log('hi')
    flag = '0'
  }
}
