import React, { useEffect, useState } from "react";
import { ProgressBar } from 'react-native-paper'
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { TYPE_COLORS } from '../../global/colors'
import api from "../../services/api";
import { AxiosResponse } from "axios";
import { useRoute } from "@react-navigation/native";

type Params = {
  pokeIndex: string;
}

type PokeType = {
  type: string;
  color: string;
}

type PokeStatus = {
  hp: number;
  atk: number;
  def: number;
  satk: number;
  sdef: number;
  spd: number;
}

type Pokemon = {
  abilities: string[];
  height: number;
  photoURL: string;
  name: string;
  weight: number;
}


export function Pokemon() {

  const route = useRoute();

  const [pokemon, setPokemon] = useState<Pokemon>();
  const [types, setTypes] = useState<PokeType[]>();
  const [status, setStatus] = useState<PokeStatus>();
  const [description, setDescription] = useState();
  const [loading, setLoading] = useState<boolean>(true);
  const [color, setColor] = useState<string>();
  let { pokeIndex } = route.params as Params;
  const [pokemonIndex, setPokemonIndex] = useState(parseInt(pokeIndex));


  async function previousPokemon() {
    if (pokemonIndex === 1) {
      setPokemonIndex(898);
    } else {
      setPokemonIndex(pokemonIndex - 1);
    }
  }

  async function nextPokemon() {
    if (pokemonIndex === 898) {
      setPokemonIndex(1);
    } else {
      setPokemonIndex(pokemonIndex + 1);
    }

  }

  async function getPokemon(index) {
    setLoading(true)
    const response = await api.get(index + '/');
    const abilities = response.data.abilities.map(ability => ability.ability.name);
    setPokemon(
      {
        abilities: abilities,
        height: response.data.height,
        photoURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`,
        name: response.data.name,
        weight: response.data.weight,
      }
    )
    const stats = response.data.stats.map(stats => stats.base_stat);
    const separateStats = stats.toString().split(',', 6);
    setStatus({
      spd: separateStats[0],
      sdef: separateStats[1],
      satk: separateStats[2],
      def: separateStats[3],
      atk: separateStats[4],
      hp: separateStats[5]
    });
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${index}/`;
    await api.get(pokemonSpeciesUrl).then(res => {
      res.data.flavor_text_entries.some(flavor => {
        if (flavor.language.name === 'en') setDescription(flavor.flavor_text.replace(/\s/g, ' '));
      });
    });
    
    const types = response.data.types.map(type => type.type.name);
    const typesProps = response.data.types.map(type => {
      return ({
        type: type.type.name,
        color: TYPE_COLORS[type.type.name]
      })
    })
    const themeColor = `${TYPE_COLORS[types[0]]}`;
    setColor(themeColor);
    setTypes(typesProps);
  }


  useEffect(() => {
    getPokemon(pokemonIndex).then(() => setLoading(false));
  }, [pokemonIndex]);

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      {
        !loading ?        
        <>
          <View style={styles.header}>
            <View style={styles.headerTitle}>
              <Text style={styles.name}>{pokemon.name}</Text>
              <Text style={styles.index}>#{pokemonIndex}</Text>
            </View>
            <Image resizeMode="contain" source={{ uri: pokemon.photoURL }} style={styles.image} />
            <View style={styles.navigationArea}>
              <TouchableOpacity style={styles.button} onPress={() => {
                previousPokemon();
              }}>
                <Text style={styles.buttonText}>{'<'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => {
                nextPokemon();
              }}>
                <Text style={styles.buttonText}>{'>'}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.about}>
            <View style={styles.types}>
              {
                types && types.map((type, index) => {
                  return <Text key={index} style={[styles.type, { backgroundColor: type.color }]}>{type.type}</Text>
                })
              }
            </View>
            <Text style={[styles.aboutTitle, { color: color }]}>About</Text>
            <View style={styles.properties}>
              <View style={styles.weight}>
                <Text style={styles.propValue}>{`${pokemon.weight / 10}kg`}</Text>
                <Text style={styles.propName}>Weight</Text>
              </View>
              <View style={styles.height}>
                <Text style={styles.propValue}>{`${pokemon.height / 10}m`}</Text>
                <Text style={styles.propName}>Height</Text>
              </View>
              <View style={styles.moves}>
                <Text style={styles.propValue}>{pokemon.abilities[0]}</Text>
                <Text style={styles.propValue}>{pokemon.abilities[1]}</Text>
                <Text style={styles.propName}>Moves</Text>
              </View>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Text style={[styles.statusTitle, { color: color }]}>Base Stats</Text>
            <View style={styles.status}>
              <View style={styles.statusItem}>
                <Text style={[styles.itemTitle, { color: color }]}>HP</Text>
                <Text style={styles.itemValue}>{status.hp}</Text>
                <ProgressBar
                  progress={status.hp / 100}
                  color={color}
                  style={{ width: 200 }}
                />
              </View>
              <View style={styles.statusItem}>
                <Text style={[styles.itemTitle, { color: color }]}>ATK</Text>
                <Text style={styles.itemValue}>{status.atk}</Text>
                <ProgressBar
                  progress={status.atk / 100}
                  color={color}
                  style={{ width: 200 }}
                />
              </View>
              <View style={styles.statusItem}>
                <Text style={[styles.itemTitle, { color: color }]}>DEF</Text>
                <Text style={styles.itemValue}>{status.def}</Text>
                <ProgressBar
                  progress={status.def / 100}
                  color={color}
                  style={{ width: 200 }}
                />
              </View>
              <View style={styles.statusItem}>
                <Text style={[styles.itemTitle, { color: color }]}>SATK</Text>
                <Text style={styles.itemValue}>{status.satk}</Text>
                <ProgressBar
                  progress={status.satk / 100}
                  color={color}
                  style={{ width: 200 }}
                />
              </View>
              <View style={styles.statusItem}>
                <Text style={[styles.itemTitle, { color: color }]}>SDEF</Text>
                <Text style={styles.itemValue}>{status.sdef}</Text>
                <ProgressBar
                  progress={status.sdef / 100}
                  color={color}
                  style={{ width: 200 }}
                />
              </View>
              <View style={styles.statusItem}>
                <Text style={[styles.itemTitle, { color: color }]}>SPD</Text>
                <Text style={styles.itemValue}>{status.spd}</Text>
                <ProgressBar
                  progress={status.spd / 100}
                  color={color}
                  style={{ width: 200 }}
                />
              </View>
            </View>
          </View>
        </> : <ActivityIndicator color="#ee1515" size={60} />
      }

    </View >
  )
}