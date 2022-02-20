import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1
  },
  index: {
    fontFamily: theme.fonts.text400,
    fontSize: 14,
    textAlign: 'right'
  },
  imgContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  },
  name: {
    fontFamily: theme.fonts.title700,
    fontSize: 14,
    textTransform: 'capitalize',
    textAlign: 'center'
  },
});