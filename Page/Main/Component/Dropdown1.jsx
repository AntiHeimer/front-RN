import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function Dropdown1() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '수면', value: '수면'},
    {label: '걸음걸이', value: '걸음걸이'},
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={'데이터 종류'}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdown}
        />
      </View>
    </View>
  );
}

export default Dropdown1;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    position: 'static',
    zIndex: 100,
    marginBottom: 50,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    width: 120,
  },
  dropdown: {
    borderWidth: 0.2,
  },
});