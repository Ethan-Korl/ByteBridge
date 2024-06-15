import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { 
  StyleSheet, 
  SafeAreaView, 
  FlatList, 
  Text,
  View,
  TouchableOpacity
  } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ImageScreen from  './screens/ImageScreen'
import AudioScreen from './screens/AudioScreen';
import OthersScreen from './screens/OthersScreen';
import PhoneApps from './screens/PhoneApps';
import { Icon } from '@rneui/base';
import NavBar from './components/NavBar';
import SignUpScreen from './screens/SignUpScreen';
import ConnectionScreen from './screens/ConnectionScreen';
import LogoComponent from './components/LogoComponent';


const Stack = createNativeStackNavigator();
const Tap = createMaterialTopTabNavigator()

function MainTapStack(){
  const iconColor = "#1f4155"
  return (
    <Tap.Navigator
    initialRouteName="Home"
    tabBarPosition="bottom"
    screenOptions={{
      tabBarShowLabel: true,
      tabBarActiveTintColor: "#1f4155",
      tabBarInactiveTintColor: "#fffff",
      tabBarStyle: {
        borderTopWidth: 0.2,
       //  borderColor: "#",
      //  borderTopEndRadius: 34,
      //  borderTopStartRadius: 34,
        backgroundColor: "#ffffffda",
        // marginBottom: 1
      },
      tabBarIndicatorStyle: {
        height: 0,
      },
      }}
      >
      <Tap.Screen 
        name='Home'
        options={{
          tabBarIcon: ({color}) => ( <Icon name='home' color={iconColor} />),
        }}
        component={HomeScreen}
      />
  
      <Tap.Screen 
      name='Images'
      options={{
        tabBarIcon: ({color}) => ( <Icon name='image' color={iconColor} />) 
      }}
      component={ImageScreen}
      />
  
      <Tap.Screen 
        name='Audio'
        options={{
        tabBarIcon: ({color}) => ( <Icon name='sound' type='antdesign' color={iconColor} />) 
      }}
        component={AudioScreen}
      />
  
      <Tap.Screen 
      name='Others'
      options={{
        tabBarIcon: ({color}) => ( <Icon name='unknowfile1' type='antdesign' color={iconColor} />) 
      }}
      component={OthersScreen}
      />
  
      {/* <Tap.Screen 
      name='Cloud'
      options={{
        tabBarIcon: ({color}) => ( <Icon name='cloudupload' type='antdesign' color={"white"} />) 
      }}
      component={LoginScreen}
      /> */}
      </Tap.Navigator>
  )
}

function CloudButton(){
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity 
      className='bg-slate-800' 
      style={styles.floatingButton}
      onPress={() => navigation.navigate("Cloud")}
      >
        <Icon name="plus" type='antdesign' size={36} color="white" />
      </TouchableOpacity>
    </View>
  ) 
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, }}>
    <NavigationContainer>
    {/* <NavBar /> */}
    <Stack.Navigator>
    <Stack.Screen 
    name='MainTapHome'
    component={MainTapStack}
    options={{
      headerTitle: (props) => <LogoComponent {...props} />,
      headerStyle: {
        backgroundColor:'#1f4155',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    />

    <Stack.Screen 
      name='ConnectionScreen'
      component={ConnectionScreen}
      options={{ headerShown: false }}
    />

    <Stack.Screen 
      name='SignUp'
      component={SignUpScreen}
      options={{ headerShown: false }}
      />
    
    <Stack.Screen 
      name='Cloud'
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    </Stack.Navigator>
    <CloudButton />
    </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  floatingButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 16,
    marginBottom:100,
    marginRight: 20,
    right: 16,
    elevation: 3, // for Android shadow
    zIndex: 100, // to appear above the FlatList
  }
  
});
