import React from 'react'
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { auth } from '../firebase'
import firebase from 'firebase'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import VoiceOrder from '../components/voice'

const BigContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: white;
`
const Container = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  display: flex;
  background-color: white;
  flex-direction: column;
`
const VoiceOrderButton = styled.TouchableOpacity`
  width: 95%;
  height: 50px;
  color: white;
  border: none;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: #f4a460;
  border-radius: 15px;
`;
const TitleText = styled.Text`
  margin-top: 5%;
  color: gray;
  font-size: 20;
`

const ImagesContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  height: 50%;
  align-items: center;
  background-color: white;
  top: 10%;
`
const Logo2 = styled.Image`
  width: 30%;
  height: 20%;
`
const Line = styled.View`
  height: 0.2%;
  width: 70%;
  background-color: #f4a460;
`

const signOutUser = (navigation) => {
  auth.signOut().then(() => {
    navigation.navigate('Login')
  })
}

const AppButton = ({ uri, navigation, number }) => {
  var userId = firebase.auth().currentUser.uid
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Room')
        firebase
          .database()
          .ref('users/' + userId)
          .update({
            currentRoom: number,
          })
      }}
      style={styles.appButtonContainer}
    >
      <Image
        source={{
          uri: uri,
        }}
        style={{ width: '100%', height: '40%', borderRadius: 10 }}
      ></Image>
    </TouchableOpacity>
  )
}

const Monitor = () => {
  const [number, setNumber] = useState(null)
  const navigation = useNavigation()
  var userId = firebase.auth().currentUser.uid
  console.log(userId)
  const FetchData = () => {
    firebase
      .database()
      .ref('users/' + userId + '/mainSensor')
      .on('value', function (snapchot) {
        const data = snapchot.val()
        setNumber(data)
        return number
      })
  }

  useEffect(() => {
    FetchData()
  }, [number])
  return (
    <BigContainer>
      <Container>
        <TitleText>HOME CONTROLLER</TitleText>
        <Header />
        <TouchableOpacity
          onPress={() => {
            signOutUser(navigation);
          }}
        >
          <Text style={{ color: "#808080" }}>Log Out</Text>
        </TouchableOpacity>
        <Line></Line>
        <TitleText>5 A</TitleText>
        <ImagesContainer>
          <AppButton
            number="1"
            roomName="Kitchen"
            onPress="Kitchen"
            uri={"https://www.linkpicture.com/q/kitchennn.png"}
            navigation={navigation}
          />
          <AppButton
            number="2"
            roomName="Bathroom"
            onPress="Bathroom"
            uri={"https://www.linkpicture.com/q/bathroomnew.png"}
            navigation={navigation}
          />
          <AppButton
            number="3"
            roomName="Bedroom"
            onPress="Bedroom"
            uri={"https://www.linkpicture.com/q/bedroomnew1.png"}
            navigation={navigation}
          />
          <AppButton
            number="4"
            roomName="Living Room"
            onPress="Living Room"
            uri={"https://www.linkpicture.com/q/livinggroom.png"}
            navigation={navigation}
          />
        </ImagesContainer>
        <VoiceOrderButton
          onPress={() => navigation.navigate("VoiceOrder")}
        ></VoiceOrderButton>
      </Container>
    </BigContainer>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    marginBottom: 10,
    width: '40%',
    elevation: 30,
    backgroundColor: 'white',
    borderRadius: 10,
  },
})

export default Monitor
