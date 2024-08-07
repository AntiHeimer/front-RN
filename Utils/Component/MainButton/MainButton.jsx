import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function MainButton({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}> {text}</Text>
    </TouchableOpacity>
  );
}

export default MainButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 90,
    backgroundColor: 'black',
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
