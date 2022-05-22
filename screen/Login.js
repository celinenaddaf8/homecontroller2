import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import styled from 'styled-components/native'

import Header from '../components/Header'
import { auth } from '../firebase'

import { AntDesign, Entypo } from '@expo/vector-icons'

const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
`

const FormWrapper = styled.KeyboardAvoidingView`
  background-color: white;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 500px;
`

const Form = styled.KeyboardAvoidingView`
  height: 90%;
  width: 90%;
  background-color: white;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  border-radius: 15px;
  border: 4px #f4a460;
`

const SubmitForm = styled.TouchableOpacity`
  width: 95%;
  height: 50px;
  color: white;
  border: none;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: #f4a460;
  border-radius: 15px;
`

const StyledTextInput = styled.TextInput`
  background-color: white;
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  font-size: 16px;
  border-radius: 15px;
  height: 60px;
  margin-top: 3px;
  margin-bottom: 10px;
  color: grey;
  border: 1px grey;
`

const StyledInputLabel = styled.Text`
  color: gray;
  font-size: 13px;
  text-align: left;
`
const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`

const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`

const WelcomeText = styled.Text`
  font-size: 16px;
  color: gray;
  margin: 10px;
  text-align: left;
  top: 10px;
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

const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
  color: red;
`

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [hidePassword, setHidePassword] = useState(true)
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleSubmit = () => {
    setLoading(true)
    // var emailValid = false
    // if (email.length == 0) {
    //   setEmailError('Email is required')
    // } else if (email.length < 6) {
    //   setEmailError('Email should be minimum 6 characters')
    // } else if (email.indexOf(' ') >= 0) {
    //   setEmailError('Email cannot contain spaces')
    // } else if (email.indexOf('@') <= 0) {
    //   setEmailError('Wrong email format ')
    // } else if (email.indexOf('.com') <= 0) {
    //   setEmailError('Wrong email format')
    // } else {
    //   emailValid = true
    //   setEmailError('')
    // }

    // var passValid = false
    // if (password.length == 0) {
    //   setPasswordError('Password is required')
    //   setLoading(false)
    // } else if (password.length < 6) {
    //   setPasswordError('Password should be minimum 6 characters')
    // } else if (password.indexOf(' ') >= 0) {
    //   setPasswordError('Password cannot contain spaces')
    // } else {
    //   passValid = true
    //   setPasswordError('')
    // }
    // if (emailValid && passValid) {
    //   setLoading(true)
    // }
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        navigation.replace('Monitor')
        setPassword('')
        setEmail('')
        console.log(authUser)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        alert(err)
      })
  }

  return (
    <>
      <StatusBar style="white" />
      <Container>
        <Overlay>
          <Header login={false} />
          <FormWrapper>
            <Form>
              <WelcomeText>Welcome to Home Controller !</WelcomeText>
              <SignInText>Sign In</SignInText>
              <MyTextInput
                label="Email Address"
                icon="idcard"
                placeholder="user@email.com"
                placeholderTextColor="#ccc"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
              />
            
              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="********"
                placeholderTextColor="#ccc"
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              {/* {passwordError.length > 0 && <MsgBox>{passwordError}</MsgBox>} */}

              <SubmitForm onPress={handleSubmit} disabled={loading}>
                <ButtonText>{loading ? 'Loading...' : 'Sign In'}</ButtonText>
              </SubmitForm>
              <NewToAppWrapper
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Register')}
              >
                <NewToApp>New to our App ? Sign Up</NewToApp>
              </NewToAppWrapper>
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

export default Login
