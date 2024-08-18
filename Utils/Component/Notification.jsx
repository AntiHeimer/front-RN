import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import notification from '../Asset/notification.png';

function Notification() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
      <Image source={notification} style={styles.img} />
    </TouchableOpacity>
  );
}

export default Notification;

const styles = StyleSheet.create({
  img: {
    height: 30,
    width: 30,
    marginRight: 30,
  },
});
