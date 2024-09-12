import {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, RefreshControl} from 'react-native';

import Row from '../Component/Row';
import SocketComponent from '../../../Utils/Component/SocketComponent';
import Row2 from '../Component/Row2';
import Row3 from '../Component/Row3';

function NotificationPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  async function LoadNotification() {
    console.log('load');
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
          {/* <Row />
          <Row /> */}
          {/* <SocketComponent /> */}
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
