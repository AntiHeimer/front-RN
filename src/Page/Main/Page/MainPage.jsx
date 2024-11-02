import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import Graph from '../Component/Graph';
import {MainButtonBlack} from '../../../Utils/Component/MainButton';

import PostMoveDataFunction from '../Function/PostMoveDataFunction';
import PostActiveDataFunction from '../Function/PostActiveDataFunction';
import PostWalkDataFunction from '../Function/PostWalkDataFunction';
import PostSleepDataFunction from '../Function/PostSleepDataFunction';
import PostLocationBackgroundTask from '../../../Location/PostLocationBackgroundTask';
import GetGeoLocationFromDeviceFunction from '../../../Location/GetGeolocationFromDeviceFunction';

function MainPage({navigation}) {
  useEffect(() => {
    PostSleepDataFunction();
    PostActiveDataFunction();
    PostMoveDataFunction();
    PostWalkDataFunction();
    // PostLocationBackgroundTask();
    GetGeoLocationFromDeviceFunction();
  }, []);

  return (
    <View style={styles.container}>
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
