import { StyleSheet, Text, FlatList, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import OthersCard from '../components/OthersCard copy'
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import Ionicons from '@expo/vector-icons/Ionicons';

const OthersScreen = () => {
  const [othersList, setOthersList] = useState([]);


  const fetchOthersFiles = async () => {
    const permission = await MediaLibrary.requestPermissionsAsync(
    );
    const media = await MediaLibrary.getAssetsAsync({
        mediaType: MediaLibrary.MediaType.video
    });
    setOthersList(media.assets)
}

  useEffect(() => {fetchOthersFiles()}, [])

  console.log(othersList)

  function renderItem({item}){
    return (
      // for onpress need to add a function to handle each item
      <TouchableOpacity>
        <OthersCard image={item}/>
      </TouchableOpacity>
    )}


    return (
        <View className='container flex-1 p-2 bg-slate-200'>
            {/* <View className="flex-row h-10 bg-slate-400 justify-evenly">
            </View> */}
          <FlatList 
              data={othersList}
              numColumns={2} 
              renderItem={renderItem} 
              keyExtractor={item => item.id}
          />
        <StatusBar style="auto" />
        </View>
    )
}

export default OthersScreen

const styles = StyleSheet.create({})