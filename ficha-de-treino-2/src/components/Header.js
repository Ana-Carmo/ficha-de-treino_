import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

const Header = ({title}) => {
  return (
    <Appbar.Header style = {styles.header}>
      <Appbar.Content title = {title} style = {styles.content}/>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#A020F0',
  },
  content: {
    textAlign: 'right',
  }
})

export default Header;