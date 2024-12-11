import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import DeleteNotificationFunction from '../Function/DeleteNotificationFunction';

function Row3({notification, onDelete}) {
  async function DeleteNotification() {
    const result = await DeleteNotificationFunction({
      notificationUuid: notification.uuid,
    });

    if (result.statusCode === '200') {
      onDelete(notification.uuid);
    }

    return;
  }

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>
          <Text style={styles.name}>{notification.fromMemberName}</Text>님이{' '}
          {notification.notificationType === 'resultGuardian'
            ? '보호자'
            : '피보호자'}{' '}
          요청을 수락했습니다.
        </Text>
      </View>
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
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 25,
    paddingBottom: 20,
    marginLeft: 30,
  },
  messageContainer: {
    marginRight: 10,
    width: 280,
    height: 30,
    justifyContent: 'center',
  },
  message: {
    fontSize: 13,
    textAlign: 'left',
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
  name: {
    fontWeight: '700',
    fontSize: 14,
  },
});
