import React from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  Picker,
  StyleSheet,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
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
const HeaderText = styled.Text`
  font-size: 25;
  color: gray;
`
const DeviceText = styled.Text`
  font-size: 20;
`

const Select = () => {
  const [selectedValue, setSelectedValue] = useState('Room:')
  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 150, width: 200, color: 'dimgrey' }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Room:" value="room" />
        <Picker.Item label="Kitchen" value="Kitchen" />
        <Picker.Item label="Bathroom" value="Bathroom" />
        <Picker.Item label="Bedroom" value="Bedroom" />
        <Picker.Item label="Living room" value="Living room" />
        <Picker.Item label="Other" value="Other" />
      </Picker>
    </View>
  )
}

const EditDevice = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <Header>
        <HeaderText> Edit Device </HeaderText>
      </Header>
      <DeviceText> PRODUCT Name:</DeviceText>
      <DeviceText> Amp:</DeviceText>
      <Select></Select>
      <TouchableOpacity onPress={() => navigation.navigate('Monitor')}>
        <Text>Confirm Edit</Text>
      </TouchableOpacity>
    </Container>
  )
}

export default EditDevice
