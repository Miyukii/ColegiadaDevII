import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  photo: {
    width: 350,
    height: 300,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#f37272',
  },
  buttons: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 150,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTexto: {
    margin: 25,
  },
  texto: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
  },
});

export default Styles;
