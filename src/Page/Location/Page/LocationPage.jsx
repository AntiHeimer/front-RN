import {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, RefreshControl} from 'react-native';

import {ConfirmAlert} from '../../../Utils/Component/CustomAlert';

import RegisterButton from '../Component/RegisterButton';
import Map from '../Component/Map';

import GetGeoLocationFromDeviceFunction from '../../../Location/GetGeolocationFromDeviceFunction';
import GetWardsFunction from '../../Account/Function/GetWardsFunction';
import PostGeolocationFunction from '../Function/PostGeolocationFunction';
import GetRecentLocationFunction from '../Function/GetRecentLocationFunction';

function LocationPage({navigation}) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [location, setLocation] = useState(null);
  const [wardList, setWardList] = useState(null);

  async function getGeoLocationFromDeviceFunction() {
    const res = await GetGeoLocationFromDeviceFunction();

    setLocation(res);
  }

  async function getRecentLocationFunction() {
    const result = await GetRecentLocationFunction();
  }

  async function handleRefresh() {
    setIsRefreshing(true);
    getGeoLocationFromDeviceFunction();
    setIsRefreshing(false);
  }

  async function GetWardList() {
    const result = await GetWardsFunction();
    if (result.statusCode == '200') {
      const data = result.infoWardDtoList;

      const transformedData = data.map(({memberUuid, name}) => ({
        value: memberUuid,
        label: name,
      }));

      setWardList(transformedData);
      return;
    }

    ConfirmAlert({
      title: '피보호자 정보 로드 실패',
      message: '피보호자 정보를\n불러오는데 실패하였습니다.',
      onPress: () => {},
    });

    return;
  }

  useEffect(() => {
    getGeoLocationFromDeviceFunction();
    getRecentLocationFunction();
    GetWardList();
  }, []);

  useEffect(() => {
    if (location) {
      PostGeolocationFunction({location: location});
    }
  }, [location]);

  return (
    <View style={styles.container}>
      <FlatList
        data={wardList}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        ListHeaderComponent={
          <View style={styles.subContainer}>
            <RegisterButton navigation={navigation} />
            <Map location={location} wardList={wardList} />
          </View>
        }
        renderItem={null}
      />
    </View>
  );
}

export default LocationPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  subContainer: {
    alignItems: 'center',
    paddingTop: 30,
  },
});
