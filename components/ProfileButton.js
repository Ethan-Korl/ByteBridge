import { StyleSheet, Text, Pressable} from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/themed'


const ProfileButton = () => {
  let [ username, setUsername ] = useState("Profile")
  return (
    <Pressable>
    <Icon 
    name='user'
    type='antdesign'
    color={"white"}
    />
    <Text className="text-white">{username}</Text>
  </Pressable>
  )
}

export default ProfileButton

const styles = StyleSheet.create({})