import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Image
} 
from 'react-native'

import React from 'react'

const OthersCard = ({image}) => {
  return (
      <View className="flex-1 bg-slate-600 rounded-lg shadow-lg h-40 w-40 m-1">
        <Image />
        <Text className="text-cyan-50 text-center text-lg rounded-lg p-2 shadow-md">
          {image.name}
        </Text>
      </View>
  )
}

export default OthersCard

const styles = StyleSheet.create({})

