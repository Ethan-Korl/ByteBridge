import { StyleSheet, Pressable, Text, View } from 'react-native'
import {React, useState } from 'react'
import { Icon } from '@rneui/themed'

const ModalButton = (props) => {
    const [buttonColor, setColorOnPress] = useState('bg-slate-700')
    const { onPress, className, iconName, iconType="antdesign" , title ="Save"} = props

  return (
    <Pressable className={className} onPress={onPress}>
        <Icon name={iconName} type={iconType} />
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const CloudButton = (props) => {
    const { onPress, iconType="antdesign" , title ="Save"} = props
  return (
    <Pressable className='bg-slate-800' onPress={onPress}>
        <Icon name='cloudupload' type={iconType} />
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default [ModalButton, CloudButton];
// export default CloudButton;

const styles = StyleSheet.create({})
