import {useState} from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import InputSmall from './InputSmall';
import InputMedium from './InputMedium';

/**
 * 날짜 문제
 *
 * @param {} param0
 * @returns
 */

function Diagnosis2Component({number}) {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  const [dayOfTheWeek, setDayOfTheWeek] = useState(null);
  const [season, setSeason] = useState(null);

  function DayOfTheWeekButtonRender() {
    const buttons = ['월', '화', '수', '목', '금', '토', '일'];

    const handleButtonPress = index => {
      setDayOfTheWeek(index);
    };

    return (
      <View style={styles.inputDiv}>
        {buttons.map((buttonLabel, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              dayOfTheWeek === index && styles.selectedButton,
            ]}
            onPress={() => handleButtonPress(index)}>
            <Text
              style={[
                styles.buttonText,
                dayOfTheWeek === index && styles.selectedButtonText,
              ]}>
              {buttonLabel}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  function SeasonButtonRender() {
    const buttons = ['봄', '여름', '가을', '겨울'];

    const handleButtonPress = index => {
      setSeason(index);
    };

    return (
      <View style={styles.inputDiv}>
        {buttons.map((buttonLabel, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, season === index && styles.selectedButton]}
            onPress={() => handleButtonPress(index)}>
            <Text
              style={[
                styles.seasonButtonText,
                season === index && styles.selectedButtonText,
              ]}>
              {buttonLabel}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  return (
    <View>
      <View style={styles.numberDiv}>
        <Text style={styles.number}>문제 1</Text>
      </View>
      <View style={styles.questionBox}>
        <Text>오늘 날짜를 입력해주세요</Text>
      </View>

      <View style={styles.numberDiv}>
        <Text style={styles.number}>메뉴얼</Text>
      </View>
      <View style={styles.menualBox}>
        <Text>오늘 날짜를 입력해주세요</Text>
      </View>

      <View style={styles.numberDiv}>
        <Text style={styles.number}>정답</Text>
      </View>
      <View style={styles.answerBox}>
        <View style={styles.inputDiv}>
          <View style={styles.inputInnerDiv}>
            <InputMedium
              placeholder=""
              value={year}
              onChange={setYear}
              security={false}
            />
            <Text style={styles.answerBoxText}>년</Text>
          </View>
          <View style={styles.inputInnerDiv}>
            <InputSmall
              placeholder=""
              value={month}
              onChange={setMonth}
              security={false}
            />
            <Text style={styles.answerBoxText}>월</Text>
          </View>
          <View style={styles.inputInnerDiv}>
            <InputSmall
              placeholder=""
              value={date}
              onChange={setDate}
              security={false}
            />
            <Text style={styles.answerBoxText}>일</Text>
          </View>
        </View>
        <DayOfTheWeekButtonRender />
        <SeasonButtonRender />
      </View>
    </View>
  );
}

export default Diagnosis2Component;

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
  inputDiv: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    // borderWidth: 1,
  },
  inputInnerDiv: {
    display: 'flex',
    flexDirection: 'row',
  },
  answerBoxText: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 7,
    marginRight: 14,
  },
  button: {
    borderWidth: 0.2,
    borderRadius: 90,
    padding: 10,
    margin: 6,
  },
  selectedButton: {
    backgroundColor: 'black',
  },
  selectedButtonText: {
    color: 'white',
  },
  seasonButtonText: {
    width: 30,
    textAlign: 'center',
  },
});
