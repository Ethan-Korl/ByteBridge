import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignUpButton = ({navigation}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
      <Text className='text-slate-900 font-bold text-base'>Sign up</Text>
    </TouchableOpacity>
  )
}

export default SignUpButton

const styles = StyleSheet.create({})