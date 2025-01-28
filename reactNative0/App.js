import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { getLatestGames } from "./lib/metacritic";
// import icon from './assets/icon.png'; es lo mismo que el require
// const icon = require("./assets/icon.png");
export default function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    getLatestGames().then((pokemon) => {
      setPokemon(pokemon);
    });
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ margin: 12 }}>
        <ScrollView>
          <StatusBar style="light" />
          {pokemon.map((pokemon) => (
            <View key={pokemon.slug} style={styles.card}>
              <Image source={{ uri: pokemon.image }} style={styles.image} />
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontStyle: "italic",
                  fontSize: 24,
                  fontFamily: "monospace",
                  fontWeight: "bold",
                }}
              >
                {pokemon.title}
              </Text>
              <Text style={{ color: "white", textAlign: "center" }}>
                {pokemon.description}
              </Text>
              <Text style={{ color: "white", textAlign: "center" }}>
                {pokemon.score}
              </Text>
              <Text style={{ color: "white", textAlign: "center" }}>
                {pokemon.types.join(", ")}
              </Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {},
  image: {
    width: 140,
    height: 175,
    borderRadius: 10,
  },
});
{
  /* <Image
source={icon}
style={{
  width: 200,
  height: 100,
  resizeMode: "contain",
  // resizeMode:'repeat',
  // resizeMode:'stretch',
}}
/>
<Image
source={{
  uri: "https://www.metacritic.com/a/img/catalog/provider/6/3/6-1-4763-13.jpg",
}}
style={{
  width: 215,
  height: 294,
  resizeMode: "contain",
  //las imagenes que son remotas no se muestran hasta que le pongas una resolucion de ancho y alto //!ESTO ES OBLIGATORIO!
}}
/>
<Text style={{ color: "white" }}>Un cambio!</Text>

<Button //!ESTE BOTON ES EL NATIVO, NO SE PUEDE ESTILAR
title="Click me!"
onPress={() => alert("Hola!")}
/>
<TouchableHighlight //!ESTE BOTON SI SE PUEDE ESTILAR
underlayColor={"#fff"}
style={{
  backgroundColor: "red",
  padding: 20,
  borderRadius: 10,
}}
onPress={() => alert("Hola!")}
>
<Text>Pulsa aqui!</Text>
</TouchableHighlight>

<Pressable
onPress={() => {}}
style={({ pressed }) => [
  {
    backgroundColor: pressed ? "red" : "blue",
  },
  styles.wrappedCustom,
]}
>
{({ pressed }) => (
  <Text
    style={{
      fontSize: pressed ? 32 : 16,
      color: pressed ? "gray" : "white",
    }}
  >
    {pressed ? "Presionando" : "Presiona aqui!"}
  </Text>
)}
</Pressable> */
}
