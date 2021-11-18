import React from 'react';
import { Dimensions, StyleSheet, SafeAreaView, Button, Platform, StatusBar, View } from 'react-native';

export default function App() {
  const buttonPressed = () => console.log('button pressed');
  console.log(Dimensions.get('screen'))

  return (
    <SafeAreaView style={styles.container}>
      <Button color='purple' title='Click me' onPress={buttonPressed} />
      <View style={{backgroundColor: 'dodgerblue', width: '50%', height: 70}}></View>
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
