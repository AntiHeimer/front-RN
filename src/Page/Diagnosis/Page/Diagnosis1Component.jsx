import {View, Text, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import InputSmall from '../Component/InputSmall';

/**
 * score 기입 문제
 *
 * @param {} param0
 * @returns
 */
function Diagnosis1Component({
  diagnosisSheet,
  randomWords,
  num,
  score,
  setScore,
}) {
  return (
    // <KeyboardAwareScrollView
    //   style={{flex: 1}}
    //   KeyboardAwareScrollView
    //   extraScrollHeight={20} // 추가로 스크롤 되는 높이
    //   enableOnAndroid={true} // 안드로이드에서도 적용
    // >
    <View>
      <View style={styles.outerBox}>
        <View style={styles.numberDiv}>
          <Text style={styles.number}>문제 {diagnosisSheet.number}</Text>
        </View>
        <View style={styles.questionBox}>
          <Text style={styles.questionText}>{diagnosisSheet.question}</Text>
          <View style={styles.randomWords}>
            {(num === 1 || num === 11) &&
              randomWords.map((word, index) => {
                return <Text key={index}>{word}</Text>;
              })}
          </View>
        </View>

        <View style={styles.numberDiv}>
          <Text style={styles.number}>메뉴얼</Text>
        </View>
        <View style={styles.menualBox}>
          <Text style={styles.menualText}>{diagnosisSheet.direction}</Text>
        </View>

        <View style={styles.numberDiv}>
          <Text style={styles.number}>점수</Text>
        </View>
        <View style={styles.answerBox}>
          <InputSmall placeholder="" value={score} onChange={setScore} />
          <Text style={styles.scoreText}>
            {`/ ${diagnosisSheet.point}점  (가산한 점수를 입력하여주세요)`}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Diagnosis1Component;

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
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    gap: 10,
  },
  scoreText: {
    fontSize: 15,
    marginTop: 9,
  },
  randomWords: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
});
