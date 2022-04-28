import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button, Switch } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

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

const Device = styled.View`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #f4a460;
  margin-top: 4%;
`

const HeaderText = styled.Text`
  font-size: 25;
  color: gray;
`

const SwitchComp = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  return (
    <Switch
      trackColor={{ false: 'gray', true: '#f4a460' }}
      thumbColor={isEnabled ? 'FFF' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  )
}

const Room = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <HeaderText>Welcome to (the room)</HeaderText>
        <HeaderText>Total room usage: ... Amp </HeaderText>
      </Header>
      <View>
        <Devices>
          <Device>
            <DeviceText> Device 1 (name): ... Amp </DeviceText>
            <SwitchComp></SwitchComp>
          </Device>
          <Device>
            <DeviceText> Device 1 (name): ... Amp </DeviceText>
            <SwitchComp></SwitchComp>
          </Device>
          <Device>
            <DeviceText> Device 1 (name): ... Amp </DeviceText>
            <SwitchComp></SwitchComp>
          </Device>
          <Device>
            <DeviceText> Device 1 (name): ... Amp </DeviceText>
            <SwitchComp></SwitchComp>
          </Device>
        </Devices>
        <TouchableOpacity onPress={() => navigation.navigate('Monitor')}>
          <Text>Return</Text>
        </TouchableOpacity>
      </View>
    </Container>
  )
}

export default Room
