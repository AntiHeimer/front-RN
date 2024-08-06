import {View, Text, StyleSheet, ScrollView} from 'react-native';

function NotificationPage() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>Notification</Text>
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
    marginTop: 200,
  },
});
