import {useEffect, useState} from 'react';
import {StyleSheet, View, RefreshControl, ScrollView} from 'react-native';

import Graph from '../Component/Graph';
import {MainButtonBlack} from '../../../Utils/Component/MainButton';

import GetGeoLocationFunction from '../../../Utils/Function/GetGeolocationFunction';
import PostActiveFunction from '../../../Utils/Function/Health/PostActiveFunction';
import PostMoveFunction from '../../../Utils/Function/Health/PostMoveFunction';
import PostWalkFunction from '../../../Utils/Function/Health/PostWalkFunction';

function MainPage({navigation}) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  async function handleRefresh() {
    setIsRefreshing(true);
    GetGeoLocationFunction();
    setIsRefreshing(false);
  }

  useEffect(() => {
    GetGeoLocationFunction();

    // PostActiveFunction();
    // PostMoveFunction();
    // PostWalkFunction();
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
