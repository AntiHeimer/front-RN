import {StyleSheet, Text, View} from 'react-native';

function Row({name, id}) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>이름</Text>
        <Text style={styles.value}>{name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>아이디</Text>
        <Text style={styles.value}>{id}</Text>
      </View>
    </View>
  );
}

export default Row;

const styles = StyleSheet.create({
  container: {
    width: 308,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
  text: {
    width: 90,
    fontSize: 15,
  },
  value: {
    fontSize: 15,
  },
});
