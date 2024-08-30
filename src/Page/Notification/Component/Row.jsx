import {StyleSheet, Text, View} from 'react-native';
import {
  MainSmallButtonBlack,
  MainSmallButtonGray,
} from '../../../Utils/Component/MainButton';

function Row() {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Text style={styles.message}>강민재님이 피보호자 요청을 보냈습니다.</Text>
      <View style={styles.buttonDiv}>
        <MainSmallButtonBlack text="수락" />
        <MainSmallButtonGray text="거절" />
      </View>
    </View>
  );
}

export default Row;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomWidth: 0.2,
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 15,
  },
  circle: {
    borderWidth: 0.2,
    borderRadius: 100,
    height: 40,
    width: 40,
    marginLeft: 25,
    marginRight: 15,
  },
  message: {
    width: 150,
    marginRight: 10,
    fontSize: 13,
  },
  buttonDiv: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
});
