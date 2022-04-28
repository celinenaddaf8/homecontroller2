import React from 'react'
import { Text, Switch } from 'react-native'
import styled from 'styled-components/native'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const editButton = ({ uri, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Room')
      }}
      style={styles.appButtonContainer}
    >
      <Image
        source={{
          uri: uri,
        }}
        style={{ width: '100%', height: 200, borderRadius: 10 }}
      ></Image>
    </TouchableOpacity>
  )
}

const Container = styled.View`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #f4a460;
  margin-top: 4%;
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

const Device = ({ deviceName }) => {
  const navigation = useNavigation()
  return (
    <Container>
      <Text>{deviceName}</Text>
      <SwitchComp></SwitchComp>
      <TouchableOpacity onPress={() => navigation.navigate('Monitor')}>
        <Text>Edit Device</Text>
      </TouchableOpacity>
    </Container>
  )
}

export default Device
