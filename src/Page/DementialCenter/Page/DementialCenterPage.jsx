import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import GetDementialCenterFunction from '../Function/GetDementialCenterFunction';

function DementialCenterPage() {
  const [dementiaCenter, setDementiaCenter] = useState(null);
  async function GetDementiaCenter({page}) {
    const result = await GetDementialCenterFunction({page: page});

    setDementiaCenter(result.content);

    return;
  }

  useEffect(() => {
    GetDementiaCenter({page: 1});
  }, []);

  if (dementiaCenter) {
    return (
      <View style={styles.container}>
        {dementiaCenter.map((center, index) => {
          return (
            <View key={index}>
              <Text>{center.name}</Text>
              <Text>{center.callNumber}</Text>
              <Text>{center.centerLocation}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

export default DementialCenterPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: -60,
  },
});
