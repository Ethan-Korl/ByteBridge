import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ConnectionScreen = ({ navigation }) => {
  const handleSendPress = () => {
    // navigation.navigate('SendScreen');
  };

  const handleReceivePress = () => {
    // navigation.navigate('ReceiveScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ByteBridge</Text>
      <Text style={styles.subtitle}>What would you like to do?</Text>
      <View className='flex-row justify-between h-20 rounded-full w-60 bg-slate-300'>
        <TouchableOpacity className="bg-slate-800 rounded-full h-16 w-16" onPress={handleSendPress}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-slate-800 rounded-full h-16 w-16" onPress={handleReceivePress}>
          <Text style={styles.buttonText}>Receive</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConnectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
})
