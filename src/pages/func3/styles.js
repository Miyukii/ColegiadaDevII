import { StyleSheet } from 'react-native';
const Styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttonContainer: {
    flex: 1,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    zIndex: 99,
  },
  button: {
    backgroundColor: 'red',
    margin: 20,
    borderRadius: 150,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Styles;
