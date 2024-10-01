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
import GetRandomWordFunction from '../Function/GetRandomWordFunction';

function DiagnosisPage({navigation}) {
  const [diagnosisSheet, setDiagnosisSheet] = useState(null);
  const [randomWords, setRandomWords] = useState(null);
  const [isRandomWordsLoaded, setIsRandomWordsLoaded] = useState(false);
  const [num, setNum] = useState(1);
  const [diagnosisAnswer, setDianosisAnswer] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
    11: null,
  });

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

    return;
  }

  async function getRandomWords() {
    const result = await GetRandomWordFunction();

    if (result.statusCode === '200') {
      setRandomWords(result.randomWords);
      setIsRandomWordsLoaded(true);
      return;
    }

    ConfirmAlert({
      title: '단어 로드 실패',
      message: '단어 로드에 실패하였습니다.',
      onPress: () => {},
    });

    return;
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
      console.log(diagnosisAnswer);
      // navigation.navigate('Diagnosis Result');
      // setNum(1);
    }
  }

  function handleScoreUpdate(num, score) {
    setDianosisAnswer(prev => ({...prev, [num]: score}));
  }

  useEffect(() => {
    if (!isRandomWordsLoaded) {
      getRandomWords();
    }
  }, []);

  useEffect(() => {
    getDiagnosisSheet();
  }, [num]);

  useEffect(() => {
    console.log(diagnosisAnswer);
  }, [diagnosisAnswer]);

  if (diagnosisSheet && randomWords) {
    return (
      <View style={styles.container}>
        {num == 2 ? (
          <Diagnosis2Component
            num={num}
            diagnosisSheet={diagnosisSheet}
            setScore={score => handleScoreUpdate(num, score)}
            setDianosisAnswer={setDianosisAnswer}
          />
        ) : num == 4 ? (
          <Diagnosis3Component
            num={num}
            diagnosisSheet={diagnosisSheet}
            setScore={score => handleScoreUpdate(num, score)}
            setDianosisAnswer={setDianosisAnswer}
          />
        ) : (
          <Diagnosis1Component
            diagnosisSheet={diagnosisSheet}
            randomWords={randomWords}
            setScore={score => handleScoreUpdate(num, score)}
            score={diagnosisAnswer[num]}
            num={num}
          />
        )}

        <View style={styles.buttonDiv}>
          <MainMediumButtonGray
            text="이전"
            onPress={() => getPrevDiagnosisSheet()}
          />
          <MainMediumButtonBlack
            text={num == 11 ? '제출하기' : '다음'}
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
