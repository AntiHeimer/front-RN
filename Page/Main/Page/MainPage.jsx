import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import MainButton from '../../../Utils/Component/MainButton';
import Graph from '../Component/Graph';

import GetPermissionFunction from '../../Login/Function/GetPermissionFunction';

function MainPage({navigation}) {
  useEffect(() => {
    GetPermissionFunction();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.graphContainer}>
        <Graph />
      </View>
      <View style={styles.buttonDiv}>
        <MainButton
          text="진단하기"
          onPress={() => navigation.navigate('Diagnosis')}
        />
      </View>
      <View style={styles.buttonDiv}>
        <MainButton
          text="진단 결과 조회하기"
          onPress={() => navigation.navigate('Diagnosis Result Inquiry')}
        />
      </View>
    </View>
  );
}

export default MainPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
