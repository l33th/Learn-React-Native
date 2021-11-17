import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  const handleTextPress = () => console.log('Text pressed');
  const handleImagePress = () => console.log('image tapped');

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handleTextPress}>Generate Random Image</Text>
      <TouchableNativeFeedback onPress={handleImagePress}>
        <Image 
        blurRadius={1} 
        fadeDuration={1000}
        source={{ 
          width: 200,
          height: 300,
          uri: 'https://picsum.photos/200/300'}} />
          <View style={{width: 200, height: 70, backgroundColor: 'dodgerblue'}}></View>
      </TouchableNativeFeedback>
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
