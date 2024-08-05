import {StyleSheet, Text, View} from 'react-native';
import Input from '../../../Utils/Component/Input';

function InputBox({title, placeholder, value, onChange, security, comment}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Input
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        security={security}
      />
      <Text style={styles.comment}>{comment}</Text>
    </View>
  );
}

export default InputBox;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 7,
    marginLeft: 5,
  },
  comment: {
    fontSize: 11,
    marginTop: -8,
    marginLeft: 6,
  },
});
