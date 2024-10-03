import {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, RefreshControl} from 'react-native';

import {ConfirmAlert} from '../../../Utils/Component/CustomAlert';
import {Storage} from '../../../Utils/Function/Storage';

import RegisterButton from '../Component/RegisterButton';
import Map from '../Component/Map';

import GetGeoLocationFromDeviceFunction from '../../../Location/GetGeolocationFromDeviceFunction';
import GetWardsFunction from '../../Account/Function/GetWardsFunction';
import PostGeolocationFunction from '../Function/PostGeolocationFunction';

function LocationPage({navigation}) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [location, setLocation] = useState(null);
  const [wardList, setWardList] = useState(null);

  async function getGeoLocationFromDeviceFunction() {
    const res = await GetGeoLocationFromDeviceFunction();

    setLocation(res);
  }

  async function handleRefresh() {
    setIsRefreshing(true);
    getGeoLocationFromDeviceFunction();
    setIsRefreshing(false);
  }

  async function GetWardList() {
    const result = await GetWardsFunction();
    const userState = await Storage.getItem('userState');
    const uuid = userState.uuid;

    if (result.statusCode == '200') {
      const data = result.infoWardDtoList;

      const transformedData = data.map(({memberUuid, name}) => ({
        value: memberUuid,
        label: name,
      }));

      setWardList(transformedData);

      const userData = {
        value: uuid,
        label: '본인',
      };

      setWardList([userData, ...transformedData]);

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
    GetWardList();
  }, []);

  console.log(wardList);
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
            <Map
              location={location}
              setLocation={setLocation}
              wardList={wardList}
              setWardList={setWardList}
            />
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
