import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import GetDementialCenterFunction from '../Function/GetDementialCenterFunction';
import Pagination from '../Component/Pagination';

function DementialCenterPage() {
  const [dementiaCenter, setDementiaCenter] = useState(null);
  const [page, setPage] = useState(1);

  async function GetDementiaCenter({page}) {
    const result = await GetDementialCenterFunction({page: page});

    setDementiaCenter(result.content);

    return;
  }

  useEffect(() => {
    GetDementiaCenter({page: page});
  }, [page]);

  if (dementiaCenter) {
    return (
      <View style={styles.container}>
        <View style={styles.centers}>
          {dementiaCenter.map((center, index) => {
            return (
              <View key={index} style={styles.center}>
                <Text style={styles.name}>{center.name}</Text>
                <View style={styles.row}>
                  <Text style={styles.title}>전화번호</Text>
                  <Text style={styles.text}>{center.callNumber}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.title}>주소</Text>
                  <Text style={styles.text}>{center.centerLocation}</Text>
                </View>
              </View>
            );
          })}
        </View>
        <Pagination page={page} setPage={setPage} />
      </View>
    );
  }
}

export default DementialCenterPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'start',
    alignItems: 'center',
    flex: 1,
    marginTop: 30,
  },
  centers: {
    height: 580,
  },
  center: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    marginBottom: 10,
    padding: 10,
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 15,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 5,
  },
  title: {
    width: 50,
    fontWeight: '600',
  },
  text: {
    flexWrap: 'wrap',
    width: 250,
  },
});
