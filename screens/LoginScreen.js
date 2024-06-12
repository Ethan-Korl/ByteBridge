import { 
    StyleSheet, 
    Text, 
    TextInput,
    View 
    } 
from 'react-native'
import ValidatedForm from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import React from 'react'
import SignUpButton from '../components/SignUpButton';
import ForgotPassword from '../components/ForgotPassword';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({navigation}) => {
  return (
    <View className="container flex-1 pt-10">
      <Text className="text-center">Login into your cloud</Text>
    <View className="container mt-20 p-2">
      {/* <ValidatedForm> */}
        <TextInput 
        style={styles.textInputs}
        // onChangeText={() => this.ser}
        placeholder='Email'
        keyboardType='email-address'
        />
      {/* </ValidatedForm> */}

      <TextInput 
      style={styles.textInputs}
      placeholder='Password'
      keyboardType='visible-password'
      />

      <CustomButton title='Login'/>

      <View className='flex-row justify-between m-4'>
        <SignUpButton navigation={navigation} />
        <ForgotPassword />
      </View>
    </View>
    <StatusBar style='auto' />
    </View>
  )
}

export default LoginScreen

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