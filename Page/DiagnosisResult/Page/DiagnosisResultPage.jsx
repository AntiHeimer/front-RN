import {StyleSheet, Text, View} from 'react-native';
import MainButton from '../../../Utils/Component/MainButton';
import Table from '../Component/Table';

function DiagnosisResultPage({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultTitle}>강민숙 님의 진단 결과</Text>
        <Text style={styles.resultSubTitle}>현재 치매 위험도는</Text>
        <Text style={styles.resultHighlight}>3단계 입니다</Text>
      </View>
      <Table />
      <MainButton text="홈으로" />
    </View>
  );
}

export default DiagnosisResultPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: -100,
  },
  resultContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultSubTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  resultHighlight: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
});
