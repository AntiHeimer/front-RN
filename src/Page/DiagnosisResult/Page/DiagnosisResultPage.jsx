import {StyleSheet, Text, View} from 'react-native';

import Table from '../Component/Table';
import {MainButtonBlack} from '../../../Utils/Component/MainButton';

function DiagnosisResultPage({navigation, route}) {
  const {result} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultTitle}>
          {result.aiResDto.memberName}님의 진단 결과
        </Text>
        <Text style={styles.resultSubTitle}>현재 치매 위험도는</Text>
        <Text style={styles.resultHighlight}>
          {result.aiResDto.result.stage}단계 입니다
        </Text>
        <Text style={styles.explanation}>
          {result.aiResDto.result.explanation}
        </Text>
      </View>
      <Table />
      <View style={styles.buttonDiv}>
        <MainButtonBlack
          text="홈으로"
          onPress={() => navigation.navigate('Main')}
        />
        <MainButtonBlack
          text="치매 센터 알아보기"
          onPress={() => {
            navigation.navigate('DementiaCenter');
          }}
        />
      </View>
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
    marginTop: -50,
  },
  resultContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  resultTitle: {
    fontSize: 18,
    marginBottom: 30,
  },
  resultSubTitle: {
    fontSize: 24,
    marginBottom: 5,
  },
  resultHighlight: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  explanation: {
    marginTop: 10,
    width: 230,
    textAlign: 'center',
  },
  buttonDiv: {
    marginTop: -30,
    gap: 10,
  },
});
