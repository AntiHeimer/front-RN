import {StyleSheet, Text, View} from 'react-native';
import MainButton from '../../../Utils/Component/MainButton';

function MainPage({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.graphContainer}></View>
      <View style={styles.buttonDiv}>
        <MainButton
          text="진단하기"
          onPress={() => navigation.navigate('진단하기')}
        />
      </View>
      <View style={styles.buttonDiv}>
        <MainButton
          text="진단 결과 조회하기"
          onPress={() => navigation.navigate('진단 결과 조회')}
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
    borderWidth: 1,
    width: 310,
    height: 350,
    marginBottom: 22,
  },
  buttonDiv: {
    marginBottom: 17,
  },
});
