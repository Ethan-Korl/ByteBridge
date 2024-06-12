import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const NavButton = ({navigation, label, name}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(name)}>
        <View className="border-solid bg-slate-500 rounded-md w-15 p-2">
        <Text className="text-slate-50">{label}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default NavButton

const styles = StyleSheet.create({})