import AsyncStorage from '@react-native-async-storage/async-storage';

export const Storage = {
  /**
   * 주어진 키와 값을 AsyncStorage에 저장
   * @param {string} key - 저장할 데이터의 키
   * @param {any} value - 저장할 데이터 값 (자동으로 JSON 문자열로 변환됨)
   * @returns {Promise<void>} 저장 완료 시 `resolve`
   */
  async setItem(key, value) {
    try {
      // 데이터를 JSON 문자열로 변환하여 AsyncStorage에 저장
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // 저장 실패 시 오류 메시지 로그
      console.error('[Error] Failed to save data', error);
    }
  },

  /**
   * 주어진 키로 AsyncStorage에서 데이터를 가져옴
   * @param {string} key - 조회할 데이터의 키
   * @returns {Promise<any|null>} 조회된 데이터 (JSON 문자열을 파싱하여 반환), 데이터가 없으면 `null`
   */
  async getItem(key) {
    try {
      // 키로부터 데이터를 가져오고 JSON 문자열을 객체로 파싱
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      // 데이터 조회 실패 시 오류 메시지 로그
      console.error('[Error] Failed to fetch data', error);
    }
  },

  /**
   * 주어진 키로 AsyncStorage에서 데이터를 삭제
   * @param {string} key - 삭제할 데이터의 키
   * @returns {Promise<void>} 삭제 완료 시 `resolve`
   */
  async removeItem(key) {
    try {
      // 지정된 키의 데이터를 AsyncStorage에서 삭제
      await AsyncStorage.removeItem(key);
    } catch (error) {
      // 삭제 실패 시 오류 메시지 로그
      console.error('[Error] Failed to remove data', error);
    }
  },

  /**
   * AsyncStorage의 모든 데이터를 삭제
   * @returns {Promise<void>} 삭제 완료 시 `resolve`
   */
  async clearAll() {
    try {
      // AsyncStorage의 모든 데이터 삭제
      await AsyncStorage.clear();
    } catch (error) {
      // 모든 데이터 삭제 실패 시 오류 메시지 로그
      console.error('[Error] Failed to clear data', error);
    }
  },
};
