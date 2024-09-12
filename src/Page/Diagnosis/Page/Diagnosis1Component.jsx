import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import xMark from '../../../Utils/Asset/xmark.png';
import checkMark from '../../../Utils/Asset/checkmark.png';

/**
 * score return 문제
 *
 * @param {} param0
 * @returns
 */

function Diagnosis1Component({diagnosisSheet}) {
  return (
    <View>
      <View style={styles.numberDiv}>
        <Text style={styles.number}>문제 {diagnosisSheet.number}</Text>
      </View>
      <View style={styles.questionBox}>{diagnosisSheet.question}</View>

      <View style={styles.numberDiv}>
        <Text style={styles.number}>메뉴얼</Text>
      </View>
      <View style={styles.menualBox}>{diagnosisSheet.direction}</View>

      <View style={styles.numberDiv}>
        <Text style={styles.number}>정답</Text>
      </View>
      <View style={styles.answerBox}>{diagnosisSheet.answer}</View>

      <View style={styles.markButtonDiv}>
        <TouchableOpacity>
          <Image source={xMark} style={styles.markImg} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={checkMark} style={styles.markImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Diagnosis1Component;

const styles = StyleSheet.create({
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
    height: 80,
  },
  menualBox: {
    borderWidth: 0.2,
    width: 318,
    height: 60,
  },
  answerBox: {
    width: 318,
    height: 200,
  },
  markButtonDiv: {
    width: 308,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  markImg: {
    width: 40,
    height: 40,
  },
});
