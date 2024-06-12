import { StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from '@rneui/themed'
import React from 'react'

const AddImageButton = ({func}) => {
  return (
    <TouchableOpacity className='bg-slate-800 rounded' styles={styles.imagePicker} onPress={func}>
    <Icon name="plus" type='antdesign' size={36} color="white" />
    </TouchableOpacity>
  )
}

export default AddImageButton

const styles = StyleSheet.create({
    imagePicker: {
        width: 56,
        height: 56,
        borderRadius: 28,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    }
})