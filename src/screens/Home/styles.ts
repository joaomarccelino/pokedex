import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ee1515",
    flex: 1,
    paddingTop: getStatusBarHeight() + 20,
  },
  header: {
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#f0f0f0'
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    backgroundColor: "#ee1515",
    color: '#f0f0f0',
    textAlign: 'center'
  },
  search: {
    borderWidth: 1,
    padding: 5,
    width: '80%',
    borderRadius: 5,
  },
  navigationArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%'
  },
  button: {

  },
  buttonText: {
    fontFamily: theme.fonts.text400,
    fontSize: 40
  },
  pageNumber: {
    fontFamily: theme.fonts.title700,
    fontSize: 16
  },
  pokemons: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  }
});