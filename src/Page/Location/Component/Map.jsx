import {useEffect, useRef} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import DropDown from './DropDown';

function Map({location, wardList}) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (location && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: location.location.latitude,
          longitude: location.location.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        },
        1,
      );
    }
  }, [location]);

  return (
    <View>
      <Text style={styles.description}>피보호자 위치 추적</Text>
      <DropDown wardList={wardList} />
      <View style={styles.map}>
        {location && (
          <MapView
            ref={mapRef}
            style={{flex: 1}}
            initialRegion={{
              latitude: location.location.latitude,
              longitude: location.location.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              coordinate={location.location}
              title={'기록된 시간: ' + location.formattedDate}
            />
          </MapView>
        )}
      </View>
    </View>
  );
}

export default Map;

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    marginTop: 35,
    marginBottom: 10,
    textAlign: 'center',
  },
  dropdown: {
    width: 308,
    height: 55,
    borderWidth: 0.2,
  },
  map: {
    width: 308,
    height: 315,
    borderWidth: 0.2,
    marginTop: -30,
  },
});
