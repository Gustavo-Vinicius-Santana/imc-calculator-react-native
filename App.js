import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Title from './src/components/Topo/index'
import Main from './src/components/Main'

export default function App() {
  return (
    <View style={styles.container}>

      <Title/>

      <Main/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 40,
  },
});
