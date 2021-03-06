import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Search.."
        onChangeText={value => props.sendText(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: 10,
    marginBottom: 15,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export {SearchBar};
