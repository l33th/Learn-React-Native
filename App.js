import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  const buttonPressed = () => Alert.prompt('My title', 'My message', (text) => console.log(text));

  return (
    <SafeAreaView style={containerStyle}>
      <Button color='purple' title='Click me' onPress={buttonPressed} />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: 'orange'}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
