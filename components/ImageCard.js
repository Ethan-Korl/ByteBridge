import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Image
} 
from 'react-native'

import React from 'react'

const ImageCard = ({image}) => {
  return (
      <View className="flex-1 border-solid border-slate-800 rounded-lg shadow-lg h-40 w-40 m-1">
        <Image className='flex-1' source={{ uri: image.uri }} />
      </View>
  )
}

export default ImageCard

const styles = StyleSheet.create({})

