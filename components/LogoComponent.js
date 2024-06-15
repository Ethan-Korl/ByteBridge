
import { StyleSheet, Text, Image ,View } from 'react-native'
import React from 'react'

const LogoComponent = () => {
    return (
      <Image
        style={{ width: 50, height: 50, borderRadius: 20 }}
        source={require('../assets/Xender-For-PC-Logo.webp')}
      />
    );
}

export default LogoComponent

const styles = StyleSheet.create({})