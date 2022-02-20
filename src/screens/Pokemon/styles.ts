import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/theme";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1,
    paddingTop: getStatusBarHeight() + 10
  },
  header: {
    paddingHorizontal: 24,
    flex: 2
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontFamily: theme.fonts.title700,
    color: '#fff',
    textTransform: 'capitalize'
  },
  index: {
    fontSize: 12,
    fontFamily: theme.fonts.title700,
    color: '#fff'
  },
  image: {
    flex: 1
  },
  navigationArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {

  },
  buttonText: {
    fontFamily: theme.fonts.text400,
    fontSize: 40
  },
  about: {
    backgroundColor: '#fff',
    flex: 3,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  types: {
    flexDirection: 'row',
  },
  type: {
    color: '#fff',
    fontFamily: theme.fonts.title700,
    fontSize: 12,
    textTransform: 'capitalize',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    paddingVertical: 5
  },
  aboutTitle: {
    fontFamily: theme.fonts.title700,
    fontSize: 14,
    marginTop: 16
  },
  properties: {
    flexDirection: 'row',
  },
  weight: {
    borderRightWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25
  },
  height: {
    borderRightWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25
  },
  moves: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25
  },
  propValue: {
    fontFamily: theme.fonts.text400,
    fontSize: 12,
    color: '#212121',
    textTransform: 'capitalize'
  },
  propName: {
    fontFamily: theme.fonts.text400,
    fontSize: 10,
    color: '#666'
  },
  description: {
    fontFamily: theme.fonts.text400,
    fontSize: 10,
    color: '#212121',
    paddingHorizontal: '10%',
    paddingTop: 20
  },
  status: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '80%'
  },
  statusTitle: {
    fontFamily: theme.fonts.title700,
    fontSize: 14,
    marginTop: 16,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  itemTitle: {
    fontFamily: theme.fonts.title700,
    fontSize: 10,
    paddingRight: 8
  },
  itemValue: {
    fontFamily: theme.fonts.text400,
    fontSize: 10,
    paddingHorizontal: 8
  }
})