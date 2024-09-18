import {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, RefreshControl} from 'react-native';

import {ConfirmAlert} from '../../../Utils/Component/CustomAlert';

import Row from '../Component/Row';
import Row3 from '../Component/Row3';

import FindNotificationFunction from '../Function/FindNotificationFunction';

function NotificationPage({navigation}) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [notificationList, setNotificationList] = useState(null);

  async function LoadNotification() {
    const res = await FindNotificationFunction();

    if (res.statusCode === '200') {
      setNotificationList(res.notificationDtoList);
      return;
    }

    ConfirmAlert({
      title: '알림 로드 실패',
      message: '알림을 불러오는데 실패하였습니다.',
      onPress: () => {},
    });

    return;
  }

  async function handleRefresh() {
    setIsRefreshing(true);
    LoadNotification();
    setIsRefreshing(false);
  }

  useEffect(() => {
    LoadNotification();
  }, []);

  if (notificationList) {
    return (
      <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          }
          style={styles.scrollViewContent}>
          <View style={styles.subContainer}>
            {notificationList.map(notification => {
              if (
                notification.notificationType === 'ward' ||
                notification.notificationType === 'guardian'
              ) {
                return (
                  <View key={notification.notificationUuid}>
                    <Row notification={notification} navigation={navigation} />
                  </View>
                );
              }
              if (
                notification.notificationType === 'resultWard' ||
                notification.notificationType === 'resultGuardian'
              ) {
                return (
                  <View key={notification.notificationUuid}>
                    <Row3 notification={notification} navigation={navigation} />
                  </View>
                );
              }
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
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
