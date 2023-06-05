import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { Button } from '@react-native-material/core';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title ="Login" onPress={() => alert("You have pressed Login")}/>
      <Button title ="Register" onPress={() => alert("You have pressed register")}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
/*import React from "react";
import { Button } from '@react-native-material/core';

const App = () => (
  <Button title ="Help me Pass SysArch" onPress={() => alert("You passed with 2.9")}/>
);

export default App;*/
