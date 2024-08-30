import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import checkMark from '../../../Utils/Asset/checkmark.png';
import xMark from '../../../Utils/Asset/xmark.png';

import {
  MainMediumButtonBlack,
  MainMediumButtonGray,
} from '../../../Utils/Component/MainButton';

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
        <MainMediumButtonGray text="이전" />
        <MainMediumButtonBlack
          text="다음"
          onPress={() => navigation.navigate('Diagnosis Result')}
        />
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
    borderWidth: 0.2,
    width: 318,
    height: 202,
  },
  answerBox: {
    borderWidth: 0.2,
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
