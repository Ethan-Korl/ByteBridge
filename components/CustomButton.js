import React, { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const CustomButton = (props) => {
  const [buttonColor, setColorOnPress] = useState('bg-slate-700')
  const { onPress, title = "Save"} = props

  return (
    <Pressable style={styles.button} className={buttonColor} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        height:55,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
})