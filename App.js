import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row', // horizontal
        justifyContent: 'center', // main
        alignItems: 'center', // secondary
        alignContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100,
          top: 20,
          // bottom: -20,
          left: 20,
          // right: -20,
          position: 'relative',
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
