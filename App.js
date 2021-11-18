import React from 'react';
import { Dimensions, StyleSheet, SafeAreaView, Button, Platform, StatusBar, View } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  const buttonPressed = () => console.log('button pressed');
  const {landscape} =  useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <Button color='purple' title='Click me' onPress={buttonPressed} />
      <View style={{backgroundColor: 'dodgerblue', width: '100%', height: landscape ? '100%' : '30%',}}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
