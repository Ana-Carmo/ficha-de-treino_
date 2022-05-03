import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, Alert} from 'react-native';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';

const Perfil = () => {

  return (
    <Container>    
      <Header title = {'Perfil'} />
      <Body> 
          <Text style = {styles.text}> Nome: Fulano da Silva </Text>
          <Text style = {styles.text}> E-mail: FulanodaSilva@email.com.br </Text>
          <Text style = {styles.text}> Treinador: João Silva </Text>

      <View style={styles.fixToText}>
        <Button
          color = '#A020F0'
          title="Alterar Senha"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          color = '#A020F0'
          title="Editar Informações"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
   
      </Body>
    </Container>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  text :{
    textAlign: 'center',
    margin: 8,
    fontSize: 16,
    marginBottom: 8,
    marginTop: 15,
    color: '#696969',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#A020F0',
  },
});