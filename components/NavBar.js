import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ConnectButton from './ConnectButton'
import ProfileButton from './ProfileButton'

const NavBar = () => {
  return (
    <View className='h-15 flex-row justify-between p-3 bg-slate-800 mt-9 rounded-2xl'>
        <View>
            <ProfileButton />
        </View>

        <View className="justify-start">
            <ConnectButton />
        </View>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({})