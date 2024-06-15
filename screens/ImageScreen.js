import { StyleSheet, Text, TouchableOpacity, Button, Image, Modal, View} from 'react-native'
import { useState } from 'react'
import { FlatList, StatusBar } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import React from 'react'
// import { Button } from '@rneui/themed'
import LoginScreen from './LoginScreen'
import ImageCard from '../components/ImageCard'
import Data1 from '../testingData/Data1'
import { Icon } from '@rneui/base'
import * as MediaLibrary from 'expo-media-library';
import { useEffect } from 'react';
import { Audio } from 'expo-av';
// import {ModalButton, CloudButton} from '../components/ModalButton'
import CloudButton from '../components/CloudButton'
import SendButton from '../components/SendButton'

let data = Data1.data
// console.log(data)
const ImageScreen = ({navigation}) => {
 
  let onPressHandler = (obj) => alert(obj.name)

  const [imageList, setImageList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);


  const fetchImageFiles = async () => {
    const permission = await MediaLibrary.requestPermissionsAsync(
    );
    const media = await MediaLibrary.getAssetsAsync({
        mediaType: MediaLibrary.MediaType.photo,
    });
    setImageList(media.assets)
}

  useEffect(() => {fetchImageFiles()}, [])

  // console.log(imageList)

  function renderItem({item}){
    return (
      // for onpress need to add a function to handle each item
      <TouchableOpacity onPress={() => handleImagePress(item.uri)}>
        <ImageCard image={item}/>
      </TouchableOpacity>
  )}

  const handleImagePress = (imageUri) => {
    setSelectedImage(imageUri);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleAction = () => {
    // Your action logic here
    // For example, you could delete the image, share it, etc.
  };

  return (
      <View className='container flex-1 p-2 bg-slate-200'>
      {/* <Button title="Load an image from gallery" onPress={pickImage} /> */}
        <FlatList 
            data={imageList}
            numColumns={2} 
            renderItem={renderItem} 
            showsVerticalScrollIndicator={false}
            // contentContainerStyle={styles.flatListContainer}
            keyExtractor={(item, index) => index.toString()}
        />

      <Modal visible={modalVisible} animationType="fade" onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <CloudButton />
          <Image source={{ uri: selectedImage }} style={styles.modalImage} />

          <View className='flex-row justify-end'>
            <SendButton />
            {/* <ModalButton iconName="close" title="Close" onPress={closeModal} /> */}
            {/* <ModalButton iconName="send" iconType="feather" title="Send"  onPress={handleAction} /> */}
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
      </View>
  )
}

export default ImageScreen

const styles = StyleSheet.create({
    homeContainer: {
      // padding: 34,
    },

    heading: {
        // marginBottom:600,
        marginRight:150,
        borderStyle: "solid",
        backgroundColor: "grey",
        borderRadius: 12,
        borderWidth: 4,
      },
    
      textHeading: {
        color:"blue", 
        fontSize:34, 
        textAlign: "center"
      },

      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalImage: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
      },

      cloudButton: {
        backgroundColor: "blue"
      }
})