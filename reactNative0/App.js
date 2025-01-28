import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
// import icon from './assets/icon.png'; es lo mismo que el require
const icon = require('./assets/icon.png')
export default function App() {
  return (
    <View style={styles.container}>
      <Image
      source={icon}
      style={{
        width:200,
        height:100,
        resizeMode:'contain',
        // resizeMode:'repeat',
        // resizeMode:'stretch',
      }}
      />
      <Text>Un cambio!</Text>
      <StatusBar style="auto" />
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
