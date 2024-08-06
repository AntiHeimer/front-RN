import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Row from '../Component/Row';

function NotificationPage() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.subContainer}>
          <Row />
          <Row />
          <Row />
          <Row />
        </View>
      </ScrollView>
    </View>
  );
}

export default NotificationPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    alignItems: 'center',
  },
});
