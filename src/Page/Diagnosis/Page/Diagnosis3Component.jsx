import {useState} from 'react';

import {View, Text, StyleSheet} from 'react-native';

/**
 * 암산 문제
 *
 * @param {} param0
 * @returns
 */

function Diagnosis3Component({diagnosisSheet}) {
  // useState로 calcArray 상태 선언
  const [calcArray, setCalcArray] = useState([0, 0, 0, 0, 0]);

  // 배열의 특정 인덱스 값을 업데이트하는 함수
  const updateArrayValue = (index, newValue) => {
    // 새로운 배열 생성
    const newArray = [...calcArray];
    newArray[index] = newValue;
    setCalcArray(newArray);
  };

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
        <Text>{diagnosisSheet.answer}</Text>
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
  },
});
