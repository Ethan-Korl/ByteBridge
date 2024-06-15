import { StyleSheet, Text, FlatList ,View, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import NavButton from '../components/NavButton'
import AppCard from '../components/AppCard'
import { InstalledApps } from 'react-native-launcher-kit'

const HomeScreen = ({navigation}) => {
  let data = [
    {name: "Mike"},
    {name: "Polyside"},
    {name: "Gideon"},
    {name: "John"},
    {name: "Rigs"},
    {name: "Rigs"},
    {name: "Rigs"},

    {name: "Rigs"},
    {name: "Rigs"},
    {name: "Mike"},
    {name: "Polyside"},
    {name: "Gideon"},
    {name: "John"},
    {name: "Rigs"},
    {name: "Rigs"},
    {name: "Rigs"},
    {name: "Rigs"},
    {name: "Rigs"}
  ]

  const apps = InstalledApps.getApps()
  
  console.log(apps)

  function renderItem({item}){
    return (
      // for onpress need to add a function to handle each item
      <TouchableOpacity>
        <AppCard image={item}/>
      </TouchableOpacity>
  )}

  return (

    <View className='container rounded-md mt-2 flex-1 p-2 bg-slate-200'>
        <FlatList 
            data={data}
            numColumns={3} 
            renderItem={renderItem} 
            showsVerticalScrollIndicator = {false}
            keyExtractor={item => item.name}
        />
      <StatusBar style="auto" />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})

  
  {/* <View className="flex-row justify-evenly">

  <NavButton navigation={navigation} label={"Apps"} name={"PhoneApps"} />

  <NavButton navigation={navigation} label={"Images"} name={"Images"}/>

  <NavButton navigation={navigation} label={"Audio"} name={"Audio"}/>

  <NavButton navigation={navigation} label={"Others"} name={"Others"} />

  <NavButton navigation={navigation} label={"Cloud"} name={"Cloud"} />
</View> */}