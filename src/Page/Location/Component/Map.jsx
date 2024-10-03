import {useEffect, useRef, useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import DropDown from './DropDown';
import GetRecentLocationFunction from '../Function/GetRecentLocationFunction';
import {ConfirmAlert} from '../../../Utils/Component/CustomAlert';

function Map({location, setLocation, wardList, setWardList}) {
  const mapRef = useRef(null);
  const [selectedUser, setSelectedUser] = useState(null);

  async function getRecentLocationFunction({memberUuid}) {
    const result = await GetRecentLocationFunction({memberUuid: memberUuid});

    if (result.statusCode === '200') {
      setLocation({
        formattedDate: result.date,
        location: result.location,
        memberUuid: memberUuid,
      });
      return;
    }

    if (result.statusCode === '432') {
      ConfirmAlert({
        title: '위치 정보 로드 실패',
        message: '위치 정보가 존재하지 않습니다',
        onPress: () => {},
      });

      return;
    }
  }

  useEffect(() => {
    if (selectedUser) {
      getRecentLocationFunction({memberUuid: selectedUser});
    }
  }, [selectedUser]);

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
      <DropDown
        wardList={wardList}
        setWardList={setWardList}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
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
