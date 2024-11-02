import {StyleSheet, Text, View} from 'react-native';

function Table() {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.tableRow}>
        <View style={[styles.tableHeader, styles.narrowColumn]}>
          <Text style={styles.tableHeaderText}>치매 단계</Text>
        </View>
        <View style={[styles.tableHeader, styles.wideColumn]}>
          <Text style={styles.tableHeaderText}>설명</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={[styles.tableCell, styles.narrowColumn]}>
          <Text style={styles.tableCellText}>정상</Text>
        </View>
        <View style={[styles.tableCell, styles.wideColumn]}>
          <Text style={styles.tableCellText}>인지 기능이 정상입니다</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={[styles.tableCell, styles.narrowColumn]}>
          <Text style={styles.tableCellText}>주의 필요</Text>
        </View>
        <View style={[styles.tableCell, styles.wideColumn]}>
          <Text style={styles.tableCellText}>
            인지 기능이 다소 저하되어 있습니다.
          </Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={[styles.tableCell, styles.narrowColumn]}>
          <Text style={styles.tableCellText}>치매 의심</Text>
        </View>
        <View style={[styles.tableCell, styles.wideColumn]}>
          <Text style={styles.tableCellText}>
            치매가 의심됩니다. 가까운 병원에 방문하여 전문가의 진단을 받으시길
            권장합니다
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Table;

const styles = StyleSheet.create({
  tableContainer: {
    width: 308,
    borderWidth: 0.2,
    borderColor: 'black',
    marginTop: 20,
    marginBottom: 60,
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
    height: 55,
  },
  tableCellText: {
    fontSize: 12,
    textAlign: 'center',
  },
  wideColumn: {
    padding: 1,
    flex: 4,
  },
  narrowColumn: {
    flex: 2,
  },
});
