import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GetDiagnosisResultListFunction from '../Function/GetDiagnosisResultListFunction';
import {ConfirmAlert} from '../../../Utils/Component/CustomAlert';

function Table({selectedUser}) {
  const [resultList, setResultList] = useState(null);

  async function GetDiagnosisResultList() {
    const result = await GetDiagnosisResultListFunction({uuid: selectedUser});
    if (result.statusCode === '200') {
      setResultList(result.resultList);
      return;
    }

    ConfirmAlert({
      title: '진단 결과 정보 로드 실패',
      message: '진단 결과 정보를\n불러오는데 실패하였습니다.',
      onPress: () => {},
    });
    return;
  }

  useEffect(() => {
    if (selectedUser) {
      GetDiagnosisResultList();
    }
  }, [selectedUser]);

  if (resultList) {
    return (
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <View style={[styles.tableHeader, styles.narrowColumn]}>
            <Text style={styles.tableHeaderText}>일자</Text>
          </View>
          <View style={[styles.tableHeader, styles.wideColumn]}>
            <Text style={styles.tableHeaderText}>치매 진단 단계</Text>
          </View>
        </View>
        {resultList.length == 0 && (
          <Text style={styles.nullInfo}>치매 진단 결과가 없습니다.</Text>
        )}
        {resultList.map(result => {
          return (
            <View style={styles.tableRow} key={result.uuid}>
              <View style={[styles.tableCell, styles.narrowColumn]}>
                <Text style={styles.tableCellText}>{result.date}</Text>
              </View>
              <View style={[styles.tableCell, styles.wideColumn]}>
                <Text style={styles.tableCellText}>{result.stage}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

export default Table;

const styles = StyleSheet.create({
  tableContainer: {
    width: 308,
    borderWidth: 0.2,
    borderColor: 'black',
    marginBottom: 55,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeader: {
    flex: 1,
    borderWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    height: 50,
  },
  tableHeaderText: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableCell: {
    flex: 1,
    borderWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    height: 50,
  },
  tableCellText: {
    fontSize: 13,
    textAlign: 'center',
  },
  wideColumn: {
    flex: 4,
  },
  narrowColumn: {
    flex: 2,
  },
  nullInfo: {
    height: 150,
    paddingTop: 55,
    textAlign: 'center',
  },
});
