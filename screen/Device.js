import React from 'react'
import { Text, Switch } from 'react-native'
import styled from 'styled-components/native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { getRelayStatus, SwtichRelayStatus } from './data'
const Container = styled.View`
  width: 55%;
  height: 80%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const StyledCard = styled.View`
  height: 80%;
  width: 70%;
  justify-content: center;
  align-items: center;
  margin-top: 4%;
  border-width: 1.5;
  border-radius: 4;
  border-color: #ddd;
`

const EditButton = styled.TouchableOpacity`
  width: 30%;
  flex-direction: row;
  background-color: #f4a460;
  border-radius: 5;
  justify-content: center;
  top: 5%;
`

const SwitchComp = ({ number }) => {
  const [isEnabled, setIsEnabled] = useState(true)
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState)
    SwtichRelayStatus()
  }
  return (
    <Switch
      style={{ transform: [{ rotate: '-90deg' }] }}
      trackColor={{ false: 'gray', true: '#f4a460' }}
      thumbColor={isEnabled ? '#EECC8C' : '#f5f5f5'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  )
}

const Device = ({ deviceName, relay }) => {
  const navigation = useNavigation()
  return (
    <Container>
      <StyledCard>
        <MaterialCommunityIcons name="devices" size={44} color="gray" />
        <Text style={{ color: 'grey' }}>{deviceName}</Text>
        <SwitchComp number={relay}></SwitchComp>
      </StyledCard>
      <EditButton onPress={() => navigation.navigate('Edit')}>
        <AntDesign name="edit" size={24} color="gray" />
      </EditButton>
    </Container>
  )
}

export default Device
