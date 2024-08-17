import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import DropDown from './DropDown';
import GetGeoLocationFunction from '../../../Utils/Function/GetGeolocationFunction';
import MapView, {Marker} from 'react-native-maps';

function Map() {
  const [location, setLocation] = useState(null);

  async function getGeoLocationFunction() {
    const res = await GetGeoLocationFunction();
    setLocation(res);
  }

  useEffect(() => {
    getGeoLocationFunction();
  }, []);

  return (
    <View>
      <Text style={styles.description}>피보호자 위치 추적</Text>
      <DropDown />

      <View style={styles.map}>
        {location && (
          <>
            <MapView
              style={{flex: 1}}
              initialRegion={{
                latitude: location.location.latitude,
                longitude: location.location.longitude,
                latitudeDelta: 0.0522,
                longitudeDelta: 0.0121,
              }}>
              <Marker
                coordinate={location.location}
                title={'기록된 시간: ' + location.formattedDate}
              />
            </MapView>
          </>
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
    marginTop: 12,
  },
});
