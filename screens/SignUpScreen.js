
  import { StyleSheet, Text, TextInput ,View } from 'react-native'
  import React, { useState } from 'react'
  import { StatusBar } from 'expo-status-bar'
  import CustomButton from '../components/CustomButton'
  import axios from 'axios'
  import Global from '../ENV/Global'


  const SignUpScreen = () => {
    const [email, setEmail] = useState('')
    const [buttonAction, setButtonAction] = useState(handleSubmitEmail)
    const [verificationCode, setVerificationCode] = useState('');
    const [showVerification, setShowVerification] = useState(false);
    const [emailError, setEmailError] = useState('')
    const [verificationCodeSent, setverificationCodeSent] = useState(false)

    const handleSubmitEmail = async () => {
      try {
        // Perform validation if needed
            // Perform email validation
        if (!email) {
          setEmailError('Email is required')
          return
        }
        else if (!/\S+@\S+\.\S+/.test(email)) { 
          setEmailError('Email is invalid.'); 
        }
        else{
          setShowVerification(true);
          setEmailError('')
          let data = { email: email}
          await axios.post(`${Global.BACKEND_URL}/accounts/register/`, data)
          .then(res => {console.log(res)})
          
          .catch(function (error) {
            console.log(error)}
          )
          setverificationCodeSent(true)
        } 
      } catch (error) {
        console.error('Email submission error:', error);
      }
    };

    const handleSignUp = async () => {
      // let data = { email: email, verificationCode: verificationCode}
      // await axios.post()
      // .then(res => {console.log(res.status)})
    }

    return (
      <View className="container flex-1 pt-10">
      <Text className="text-center">Save and Share Your Data in the Cloud</Text>
    <View className="container mt-20 p-2">
      {/* <ValidatedForm> */}
        <TextInput 
        style={styles.textInputs}
        value={email}
        onChangeText={setEmail}
        placeholder='Email'
        keyboardType='email-address'
        />
      {/* </ValidatedForm> */}
      {emailError ? <Text className='text-red-500 text-left p-1 pl-2'>{emailError}</Text> : null}

      {showVerification && <TextInput 
      style={styles.textInputs}
      placeholder='Email Verification Code'
      keyboardType='number'
      value={verificationCode}
      onChangeText={setVerificationCode}
      />}

      {verificationCodeSent? <Text className='text-emerald-50 text-lg bg-green-500 m-1 rounded-md text-center p-1 pl-2'>Verification Code Sent To Your Email</Text> : null}

      <CustomButton onPress={showVerification ? handleSignUp : handleSubmitEmail} title={showVerification? "Verify" : "Submit"} />
    </View>
    <StatusBar style='auto' />
    </View>
    )
  }

  export default SignUpScreen

  const styles = StyleSheet.create({
      textInputs : {
          borderWidth: 2,
          borderRadius: 1,
          borderRadius: 5,
          margin: 3,
          height: 60,
          padding: 20,
          fontSize: 20
      },

      textInputsContainer: {
          marginTop: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          padding: 7,

      }
  })