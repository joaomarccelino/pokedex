import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent />
      <Routes /> 
    </>
  );
}
