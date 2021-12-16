import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [num, setnum] = useState(' ');
  let phnum: string = "";
  function printnum(num: string) {
    
    return num;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>您輸入的號碼是:{printnum(num)}</Text>
      <TextInput
        onChangeText={setnum}
        value={num}
        style={styles.TextInput}
        maxLength={13}
      ></TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 32,
    backgroundColor: '#E9AEAE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    fontSize: 32,
    backgroundColor: 'gray',
    textAlign: 'center',
    color: 'white',
    borderColor: 'black',
  },
  text: {
    fontSize: 32,

  }
});
