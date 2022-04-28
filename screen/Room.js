import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button, Switch } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Device from './Device'
import styled from 'styled-components/native'

const Container = styled.View`
  height: 100%;
  width: 100%;
  margin: auto;
`
const Header = styled.View`
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 4px solid #f4a460;
`

const DeviceText = styled.Text`
  font-size: 20;
`

const Devices = styled.View`
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const HeaderText = styled.Text`
  font-size: 25;
  color: gray;
`

const Room = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <HeaderText>Welcome to (the room)</HeaderText>
        <HeaderText>Total room usage: ... Amp </HeaderText>
      </Header>
      <View>
        <Devices>
          <Device deviceName="Device 1"></Device>
          <Device deviceName="Device 2"></Device>
          <Device deviceName="Device 3"></Device>
          <Device deviceName="Device 4"></Device>
        </Devices>
        <TouchableOpacity onPress={() => navigation.navigate('Monitor')}>
          <Text>Return</Text>
        </TouchableOpacity>
      </View>
    </Container>
  )
}

export default Room
