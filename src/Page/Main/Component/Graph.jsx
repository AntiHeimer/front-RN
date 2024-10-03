import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ConfirmAlert} from '../../../Utils/Component/CustomAlert';

import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';
import SleepChart from './SleepChart';
import WalkChart from './WalkChart';

import GetWardsFunction from '../../Account/Function/GetWardsFunction';
import GetSleepDataFunction from '../Function/GetSleepDataFunction';
import GetWalkDataFunction from '../Function/GetWalkDataFunction';
import {Storage} from '../../../Utils/Function/Storage';

function Graph() {
  const [kindOfData, setKindOfData] = useState('sleep');
  const [selectedUser, setSelectedUser] = useState(null);
  const [wardList, setWardList] = useState(null);

  const [sleepData, setSleepData] = useState(null);
  const [walkData, setWalkData] = useState(null);

  async function getWardList() {
    const result = await GetWardsFunction();
    const userState = await Storage.getItem('userState');
    const uuid = userState.uuid;

    if (result.statusCode === '200') {
      const data = result.infoWardDtoList;

      const transformedData = data.map(({memberUuid, name}) => ({
        value: memberUuid,
        label: name,
      }));

      const userData = {
        value: uuid,
        label: '본인',
      };

      setWardList([userData, ...transformedData]);

      return;
    }

    ConfirmAlert({
      title: '피보호자 리스트 반환 실패',
      message: '피보호자 리스트 반환에 실패하였습니다.',
      onPress: () => {},
    });
  }

  function getSundayDate() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const diff = today.getDate() - dayOfWeek;
    const sunday = new Date(today.setDate(diff));

    const year = sunday.getFullYear();
    const month = String(sunday.getMonth() + 1).padStart(2, '0');
    const day = String(sunday.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  async function GetSleepData() {
    const sundayDate = getSundayDate();

    const result = await GetSleepDataFunction({
      uuid: selectedUser,
      date: sundayDate,
    });

    if (result.statusCode === '200') {
      setSleepData(result.sleepList);
      return;
    }

    ConfirmAlert({
      title: '수면 데이터 로드 실패',
      message: '수면 데이터를 불러오는데 실패하였습니다.',
      onPress: () => {},
    });

    return;
  }

  async function GetWalkData() {
    const sundayDate = getSundayDate();

    const result = await GetWalkDataFunction({
      uuid: selectedUser,
      date: sundayDate,
    });

    if (result.statusCode === '200') {
      setWalkData(result.walkList);
      return;
    }

    ConfirmAlert({
      title: '걸음 데이터 로드 실패',
      message: '걸음 데이터를 불러오는데 실패하였습니다.',
      onPress: () => {},
    });

    return;
  }

  useEffect(() => {
    getWardList();
  }, []);

  useEffect(() => {
    if (kindOfData === 'sleep' && selectedUser) {
      GetSleepData();
    }

    if (kindOfData === 'walk' && selectedUser) {
      GetWalkData();
    }
  }, [kindOfData, selectedUser]);

  return (
    <View style={styles.graphContainer}>
      <Text style={styles.title}>수면 및 걸음 차트</Text>
      <View style={styles.dropdownContainer}>
        <Dropdown1 kindOfData={kindOfData} setKindOfData={setKindOfData} />

        {wardList && (
          <Dropdown2
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            wardList={wardList}
            setWardList={setWardList}
          />
        )}
      </View>
      {kindOfData === 'sleep' ? (
        <SleepChart sleepData={sleepData} />
      ) : (
        <WalkChart walkData={walkData} />
      )}
    </View>
  );
}

export default Graph;

const styles = StyleSheet.create({
  graphContainer: {
    marginTop: -30,
    position: 'relative',
  },
  title: {
    width: 308,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 10,
  },
  dropdownContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 26,
    gap: 120,
    width: 308,
    position: 'relative',
    zIndex: 100,
  },
});
