import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PokeCard } from "./PokeCard";
// import icon from './assets/icon.png'; es lo mismo que el require
// const icon = require("./assets/icon.png");
export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const insets = useSafeAreaInsets();
  useEffect(() => {
    getLatestGames().then((pokemon) => {
      setPokemon(pokemon);
    });
  }, []);
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <StatusBar style="light" />
      {pokemon.length === 0 ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <ScrollView>
          {pokemon.map((pokemon) => (
            <PokeCard key={pokemon.slug} pokemon={pokemon} />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {},
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
