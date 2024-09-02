import {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView, RefreshControl} from 'react-native';

import {ConfirmAlert} from '../../../Utils/Component/CustomAlert';

import RegisterButton from '../Component/RegisterButton';
import Map from '../Component/Map';

import GetGeoLocationFromDeviceFunction from '../../../Location/GetGeolocationFromDeviceFunction';
import GetWardsFunction from '../../Account/Function/GetWardsFunction';
import PostGeolocationFunction from '../Function/PostGeolocationFunction';

function LocationPage({navigation}) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [location, setLocation] = useState(null);
  const [wardsList, setWardsList] = useState(null);

  async function getGeoLocationFromDeviceFunction() {
    const res = await GetGeoLocationFromDeviceFunction();
    setLocation(res);
  }

  async function handleRefresh() {
    setIsRefreshing(true);
    getGeoLocationFromDeviceFunction();
    // PostGeolocationFunction({location: location});
    setIsRefreshing(false);
  }

  async function GetWardsList() {
    const result = await GetWardsFunction();
    if (result.statusCode == '200') {
      setWardsList(result.ward);
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
    // GetWardsList();
  }, []);

  // useEffect(() => {
  //   if (location) {
  //     PostGeolocationFunction({location: location});
  //   }
  // }, [location]);

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        style={styles.scrollViewContent}>
        <View style={styles.subContainer}>
          <RegisterButton navigation={navigation} />
          <Map location={location} wardList={wardsList} />
        </View>
      </ScrollView>
    </View>
  );
}

export default LocationPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    alignItems: 'center',
    paddingTop: 30,
  },
});
