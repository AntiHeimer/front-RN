import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MainSmallButtonGray from '../../../Utils/Component/MainSmallButtonGray';
import MainSmallButtonBlack from '../../../Utils/Component/MainSmallButtonBlack';

import checkMark from '../../../Utils/Asset/checkmark.png';
import xMark from '../../../Utils/Asset/xmark.png';

function DiagnosisPage({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.numberDiv}>
        <Text style={styles.number}>문제 1</Text>
      </View>
      <View style={styles.questionBox}></View>
      <View style={styles.numberDiv}>
        <Text style={styles.number}>정답</Text>
      </View>
      <View style={styles.answerBox}></View>
      <View style={styles.markButtonDiv}>
        <TouchableOpacity>
          <Image source={xMark} style={styles.markImg} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={checkMark} style={styles.markImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonDiv}>
        <MainSmallButtonGray text="이전" />
        <MainSmallButtonBlack text="다음" />
      </View>
    </View>
  );
}

export default DiagnosisPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: -100,
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
    borderWidth: 1,
    width: 318,
    height: 202,
  },
  answerBox: {
    borderWidth: 1,
    width: 318,
    height: 60,
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
  buttonDiv: {
    width: 330,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 50,
  },
});
