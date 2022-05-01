import React, { useState } from 'react'

import {
  Dimensions,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
  View
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { AntDesign, Entypo } from "@expo/vector-icons";
import styled from 'styled-components/native'

import Header from '../components/Header'
import { auth, db } from '../firebase'



const Container = styled.ScrollView`
  
  width:100%;
  height:100%;
`;

const FormWrapper = styled.KeyboardAvoidingView`
 justify-content: center;
align-items: center;
  
`;

const Form = styled.KeyboardAvoidingView`
  background-color: white;
  height: 88%;
  width: 90%;
  flex-direction: column;
  border-radius: 20px;
  padding: 5%;
  justify-content: space-between;
  border: 2px #f4a460;
`;

const SubmitForm = styled.TouchableOpacity`
  width: 95%;
  height: 6%;
  color: white;
  border-radius: 10px;
  border: none;
  justify-content: center;
  align-items: center;
  background-color: #f4a460;
  top:2%
`;

const ButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  padding-left: 2%;
  color: white;
`
const SignInText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #f4a460;
  text-align: left;
`

const NewToAppWrapper = styled.TouchableOpacity`
  width: 100%;
  background-color:red;
`

const NewToApp = styled.Text`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: gray;
  margin: 5%;
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
`;

const HalfInput = styled.TextInput`
  width: 45.8%;
  height: 70%;
  border: none;
  padding: 3%;
  border-radius: 15px;
  background-color: white;
  color: grey;
  margin-right: 1.5%;
  margin-top: 1%;
  border: 1px #ccc;
`;
const StyledTextInput = styled.TextInput`
  background-color: white;
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  font-size: 16px;
  border-radius: 15px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: grey;
  border: 1px grey;
`;


const StyledInputLabel = styled.Text`
  color: gray;
  font-size: 13px;
  text-align: left;
  padding-top: 5px;
`;
const LeftIcon = styled.View`
  left: 15px;
  top: 48px;
  position: absolute;
  z-index: 1;
`;

const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 48px;
  position: absolute;
  z-index: 1;
`;
const InputsWrapper = styled.View`
  flex-direction: column;
  justify-content: space-around;

`;
const NameText = styled.Text`
  color: grey
`;

const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
  color: red;
`;

const Register = ({ navigation }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass,setConfirmPass] = useState('')
  const [loading, setLoading] = useState(false)
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPass, setHideConfirmPass] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  

  const register = () => {
    setLoading(false)
    var nameValid = false;
    if (firstName.length == 0 || lastName.length==0) {
     setNameError("Name is required");
   } else if (firstName.length < 3 || lastName.length < 3) {
     setNameError("Name should be minimum 3 characters");
    
   }
   else{
     nameValid = true
     setNameError("")
   }
  var emailValid = false;  
     if (email.length == 0) {
     setEmailError("Email is required");
    

   } else if (email.length < 6) {
     setEmailError("Email should be minimum 6 characters");
    
   } else if (email.indexOf(" ") >= 0) {
     setEmailError("Email cannot contain spaces");
    
  } else if (email.indexOf("@") <= 0) {
     setEmailError("Wrong email format ");
    
  } else if (email.indexOf(".com") <= 0) {
     setEmailError("Wrong email format");
     
  } 
  else{
     emailValid = true;
     setEmailError("")
  }


  var passValid = false;
   if (password.length == 0) {
     setPasswordError("Password is required");
     setLoading(false);
   } else if (password.length < 6) {
     setPasswordError("Password should be minimum 6 characters");
  
     
   } else if (password.indexOf(" ") >= 0) {
     setPasswordError("Password cannot contain spaces");
  

   }
   else{
      passValid = true;
      setPasswordError("")
   }

  var confirmPassValid = false; 
   if (confirmPass.length == 0) {
     setConfirmPasswordError("Password is required");
     
     
   } else if (confirmPass.length < 6) {
     setConfirmPasswordError("Password should be minimum 6 characters");
    
   
   } else if (confirmPass.indexOf(" ") >= 0) {
     setConfirmPasswordError("Password cannot contain spaces");
    
   } else if (password != confirmPass) {
     setConfirmPasswordError("Password cannot contain spaces");
   }
   else{
     confirmPassValid = true;
     setConfirmPasswordError("")
   }

   if (emailValid && nameValid && passValid && confirmPassValid){
     setLoading(true);
   }
      return
    

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
        setLoading(false)
      })
  }

  return (
    <View style={{backgroundColor: 'white'}}>
      <StatusBar style="light" />

      <Header login={false} />
      <FormWrapper>
        <Form>
          <KeyboardAvoidingView style={{ width: "100%" }}>
            <SignInText>Sign Up</SignInText>
            <InputsWrapper>
              <HalfInputWrapper>
                <NameText>First Name</NameText>
                <HalfInput
                  placeholderTextColor="#ccc"
                  placeholder="user"
                  value={firstName}
                  onChangeText={(text) => setFirstName(text)}
                />
              </HalfInputWrapper>
              <HalfInputWrapper>
                <NameText>Last Name</NameText>
                <HalfInput
                  placeholderTextColor="#ccc"
                  placeholder="user"
                  value={lastName}
                  onChangeText={(text) => setLastName(text)}
                />
              </HalfInputWrapper>
              {nameError.length > 0 && <MsgBox>{nameError}</MsgBox>}
              <MyTextInput
                label="Email Address"
                icon="idcard"
                placeholder="user@email.com"
                placeholderTextColor="#ccc"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
              />
              {emailError.length > 0 && <MsgBox>{emailError}</MsgBox>}
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
              {passwordError.length > 0 && <MsgBox>{passwordError}</MsgBox>}
              <MyTextInput
                label="Confirm Your Password"
                icon="lock"
                placeholder="********"
                placeholderTextColor="#ccc"
                secureTextEntry={hideConfirmPass}
                isPassword={true}
                hidePassword={hideConfirmPass}
                setHidePassword={setHideConfirmPass}
                value={confirmPass}
                onChangeText={(text) => setConfirmPass(text)}
              />
              {confirmPasswordError.length > 0 && (
                <MsgBox>{confirmPasswordError}</MsgBox>
              )}

              <SubmitForm onPress={register} disabled={loading}>
                <ButtonText>{loading ? "Loading..." : "Sign Up"}</ButtonText>
              </SubmitForm>
              <NewToApp
                activeOpacity={0.5}
                onPress={() => navigation.navigate("Login")}
              >
                <NewToApp>Already have an account ? Sign In</NewToApp>
              </NewToApp>
            </InputsWrapper>
          </KeyboardAvoidingView>
        </Form>
      </FormWrapper>
    </View>
  );
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
            name={hidePassword ? "eye-with-line" : "eye"}
            size={24}
            color="grey"
          />
        </RightIcon>
      )}
    </View>
  );
};
export default Register
