import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Colors } from '../src/assets/color';


const SearchInput = ({ searchText, setSearchText }) => {
  return (
    <TextInput
      style={styles.searchInput}
      placeholder="Search episodes and characters..."
      value={searchText}
      onChangeText={text => setSearchText(text)}
    />
  );
};

const styles = StyleSheet.create({
  searchInput: {
    marginHorizontal: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.darkgreen,
    borderRadius: 5,
  },
});

export default SearchInput;