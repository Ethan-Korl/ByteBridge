import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    Image,
    Pressable
  } 
  from 'react-native'
  // impor
  import { Icon } from '@rneui/base'
  import React from 'react'
  
  const AudioCard = ({audio, onPress, playing}) => {
    return (
        <View className="flex-1 p-3 justify-center bg-slate-300 rounded-lg shadow-lg h-full w-50 m-1">
          <View>
            <View className='flex-row'>
              <Text className='text-lg bg-slate-400 rounded-md h-6 m-2 w-60'>{audio.filename}</Text>
              <Text className='bg-white text-lg w-10 h-6 ml-60'>{audio.duration}</Text>
            </View>
            <Pressable onPress={onPress} className='p-2 bg-slate-100 rounded-md w-10 h-10'>
              <Icon
              type='antdesign'
              containerStyle={styles.iconContainer}
              name={playing !== audio.id? "play":"pause" }
              />
            </Pressable>
          </View>
        </View>
    )
  }
  
  export default AudioCard
  
  const styles = StyleSheet.create({
    iconContainer: {
      // backgroundColor: "blue"
    }

  })
  
  