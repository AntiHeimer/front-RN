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
          <Text style={styles.tableCellText}>1단계</Text>
        </View>
        <View style={[styles.tableCell, styles.wideColumn]}>
          <Text style={styles.tableCellText}>설명설명설명설명설명설명설명</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={[styles.tableCell, styles.narrowColumn]}>
          <Text style={styles.tableCellText}>2단계</Text>
        </View>
        <View style={[styles.tableCell, styles.wideColumn]}>
          <Text style={styles.tableCellText}>설명설명설명설명설명설명설명</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={[styles.tableCell, styles.narrowColumn]}>
          <Text style={styles.tableCellText}>3단계</Text>
        </View>
        <View style={[styles.tableCell, styles.wideColumn]}>
          <Text style={styles.tableCellText}>설명설명설명설명설명설명설명</Text>
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
    marginTop: 40,
    marginBottom: 55,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2,
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
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2,
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
});
