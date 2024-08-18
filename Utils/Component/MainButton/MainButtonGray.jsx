import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function MainButtonGray({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}> {text}</Text>
    </TouchableOpacity>
  );
}

export default MainButtonGray;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#F2F2F2',
    borderRadius: 90,
    backgroundColor: '#F2F2F2',
    width: 308,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
