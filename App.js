import React, { useState} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import Navigator from './routes/drawer';


export default function App() {
  
  return (
   <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    margin:30
  },

});
