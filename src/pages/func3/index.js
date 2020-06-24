import React, { useEffect, useState } from 'react';
import { Text, PermissionsAndroid, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-google-maps-directions';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './styles';
import { Marker } from 'react-native-maps';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Func3() {
  const [region, setRegion] = useState();
  const [marker, setMarker] = useState();
  const [mostrarRota, setMostrarRota] = useState(false);
  const [mostrarMapa, setMostrarMapa] = useState(false);

  const unipam = {
    latitude: -18.5746713,
    longitude: -46.5142797,
  };

  //retirada a chave pra commit
  const apikey = '';

  useEffect(() => {
    async function fetchData() {
      await lerCoordenadas();
    }
    fetchData();
  }, []);

  async function lerCoordenadas() {
    const permite = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (permite) {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          console.log(position);

          const regionFetch = {
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031,
          };

          const markerFetch = {
            latitude: latitude,
            longitude: longitude,
          };

          setRegion(regionFetch);
          setMarker(markerFetch);
          console.log(region);
          console.log(marker);

          setMostrarMapa(true);
        },
        (error) => {
          console.log(error.code, error.message);
        },
        {
          timeout: 10000,
          enableHighAccuracy: true,
          maximumAge: 10000,
        },
      );
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setMostrarRota(true);
          }}>
          <Icon name="room" size={40} color={'#000000'} />
        </TouchableOpacity>
      </View>

      {mostrarMapa && (
        <MapView style={styles.map} loadingEnabled={true} region={region}>
          <Marker coordinate={region}></Marker>
          {mostrarRota && (
            <MapViewDirections
              origin={region}
              destination={unipam}
              apikey={apikey}
            />
          )}
        </MapView>
      )}
    </View>
  );
}

export default Func3;

// unipam
//@-18.5746675,-46.5159212,17
