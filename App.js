import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Button } from 'react-native';

export default function App() {
  const buttonPressed = () => console.log('button pressed');

  return (
    <SafeAreaView style={styles.container}>
      <Button color='purple' title='Click me' onPress={buttonPressed} />
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
