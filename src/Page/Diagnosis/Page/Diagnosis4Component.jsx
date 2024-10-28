import {View, Text, StyleSheet, Image} from 'react-native';
import Pentagon from '../../../Utils/Asset/pentagons.png';
import InputSmall from '../Component/InputSmall';

/**
 * 오각형 문제
 *
 * @param {} param0
 * @returns
 */
function Diagnosis4Component({diagnosisSheet, score, setScore}) {
  return (
    <View>
      <View style={styles.outerBox}>
        <View style={styles.numberDiv}>
          <Text style={styles.number}>문제 {diagnosisSheet.number}</Text>
        </View>
        <View style={styles.questionBox}>
          <Text style={styles.questionText}>{diagnosisSheet.question}</Text>
          <View style={styles.imageBox}>
            <Image source={Pentagon} style={{height: 100, width: 110}} />
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

export default Diagnosis4Component;

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
    gap: 10,
  },
  scoreText: {
    fontSize: 15,
    marginTop: 9,
  },
  imageBox: {
    margin: 'auto',
  },
});
