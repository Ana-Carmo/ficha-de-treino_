import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

const Input = (props) => {
  return (
    <TextInput
      style = {styles.input}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input:{
    backgroundColor: '#FFF',
    marginBottom: 6,
    fontSize: 13,
  }
})

export default Input;