import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { TYPE_COLORS } from '../../global/colors'
import api from "../../services/api";
import { PokeCard, PokemonCard } from "../../components/PokeCard";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";


export function Home() {
  const [pokemons, setPokemons] = useState<PokemonCard[]>();
  const [page, setPage] = useState(1);
  const [previousPage, setPreviousPage] = useState();
  const [nextPage, setNextPage] = useState();
  const [loading, setLoading] = useState<boolean>(true);

  async function getPokemons(index) {
    setLoading(true)
    const response = await api.get(index);
    setPreviousPage(response.data.previous);
    setNextPage(response.data.next);
    const data = await response.data.results;
    const pokeData = await Promise.all(data.map(async (item) => {
      const pokeIndex = item.url.split('/')[item.url.split('/').length - 2]
      const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeIndex}.png?raw=true`;
      return {
        index: pokeIndex,
        photoURL: imageUrl,
        name: item.name,
        color: await getCardColors(pokeIndex)
      }
    }))
    setPokemons(pokeData);
    const color = await getCardColors(pokeData[0].index)
    setLoading(false)
  }


  async function getPreviousPage() {
    setPage(page - 1);
    getPokemons(previousPage);
  }

  async function getNextPage() {
    setPage(page + 1);
    getPokemons(nextPage);
  }

  async function getCardColors(index) {
    const response = await api.get(index + '/');
    const types = response.data.types.map(type => type.type.name);
    const color = `${TYPE_COLORS[types[0]]}`;
    return color;
  }
  useEffect(() => {
    getPokemons('')
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>
      <View style={styles.header}>
        <View style={styles.navigationArea}>
          <TouchableOpacity style={styles.button} onPress={getPreviousPage} disabled={(page === 1)}>
            <Text style={styles.buttonText}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.pageNumber}>{page}</Text>
          <TouchableOpacity style={styles.button} onPress={getNextPage} disabled={(page === 41)}>
            <Text style={styles.buttonText}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.pokemons}>
        {
          (pokemons && !loading) ?
            <FlatList
              numColumns={2}
              data={pokemons}
              keyExtractor={item => `${item.index}`}
              renderItem={({ item }) =>
                <PokeCard
                  index={item.index}
                  photoURL={item.photoURL}
                  name={item.name}
                  color={item.color}
                />
              }
            /> : <ActivityIndicator color="#ee1515" size={60} />
        }
      </View>
    </View>
  )
}