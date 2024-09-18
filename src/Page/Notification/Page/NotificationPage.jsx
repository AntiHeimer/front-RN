import {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, RefreshControl} from 'react-native';

import Row from '../Component/Row';
import Row2 from '../Component/Row2';
import Row3 from '../Component/Row3';
import FindNotificationFunction from '../Function/FindNotificationFunction';
import {ConfirmAlert} from '../../../Utils/Component/CustomAlert';

function NotificationPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [notificationList, setNotificationList] = useState(null);

  async function LoadNotification() {
    const res = await FindNotificationFunction();

    if (res.statusCode === '200') {
      setNotificationList(res.notification);
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

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        style={styles.scrollViewContent}>
        <View style={styles.subContainer}>
          <Row />
          <Row3 />
          <Row2 />
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
