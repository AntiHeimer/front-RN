import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function DropDown({wardList, setWardList, selectedUser, setSelectedUser}) {
  const [open, setOpen] = useState(false);

  if (wardList) {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <DropDownPicker
            open={open}
            value={selectedUser}
            items={wardList}
            setOpen={setOpen}
            setValue={setSelectedUser}
            setItems={setWardList}
            placeholder={'피보호자를 선택해주세요'}
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdown}
          />
        </View>
      </View>
    );
  }
}

export default DropDown;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    zIndex: 100,
    marginBottom: 50,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    width: 308,
  },
  dropdown: {
    borderWidth: 0.2,
  },
});
