import {useEffect} from 'react';
import {Text, View} from 'react-native';

import GetDementialCenterFunction from '../Function/GetDementialCenterFunction';

function DementialCenterPage() {
  async function GetDementiaCenter({page}) {
    const result = await GetDementialCenterFunction({page: page});

    console.log(result);
  }

  useEffect(() => {
    GetDementiaCenter({page: 1});
  }, []);

  return (
    <View>
      <Text>Dementia center</Text>
    </View>
  );
}

export default DementialCenterPage;
