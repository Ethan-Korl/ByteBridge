
  import { StyleSheet, Text, TextInput ,View } from 'react-native'
  import React, { useState, version } from 'react'
  import { StatusBar } from 'expo-status-bar'
  import CustomButton from '../components/CustomButton'
  import axios from 'axios'
  import Global from '../ENV/Global'

  const BACKEND_URL = "https://bytebridge-backend.onrender.com"

  const SignUpScreen = () => {
    const [email, setEmail] = useState('')
    const [buttonAction, setButtonAction] = useState(handleSubmitEmail)
    const [verificationCode, setVerificationCode] = useState('');
    const [showVerification, setShowVerification] = useState(false);
    const [emailError, setEmailError] = useState('')
    const [verificationCodeSent, setverificationCodeSent] = useState(false)
    const  [registrationMessage, setregistrationMessage] = useState("")

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
          // console.log(Global.BACKEND_URL)
          const registrationEndpoint=`${BACKEND_URL}/accounts/register/`
          // console.log(registrationEndpoint)
          await axios.post(registrationEndpoint, data)
          .then(res => {
            if (res.status=200){
              let msg = res.data['detail']
              setregistrationMessage(msg)
            }
          })
          .catch(function (error) {
            // setverificationCodeSent(false)
            setregistrationMessage("Email Verification Failed")
          }
          )
          setverificationCodeSent(true)
        } 
      } catch (error) {
        console.error('Email submission error:', error);
      }
    };

    const handleEmailCodeVerification = async () => {
      const emailVerificationEndpoint = `${BACKEND_URL}/accounts/verify-email/`
      let data = { email: email, code: verificationCode}
      await axios.post(emailVerificationEndpoint, data)
      .then(res => {
        if(res.status==200){
          console.log(res.data['detail'])
        }
      })
      .catch((error) => {
        setEmailError("Code Validation Failed")
      })
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
      {showVerification && <TextInput 
      style={styles.textInputs}
      placeholder='Email Verification Code'
      keyboardType='number'
      value={verificationCode}
      onChangeText={setVerificationCode}
      />}
      {emailError ? <Text className='text-red-500 text-left p-1 pl-2'>{emailError}</Text> : null}

      {verificationCodeSent? <Text className='text-emerald-50 text-lg bg-green-500 m-1 rounded-md text-center p-1 pl-2'>{registrationMessage}</Text> : null}

      <CustomButton onPress={showVerification ? handleEmailCodeVerification : handleSubmitEmail} title={showVerification? "Verify" : "Submit"} />
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