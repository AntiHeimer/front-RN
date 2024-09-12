import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function SeasonDropDown({value, setValue}) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: '봄', value: '봄'},
    {label: '여름', value: '여름'},
    {label: '가을', value: '가을'},
    {label: '겨울', value: '겨울'},
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
          placeholder={'계절'}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdown}
        />
      </View>
    </View>
  );
}

export default SeasonDropDown;

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
