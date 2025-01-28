import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
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
      <Image 
        source={{uri:'https://www.metacritic.com/a/img/catalog/provider/6/3/6-1-4763-13.jpg'}}
        style={{
          width:215,
          height:294,
          resizeMode:'contain',
          //las imagenes que son remotas no se muestran hasta que le pongas una resolucion de ancho y alto //!ESTO ES OBLIGATORIO!
        }}
      />
      <Text
      style={{color:'white'}}>Un cambio!</Text>

      <Button title='Click me!' onPress={()=>alert('Hola!')} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
