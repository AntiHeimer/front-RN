import {useEffect, useState} from 'react';

import {View, Text, StyleSheet} from 'react-native';
import InputSmall from '../Component/InputSmall';

/**
 * 암산 문제
 *
 * @param {} param0
 * @returns
 */

function Diagnosis3Component({num, diagnosisSheet, setDianosisAnswer}) {
  // useState로 calcArray 상태 선언
  const [calcArray, setCalcArray] = useState(['', '', '', '', '']);

  // 배열의 특정 인덱스 값을 업데이트하는 함수
  const updateArrayValue = (index, newValue) => {
    // 새로운 배열 생성
    const newArray = [...calcArray];
    newArray[index] = newValue;
    setCalcArray(newArray);
  };

  useEffect(() => {
    setDianosisAnswer(prev => ({...prev, [num]: calcArray}));
  }, [calcArray]);

  return (
    <View style={styles.outerBox}>
      <View style={styles.numberDiv}>
        <Text style={styles.number}>문제 {diagnosisSheet.number}</Text>
      </View>
      <View style={styles.questionBox}>
        <Text style={styles.questionText}>{diagnosisSheet.question}</Text>
      </View>
      <View style={styles.numberDiv}>
        <Text style={styles.number}>메뉴얼</Text>
      </View>
      <View style={styles.menualBox}>
        <Text style={styles.menualText}>{diagnosisSheet.direction}</Text>
      </View>
      <View style={styles.numberDiv}>
        <Text style={styles.number}>정답</Text>
      </View>
      <View style={styles.answerBox}>
        <View style={styles.row}>
          <Text style={styles.answerText}>100 - 7 = </Text>
          <InputSmall
            placeholder=""
            value={calcArray[0].toString()}
            onChange={value => updateArrayValue(0, value)}
          />

          <Text style={styles.answerText}> - 7 = </Text>
          <InputSmall
            placeholder=""
            value={calcArray[1].toString()}
            onChange={value => updateArrayValue(1, value)}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.answerText}> - 7 = </Text>
          <InputSmall
            placeholder=""
            value={calcArray[2].toString()}
            onChange={value => updateArrayValue(2, value)}
          />

          <Text style={styles.answerText}> - 7 = </Text>
          <InputSmall
            placeholder=""
            value={calcArray[3].toString()}
            onChange={value => updateArrayValue(3, value)}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.answerText}> - 7 = </Text>
          <InputSmall
            placeholder=""
            value={calcArray[4].toString()}
            onChange={value => updateArrayValue(4, value)}
          />
        </View>
      </View>
    </View>
  );
}

export default Diagnosis3Component;

const styles = StyleSheet.create({
  outerBox: {
    height: 500,
  },
  numberDiv: {
    width: 318,
    height: 32,
    marginTop: 20,
  },
  number: {
    fontSize: 20,
  },
  questionBox: {
    borderWidth: 0.2,
    width: 318,
    padding: 20,
  },
  questionText: {
    width: 278,
    flexWrap: 'wrap',
    lineHeight: 20,
  },
  menualBox: {
    borderWidth: 0.2,
    width: 318,
    padding: 20,
  },
  menualText: {
    lineHeight: 20,
  },
  answerBox: {
    width: 318,
    height: 200,
    display: 'flex',
    padding: 10,
  },
  answerText: {
    fontSize: 15,
    marginTop: 5,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
});
