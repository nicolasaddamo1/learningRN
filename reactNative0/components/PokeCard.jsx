import { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";

export function PokeCard({ pokemon }) {
  return (
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
  );
}
export function AnimatedPokeCard({ pokemon, index }) {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);
  return (
    <Animated.View style={{ opacity }}>
      <PokeCard pokemon={pokemon} />
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 140,
    height: 175,
    borderRadius: 10,
  },
});
