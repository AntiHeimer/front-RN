import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function MainSmallButtonGray({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}> {text}</Text>
    </TouchableOpacity>
  );
}

export default MainSmallButtonGray;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#F2F2F2',
    borderRadius: 90,
    backgroundColor: '#F2F2F2',
    width: 60,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 12,
  },
});
