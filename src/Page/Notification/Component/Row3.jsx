import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import DeleteNotificationFunction from '../Function/DeleteNotificationFunction';

function Row3({notification, navigation}) {
  async function DeleteNotification() {
    const result = await DeleteNotificationFunction({
      notificationUuid: notification.uuid,
    });

    if (result.statusCode === '200') {
      navigation.replace('Notification');
    }

    return;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        {notification.fromMemberName}님이{' '}
        {notification.notificationType === 'resultGuardian'
          ? '보호자'
          : '피보호자'}{' '}
        요청을 수락했습니다.
      </Text>
      <View style={styles.buttonDiv}>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => DeleteNotification()}>
          <Text style={styles.removeButtonText}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Row3;

const styles = StyleSheet.create({
  container: {
    width: 350,
    borderBottomWidth: 0.2,
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 25,
    paddingBottom: 20,
    marginLeft: 20,
  },
  message: {
    fontSize: 13,
    width: 300,
    marginTop: 5,
    // borderWidth: 1,
  },
  buttonDiv: {
    display: 'flex',
    flexDirection: 'row',
  },
  removeButton: {
    marginTop: 5,
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
