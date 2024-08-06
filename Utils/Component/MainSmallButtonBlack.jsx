import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function MainSmallButtonBlack({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}> {text}</Text>
    </TouchableOpacity>
  );
}

export default MainSmallButtonBlack;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 90,
    backgroundColor: 'black',
    width: 60,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
});
