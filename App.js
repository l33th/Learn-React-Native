import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log('Text pressed');

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Generate Random Image</Text>
      <TouchableOpacity onPress={() => console.log('image tapped')}>
        <Image 
        blurRadius={1} 
        fadeDuration={1000}
        source={{ 
          width: 200,
          height: 300,
          uri: 'https://picsum.photos/200/300'}} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
