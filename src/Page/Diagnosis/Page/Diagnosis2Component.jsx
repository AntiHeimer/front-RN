import {useState} from 'react';

import {View, Text, StyleSheet} from 'react-native';

import InputSmall from '../Component/InputSmall';
import InputMedium from '../Component/InputMedium';
import SeasonDropDown from '../Component/SeasonDropDown';
import DayOfWeekDropDown from '../Component/DayOfWeekDropDown';

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
        <View style={styles.dropdownView}>
          <DayOfWeekDropDown value={dayOfTheWeek} setValue={setDayOfTheWeek} />
          <SeasonDropDown value={season} setValue={setSeason} />
        </View>
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
  dropdownView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: -50,
  },
});
