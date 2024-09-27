import {useEffect, useState} from 'react';

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

function Diagnosis2Component({num, diagnosisSheet, setDianosisAnswer}) {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  const [dayOfTheWeek, setDayOfTheWeek] = useState(null);
  const [season, setSeason] = useState(null);

  useEffect(() => {
    const anserArray = [year, month, date, dayOfTheWeek, season];

    setDianosisAnswer(prev => ({...prev, [num]: anserArray}));
  }, [year, month, date, dayOfTheWeek, season]);

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
  dropdownView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: -80,
  },
});
