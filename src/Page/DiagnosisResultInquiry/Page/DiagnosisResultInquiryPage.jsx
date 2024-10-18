import {StyleSheet, View} from 'react-native';

import Table from '../Component/Table';
import Graph from '../Component/Graph';
import {useState} from 'react';

function DiagnosisResultInquiryPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.graphContainer}>
        <Graph selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      </View>
      <Table selectedUser={selectedUser} />
    </View>
  );
}

export default DiagnosisResultInquiryPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingTop: 40,
  },

  graphContainer: {
    width: 310,
    height: 350,
    marginBottom: 22,
  },
});
