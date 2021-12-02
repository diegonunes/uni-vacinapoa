import React, { useEffect, useState } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { Address, Container, Doses, MarkerContainer, Phone, Schedule, Title } from './styles';
import * as Location from 'expo-location';
import { FontAwesome5 } from '@expo/vector-icons';
import api from '../../services/api';

const Locals = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [postos, setPostos] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão para acessar localização foi negada');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();

    async function getPostos() {
      const response = await api.get('61a815750ddbee6f8b159981/2');
      setPostos(response.data);
    }
    getPostos();
  }, []);

  const Map = () => {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        loadingEnabled
        showsUserLocation
      >
        {postos.length > 0 &&
          postos.map((posto) => {
            return (
              <Marker
                coordinate={posto.coordinate}
                key={Math.random().toString()}
                title={posto.title}
                description={posto.description}
              >
                <FontAwesome5 name='syringe' size={30} color='#017374' />
                <Callout>
                  <MarkerContainer>
                    <Title>{posto.title}</Title>
                    <Address>{posto.address}</Address>
                    <Phone>{posto.phone}</Phone>
                    <Schedule>{posto.schedule}</Schedule>
                    <Doses>Disponível: {posto.doses}</Doses>
                  </MarkerContainer>
                </Callout>
              </Marker>
            );
          })}
      </MapView>
    );
  };

  return <Container>{location !== null ? Map() : null}</Container>;
};

export default Locals;
