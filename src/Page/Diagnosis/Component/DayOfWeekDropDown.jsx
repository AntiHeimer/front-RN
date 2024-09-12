import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function DayOfWeekDropDown({value, setValue}) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: '일', value: '일'},
    {label: '월', value: '월'},
    {label: '화', value: '화'},
    {label: '수', value: '수'},
    {label: '목', value: '목'},
    {label: '금', value: '금'},
    {label: '토', value: '토'},
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
          placeholder={'요일'}
          maxHeight={100}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdown}
        />
      </View>
    </View>
  );
}

export default DayOfWeekDropDown;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    zIndex: 100,
    marginBottom: 50,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    width: 100,
  },
  dropdown: {
    borderWidth: 0.2,
  },
});
