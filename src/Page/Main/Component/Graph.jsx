import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';
import SleepChart from './SleepChart';
import WalkChart from './WalkChart';
import GetWardsFunction from '../../Account/Function/GetWardsFunction';
import {ConfirmAlert} from '../../../Utils/Component/CustomAlert';

function Graph() {
  const [kindOfData, setKindOfData] = useState('수면');
  const [wardList, setWardList] = useState(null);

  async function getWardList() {
    const result = await GetWardsFunction();
    if (result.statusCode === '200') {
      const data = result.infoWardDtoList;

      const transformedData = data.map(({memberUuid, name}) => ({
        value: memberUuid,
        label: name,
      }));

      setWardList(transformedData);

      return;
    }

    ConfirmAlert({
      title: '피보호자 리스트 반환 실패',
      message: '피보호자 리스트 반환에 실패하였습니다.',
      onPress: () => {},
    });
  }

  useEffect(() => {
    getWardList();
  }, []);

  return (
    <View style={styles.graphContainer}>
      <Text style={styles.title}>수면 및 걸음 차트</Text>
      <View style={styles.dropdownContainer}>
        <Dropdown1 kindOfData={kindOfData} setKindOfData={setKindOfData} />
        <Dropdown2 wardList={wardList} setWardList={setWardList} />
      </View>
      {kindOfData === '수면' ? <SleepChart /> : <WalkChart />}
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
