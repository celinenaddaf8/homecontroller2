import React, { useState } from 'react'

import {
  Dimensions,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
  View,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { AntDesign, Entypo } from '@expo/vector-icons'
import styled from 'styled-components/native'

import Header from '../components/Header'
import { auth, db } from '../firebase'
import { color } from 'react-native-reanimated'

const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
`

const FormWrapper = styled.KeyboardAvoidingView`
  background-color: white;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 655px;
`

const Form = styled.KeyboardAvoidingView`
  height: 600px;
  width: 90%;
  background-color: white;
  flex-direction: column;
  border-radius: 20px;
  padding: 10px;
  justify-content: center;
  border: 4px #f4a460;
`

const SubmitForm = styled.TouchableOpacity`
  width: 95%;
  height: 50px;
  color: white;
  border-radius: 10px;
  border: none;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: #f4a460;
`

const ButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  padding-left: 5px;
  color: white;
`
const SignInText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #f4a460;
  margin: 10px;
  text-align: left;
`

const NewToAppWrapper = styled.TouchableOpacity`
  width: 100%;
`

const NewToApp = styled.Text`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: gray;
  margin: 15px;
  text-align: center;
`

const Overlay = styled.View`
  background-color: 'rgba(0,0,0,0.5)';
  flex: 1;
`

const HalfInputWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const HalfInput = styled.TextInput`
  width: 45.8%;
  height: 50px;
  border: none;
  padding: 10px;
  border-radius: 15px;
  background-color: white;
  color: grey;
  margin-right: 5px;
  margin-top: 10px;
  border: 1px #ccc;
`
const StyledTextInput = styled.TextInput`
  background-color: white;
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  font-size: 16px;
  height: 60px;
  border-radius: 15px;
  color: grey;
  margin-right: 5px;
  margin-top: 10px;
  border: 1px #ccc;
`

const StyledInputLabel = styled.Text`
  color: gray;
  font-size: 13px;
  text-align: left;
  padding-top: 5px;
`
const LeftIcon = styled.View`
  left: 15px;
  top: 48px;
  position: absolute;
  z-index: 1;
`

const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 48px;
  position: absolute;
  z-index: 1;
`
const InputsWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
`
const NameText = styled.Text`
  color: grey;
`

const Register = ({ navigation }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [loading, setLoading] = useState(false)
  const [hidePassword, setHidePassword] = useState(true)
  const [hideConfirmPass, setHideConfirmPass] = useState(true)

  const register = () => {
    setLoading(true)
    if (!email || !password || !firstName || !lastName || !confirmPass) {
      alert('All fields are mandatory')
      setPassword('')
      setEmail('')
      setLoading(false)
    }
    if (confirmPass != password) {
      alert('Passwords do NOT match')
      setPassword('')
      setEmail('')
      setConfirmPass('')
      setLoading(false)
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        db.collection('users')
          .doc(email)
          .set({
            firstName,
            lastName,
            email,
            list: [],
          })
          .then(() => {
            navigation.replace('BottomStack')
            setPassword('')
            setEmail('')
            setLoading(false)
          })
      })
      .catch((err) => {
        alert(err)
        setLoading(false)
      })
  }

  return (
    <>
      <StatusBar style="light" />
      <Container>
        <Overlay>
          <Header login={false} />
          <FormWrapper>
            <Form>
              <KeyboardAvoidingView style={{ width: '100%' }}>
                <SignInText>Sign Up</SignInText>
                <InputsWrapper>
                  <HalfInputWrapper>
                    <NameText>First Name</NameText>
                    <HalfInput
                      placeholderTextColor="grey"
                      placeholder="First Name"
                      value={firstName}
                      onChangeText={(text) => setFirstName(text)}
                    />
                  </HalfInputWrapper>
                  <HalfInputWrapper>
                    <NameText>Last Name</NameText>
                    <HalfInput
                      placeholderTextColor="grey"
                      placeholder="Last Name"
                      value={lastName}
                      onChangeText={(text) => setLastName(text)}
                    />
                  </HalfInputWrapper>
                  <MyTextInput
                    label="Email Address"
                    icon="idcard"
                    placeholder="Enter your email"
                    placeholderTextColor="grey"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType="email-address"
                  />
                  <MyTextInput
                    label="Password"
                    icon="lock"
                    placeholder="Password"
                    placeholderTextColor="grey"
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                  />
                  <MyTextInput
                    label="Confirm Your Password"
                    icon="lock"
                    placeholder="Confirm Password"
                    placeholderTextColor="grey"
                    secureTextEntry={hideConfirmPass}
                    isPassword={true}
                    hidePassword={hideConfirmPass}
                    setHidePassword={setHideConfirmPass}
                    value={confirmPass}
                    onChangeText={(text) => setConfirmPass(text)}
                  />

                  <SubmitForm onPress={register} disabled={loading}>
                    <ButtonText>
                      {loading ? 'Loading...' : 'Sign Up'}
                    </ButtonText>
                  </SubmitForm>
                  <NewToApp
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('Login')}
                  >
                    <NewToApp>Already have an account ? Sign In</NewToApp>
                  </NewToApp>
                </InputsWrapper>
              </KeyboardAvoidingView>
            </Form>
          </FormWrapper>
        </Overlay>
      </Container>
    </>
  )
}
const MyTextInput = ({
  label,
  isPassword,
  icon,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <AntDesign name={icon} size={24} color="grey" />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Entypo
            name={hidePassword ? 'eye-with-line' : 'eye'}
            size={24}
            color="grey"
          />
        </RightIcon>
      )}
    </View>
  )
}
export default Register
