import { StyleSheet, Dimensions } from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;

const Styles = StyleSheet.create({
  qrReader: {
    width: 393,
    height: 100,
    alignSelf: 'center',
    margin: 60,
    flexDirection: 'column',
    //padding: 60,
  },
  centerText: {
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  container: {
    flex: 1,
    backgroundColor: '#f37272',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    marginBottom: 100,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#ffffff',
  },
  inputWrapper: {
    flex: 1,
    marginTop: 350,
  },
});

export default Styles;
