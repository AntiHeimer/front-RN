import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import xMark from '../../../Utils/Asset/xmark.png';
import checkMark from '../../../Utils/Asset/checkmark.png';

function Diagnosis1Component({diagnosisSheet}) {
  return (
    <View>
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
        <Text>{diagnosisSheet.direction}</Text>
      </View>

      <View style={styles.numberDiv}>
        <Text style={styles.number}>정답</Text>
      </View>
      <View style={styles.answerBox}>
        <Text>{diagnosisSheet.answer}</Text>
      </View>

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
    padding: 20,
  },
  questionText: {
    width: 278,
    flexWrap: 'wrap',
  },
  menualBox: {
    borderWidth: 0.2,
    width: 318,
    padding: 20,
  },
  answerBox: {
    width: 318,
    borderWidth: 0.2,
  },
  markButtonDiv: {
    width: 308,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    marginBottom: 30,
  },
  markImg: {
    width: 40,
    height: 40,
  },
});
