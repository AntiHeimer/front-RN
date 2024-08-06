import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function Dropdown2() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '강민재', value: '강민재'},
    {label: '강민숙', value: '강민숙'},
    {label: '홍길동', value: '홍길동'},
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
          placeholder={'피보호자'}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdown}
        />
      </View>
    </View>
  );
}

export default Dropdown2;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    zIndex: 100,
    position: 'static',
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
