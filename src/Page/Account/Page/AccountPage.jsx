import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from 'react';

import Row from '../Component/Row';
import {MainButtonBlack} from '../../../Utils/Component/MainButton';
import {Storage} from '../../../Utils/Function/Storage';
import {CancelAlert, ConfirmAlert} from '../../../Utils/Component/CustomAlert';

import GetProtectorsFunction from '../Function/GetProtectorsFunction';
import GetWardsFunction from '../Function/GetWardsFunction';
import GetUserAccountFunction from '../Function/GetUserAccountFunction';

function AccountPage({navigation}) {
  const [userInfo, setUserInfo] = useState(null);
  const [protectorList, setProtectorList] = useState(null);
  const [wardList, setWardList] = useState(null);

  async function Logout() {
    CancelAlert({
      title: '로그아웃',
      message: '정말 로그아웃 하시겠습니까?',
      onPressConfirm: async () => {
        Storage.setItem('userState', {
          jwtToken: null,
          uuid: null,
          isLoggedIn: false,
        });

        navigation.navigate('Login');
        return;
      },
      onPressCancel: () => {},
    });
  }

  async function getUserInfo() {
    const result = await GetUserAccountFunction();
    if (result.statusCode === '200') {
      setUserInfo(result.memberInfoDto);
      return;
    }

    ConfirmAlert({
      title: '회원 정보 로드 실패',
      message: '회원 정보를 불러오는데 실패하였습니다.',
      onPress: () => {},
    });
    return;
  }

  async function getProtector() {
    const result = await GetProtectorsFunction();
    if (result.statusCode === '200') {
      setProtectorList(result.infoGuardianDtoList);
      return;
    }

    ConfirmAlert({
      title: '보호자 정보 로드 실패',
      message: '보호자 정보를 불러오는데 실패하였습니다.',
      onPress: () => {},
    });
    return;
  }

  async function getWard() {
    const result = await GetWardsFunction();
    if (result.statusCode === '200') {
      setWardList(result.infoWardDtoList);
      return;
    }

    ConfirmAlert({
      title: '피보호자 정보 로드 실패',
      message: '피보호자 정보를 불러오는데 실패하였습니다.',
      onPress: () => {},
    });
    return;
  }

  useEffect(() => {
    getProtector();
    getWard();
    getUserInfo();
  }, []);

  if (userInfo && protectorList && wardList) {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text}>나의 정보</Text>
          <Row name={userInfo.name} id={userInfo.id} />
          <View style={styles.hr} />

          <Text style={styles.text}>나의 보호자 정보</Text>
          {protectorList.length == 0 ? (
            <Text style={styles.nullInfo}>보호자 정보가 없습니다.</Text>
          ) : (
            protectorList.map(protector => {
              return (
                <View key={protector.memberUuid}>
                  <Row name={protector.name} id={protector.id} />
                </View>
              );
            })
          )}
          <View style={styles.hr} />

          <Text style={styles.text}>나의 피보호자 정보</Text>
          {wardList.length == 0 ? (
            <Text style={styles.nullInfo}>피보호자 정보가 없습니다.</Text>
          ) : (
            wardList.map(ward => {
              return (
                <View key={ward.memberUuid}>
                  <Row name={ward.name} id={ward.id} />
                </View>
              );
            })
          )}

          <View style={styles.hr} />
          <View style={styles.buttonDiv}>
            <MainButtonBlack
              text="치매 센터 알아보기"
              onPress={() => {
                navigation.navigate('DementiaCenter');
              }}
            />
            <MainButtonBlack text="로그아웃" onPress={() => Logout()} />
          </View>
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>회원 정보를 불러오지 못했습니다.</Text>
      <View style={styles.buttonDiv}>
        <MainButtonBlack text="로그아웃" onPress={() => Logout()} />
      </View>
    </View>
  );
}

export default AccountPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    width: 308,
    textAlign: 'left',
    marginBottom: 10,
    fontSize: 18,
    marginTop: 30,
    marginBottom: 20,
  },
  hr: {
    width: 308,
    height: 1,
    borderTopWidth: 0.2,
    marginTop: 20,
  },
  buttonDiv: {
    marginTop: 40,
    gap: 10,
  },
  nullInfo: {
    height: 50,
    textAlign: 'left',
    paddingTop: 15,
  },
});
