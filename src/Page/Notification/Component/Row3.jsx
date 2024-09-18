import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DeleteNotificationFunction from '../Function/DeleteNotificationFunction';

function Row3({notification, navigation}) {
  async function DeleteNotification() {
    const result = await DeleteNotificationFunction({
      notificationUuid: notification.notificationUuid,
    });

    if (result.statusCode === '200') {
      navigation.replace('Notification');
    }

    return;
  }

  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Text style={styles.message}>
        {notification.fromMemberName}님이{' '}
        {notification.notificationType === 'resultGuardian'
          ? '보호자'
          : '피보호자'}{' '}
        요청을 수락했습니다.
      </Text>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => DeleteNotification()}>
        <Text style={styles.removeButtonText}>x</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Row3;

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

    marginRight: 15,
  },
  message: {
    marginRight: 10,
    marginTop: 10,
    fontSize: 13,
  },
  buttonDiv: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  removeButton: {
    marginTop: 5,
    marginLeft: 25,
    borderWidth: 0.2,
    borderRadius: 40,
    width: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  removeButtonText: {
    fontSize: 20,
    marginBottom: 4,
    marginLeft: 1,
    fontWeight: '200',
  },
});
