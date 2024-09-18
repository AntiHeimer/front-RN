import {StyleSheet, Text, View} from 'react-native';

import {
  MainSmallButtonBlack,
  MainSmallButtonGray,
} from '../../../Utils/Component/MainButton';
import {CancelAlert, ConfirmAlert} from '../../../Utils/Component/CustomAlert';

import DeleteNotificationFunction from '../Function/DeleteNotificationFunction';
import SaveGuardianFunction from '../Function/SaveGuardianFunction';
import SaveWardFunction from '../Function/SaveWardFuntion';

function Row({notification, navigation}) {
  async function DeleteNotification() {
    CancelAlert({
      title: '요청 거절',
      message: '요청을 거절하시겠습니까?',
      onPressConfirm: async () => {
        const result = await DeleteNotificationFunction({
          notificationUuid: notification.notificationUuid,
        });

        if (result.statusCode === '200') {
          ConfirmAlert({
            title: '요청 거절',
            message: '요청이 거절되었습니다.',
            onPress: () => {
              navigation.replace('Notification');
            },
          });

          return;
        }

        ConfirmAlert({
          title: '요청 거절 실패',
          message: '요청 거절을 완료하지 못하였습니다.',
          onPress: () => {},
        });

        return;
      },
      onPressCancel: () => {},
    });
  }

  async function SaveRelation() {
    if (notification.notificationType === 'guardian') {
      const result = await SaveGuardianFunction({
        notificationUuid: notification.notificationUuid,
        wardUuid: notification.fromMemberUuid,
      });

      if (result.statusCode === '200') {
        ConfirmAlert({
          title: '등록 완료',
          message: '보호자 등록이 완료되었습니다.',
          onPress: () => {
            navigation.replace('Notification');
          },
        });

        return;
      }

      ConfirmAlert({
        title: '등록 실패',
        message: '보호자 등록에 실패하였습니다.',
        onPress: () => {},
      });

      return;
    }

    if (notification.notificationType === 'ward') {
      const result = await SaveWardFunction({
        notificationUuid: notification.notificationUuid,
        guardianUuid: notification.fromMemberUuid,
      });

      if (result.statusCode === '200') {
        ConfirmAlert({
          title: '등록 완료',
          message: '피보호자 등록이 완료되었습니다.',
          onPress: () => {
            navigation.replace('Notification');
          },
        });

        return;
      }

      ConfirmAlert({
        title: '등록 실패',
        message: '피보호자 등록에 실패하였습니다.',
        onPress: () => {},
      });

      return;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Text style={styles.message}>
        {notification.fromMemberName}님이{' '}
        {notification.notificationType === 'guardian' ? '보호자' : '피보호자'}{' '}
        요청을 보냈습니다.
      </Text>
      <View style={styles.buttonDiv}>
        <MainSmallButtonBlack text="수락" onPress={() => SaveRelation()} />
        <MainSmallButtonGray text="거절" onPress={() => DeleteNotification()} />
      </View>
    </View>
  );
}

export default Row;

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
    marginLeft: 25,
    marginRight: 15,
  },
  message: {
    width: 150,
    marginRight: 10,
    fontSize: 13,
  },
  buttonDiv: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
});
