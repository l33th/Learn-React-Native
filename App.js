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
          width: 400,
          flex: -1,
          // flexShrink: 1,
          // flexGrow: 1,
          height: 300,
        }}
      />
      <View style={{ backgroundColor: 'gold', width: 100, height: 100 }} />
      <View style={{ backgroundColor: 'tomato', width: 100, height: 100 }} />
      <View style={{ backgroundColor: 'grey', width: 100, height: 100 }} />
      <View
        style={{ backgroundColor: 'greenyellow', width: 100, height: 100 }}
      />
    </View>
  );
}
