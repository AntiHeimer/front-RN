import {useEffect, useState} from 'react';
import {StyleSheet, View, RefreshControl, ScrollView} from 'react-native';
import moment from 'moment';

import Graph from '../Component/Graph';
import {MainButtonBlack} from '../../../Utils/Component/MainButton';

import GetGeoLocationFunction from '../../Location/Function/GetGeolocationFunction';
import GetLatestHealthDateFunction from '../Function/GetLatestHealthDateFunction';
import HealthKitService from '../../../Utils/Function/Health/HealthkitService';
import PostActiveFunction from '../../../Utils/Function/Health/PostActiveFunction';
import PostMoveFunction from '../../../Utils/Function/Health/PostMoveFunction';

function MainPage({navigation}) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  async function handleRefresh() {
    setIsRefreshing(true);
    // GetGeoLocationFunction();
    // GetLatestHealthDate();
    GetLatestHealthDate();
    setIsRefreshing(false);
  }

  async function GetLatestHealthDate() {
    const yesterday = moment().subtract(1, 'days');
    const formattedDate = yesterday.format('YYYY-MM-DD');

    const latestActiveDate = await GetLatestHealthDateFunction({
      data: 'active',
    });
    // if (latestActiveDate.statusCode == '200') {
    //   if (latestActiveDate.date != formattedDate) {
    //     const result = await PostActiveFunction({
    //       startDate: latestActiveDate.date,
    //       endDate: formattedDate,
    //     });
    //   }
    // }

    const latestMoveDate = await GetLatestHealthDateFunction({data: 'move'});
    // if (latestMoveDate.statusCode == '200') {
    //   if (latestMoveDate.date != formattedDate) {
    //     const result = await PostMoveFunction({
    //       startDate: latestActiveDate.date,
    //       endDate: formattedDate,
    //     });
    //   }
    // }

    const latestSleepDate = await GetLatestHealthDateFunction({data: 'sleep'});
    // if (latestSleepDate.statusCode == '200') {
    //   if (latestSleepDate.date != formattedDate) {
    //     // postsleepfunction
    //   }
    // }
  }

  useEffect(() => {
    // GetGeoLocationFunction();
    // GetLatestHealthDate();
    GetLatestHealthDate();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        style={styles.scrollViewContent}>
        <View style={styles.subContainer}>
          <View style={styles.graphContainer}>
            <Graph />
          </View>
          <View style={styles.buttonDiv}>
            <MainButtonBlack
              text="진단하기"
              onPress={() => navigation.navigate('Diagnosis')}
            />
          </View>
          <View style={styles.buttonDiv}>
            <MainButtonBlack
              text="진단 결과조회하기"
              onPress={() => navigation.navigate('Diagnosis Result Inquiry')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default MainPage;

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
    paddingTop: 70,
  },
  graphContainer: {
    width: 310,
    height: 350,
    marginBottom: 22,
  },
  buttonDiv: {
    marginBottom: 17,
  },
});
