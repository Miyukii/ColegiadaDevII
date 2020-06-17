import React from 'react';
import {View, Text} from 'react-native';
import Wallpaper from '../../components/wallpaper';
import back from '../../assets/back.jpg';
import Styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Main({navigation}) {
  function navegar(pagina) {
    switch (pagina) {
      case 1:
        navigation.navigate('Func1');
        break;
      case 2:
        navigation.navigate('Func1');
        break;
      case 3:
        navigation.navigate('Func1');
        break;
    }
  }

  return (
    <Wallpaper
      image={back}
      children={
        <>
          <View style={Styles.container}>
            <View style={Styles.containerButton}>
              <TouchableOpacity
                style={Styles.button}
                onPress={() => navegar(1)}>
                <Text style={Styles.text}>Funcionalidade 1</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.containerButton}>
              <TouchableOpacity
                style={Styles.button}
                onPress={() => navegar(2)}>
                <Text style={Styles.text}>Funcionalidade 2</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.containerButton}>
              <TouchableOpacity
                style={Styles.button}
                onPress={() => navegar(3)}>
                <Text style={Styles.text}>Funcionalidade 3</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      }
    />
  );
}

export default Main;
