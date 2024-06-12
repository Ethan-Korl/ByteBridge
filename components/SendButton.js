import { StyleSheet, Pressable, Text, View } from 'react-native'
import {React, useState } from 'react'
import { Icon } from '@rneui/themed'

const SendButton = (props) => {
    const [buttonColor, setColorOnPress] = useState('bg-slate-700')
    const { onPress, className, iconName, iconType="antdesign" , title ="Send File"} = props

  return (
    <Pressable className='bg-slate-900 rounded-lg w-40' onPress={onPress}>
        <Icon name='send' type='feather' color={'white'} />
        <Text className='text-center text-white p-1'>{title}</Text>
    </Pressable>
  )
}



export default SendButton;
// export default CloudButton;

const styles = StyleSheet.create({})