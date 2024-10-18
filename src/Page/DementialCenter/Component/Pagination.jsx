import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Pagination({page, setPage}) {
  const pageArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <View style={styles.pagination}>
      {pageArr.map(n => {
        return (
          <TouchableOpacity
            key={n}
            style={page === n ? styles.selected_box : styles.unselected_box}
            onPress={() => setPage(n)}>
            <Text
              style={
                page === n ? styles.selected_text : styles.unselected_text
              }>
              {n}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default Pagination;

const styles = StyleSheet.create({
  pagination: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },

  selected_box: {
    borderWidth: 1,
    borderRadius: 5,
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  unselected_box: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  selected_text: {
    color: 'white',
    margin: 'auto',
  },
  unselected_text: {
    margin: 'auto',
  },
});
