import React, { useEffect, useState, useLayoutEffect } from 'react'

import { StatusBar, Dimensions } from 'react-native'

import styled from 'styled-components/native'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Movies from '../components/Movies'
import HeaderTabs from '../components/HeaderTabs'
import { auth, db } from '../firebase'
import firebase from 'firebase'
import { View } from 'react-native-web'

const Container = styled.View`
  flex: 1;
  background-color: grey;
`

const MiniContainer = styled.View`
  margin-top: 15px;
  height: 70%;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainValues = styled.View`
  margin-top: 15px;
  height: 10%;
  width: 100%;
  background-color: orange;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Label = styled.View`
  display: flex;
`

const Property = styled.Text`
  font-size: 20;
`

const Value = styled.Text`
  font-size: 10;
`

const Home = ({ navigation }) => {
  const [user, setUser] = useState(null)
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    db.collection('users')
      .doc(firebase.auth().currentUser.email)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setUser(doc.data())
        }
      })
  }, [firebase.auth().currentUser])

  useLayoutEffect(() => {
    const unsubscribe = db.collection('movies').onSnapshot((snapshot) =>
      setMovies(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
      ),
    )
    return unsubscribe
  }, [])

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Header login={true} navigation={navigation} />
        <MainValues>
          <Label>
            <Property>Voltage: </Property>
            <Value>100</Value>
          </Label>
          <Label>
            <Property>Current: </Property>
            <Value>100</Value>
          </Label>
        </MainValues>
        <MiniContainer></MiniContainer>
      </Container>
    </>
  )
}

export default Home
