import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";


export type PokemonCard = {
  index: number;
  name: string;
  photoURL: string;
  color: string;
}
export function PokeCard({ index, name, photoURL, color }: PokemonCard) {
  const navigation = useNavigation();
  function handleNavigation() {
    navigation.navigate('Pokemon' as never, {
      pokeIndex: index
    } as never);
  }
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color, borderColor: color }]}
      onPress={() => handleNavigation()}
    >
      <View style={styles.imgContainer}>
        <Text style={styles.index}>#{index}</Text>
        <Image resizeMode="contain" source={{ uri: photoURL }} style={styles.image} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  )
}