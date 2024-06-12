import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'

const ConnectButton = () => {
  const navigation = useNavigation();
  
  return (
   <Pressable onPress={()=>navigation.navigate("ConnectionScreen")}>
     <Icon 
     name='wifi'
     type='antdesign'
     color={"white"}
     />
     <Text className="text-white">Connect</Text>
   </Pressable>
  )
}

export default ConnectButton

const styles = StyleSheet.create({})