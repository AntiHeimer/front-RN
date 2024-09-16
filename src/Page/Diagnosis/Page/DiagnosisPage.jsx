import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {
  MainMediumButtonBlack,
  MainMediumButtonGray,
} from '../../../Utils/Component/MainButton';
import {ConfirmAlert} from '../../../Utils/Component/CustomAlert';

import Diagnosis1Component from './Diagnosis1Component';
import Diagnosis2Component from './Diagnosis2Component';
import Diagnosis3Component from './Diagnosis3Component';

import GetDiagnosisSheet from '../Function/GetDiagnosisSheet';

function DiagnosisPage({navigation}) {
  const [diagnosisSheet, setDiagnosisSheet] = useState(null);
  const [num, setNum] = useState(1);

  async function getDiagnosisSheet() {
    const result = await GetDiagnosisSheet({num: num});
    if (result.statusCode === '200') {
      setDiagnosisSheet(result.diagnosisSheet);
      return;
    }

    ConfirmAlert({
      title: '진단지 로드 실패',
      message: '진단지 로드에 실패하였습니다.',
      onPress: () => {},
    });
  }

  function getPrevDiagnosisSheet() {
    if (num >= 2) {
      setNum(prev => prev - 1);
    }
  }

  function getNextDiagnosisSheet() {
    if (num < 11) {
      setNum(prev => prev + 1);
    } else {
      navigation.navigate('Diagnosis Result');
      setNum(1);
    }
  }

  useEffect(() => {
    getDiagnosisSheet();
  }, [num]);

  if (diagnosisSheet) {
    return (
      <View style={styles.container}>
        <Diagnosis1Component diagnosisSheet={diagnosisSheet} />

        <View style={styles.buttonDiv}>
          <MainMediumButtonGray
            text="이전"
            onPress={() => getPrevDiagnosisSheet()}
          />
          <MainMediumButtonBlack
            text="다음"
            onPress={() => getNextDiagnosisSheet()}
          />
        </View>
      </View>
    );
  }
}

export default DiagnosisPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  buttonDiv: {
    width: 330,
    // height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
