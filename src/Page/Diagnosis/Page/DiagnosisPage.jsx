import {StyleSheet, View} from 'react-native';

import {
  MainMediumButtonBlack,
  MainMediumButtonGray,
} from '../../../Utils/Component/MainButton';

import Diagnosis1Component from '../Component/Diagnosis1Component';
import Diagnosis2Component from '../Component/Diagnosis2Component';
import Diagnosis3Component from '../Component/Diagnosis3Component';

function DiagnosisPage({navigation}) {
  return (
    <View style={styles.container}>
      <Diagnosis3Component />
      <View style={styles.buttonDiv}>
        <MainMediumButtonGray text="이전" />
        <MainMediumButtonBlack
          text="다음"
          onPress={() => navigation.navigate('Diagnosis Result')}
        />
      </View>
    </View>
  );
}

export default DiagnosisPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: -100,
  },
  buttonDiv: {
    width: 330,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 50,
  },
});
