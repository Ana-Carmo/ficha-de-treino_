import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';

const Cadastro = () => {

const [nome, setNome] = useState('');
const [email, setEmail] = useState ('');
const [senha, setSenha] = useState('');
const [idAcademia, setIdAcademia] = useState('');

  return (
    <Container>    
      <Header title = {'Cadastro - Ficha de treino'} />
      <Body>

        <Text style={styles.text}> Criar uma conta </Text>
        <Input
          label = "Nome Completo"
          value = {nome}
          onChangeText = {nome => setNome(nome)}
        />
        <Input
          label = "Email"
          value = {email}
          onChangeText = {email => setEmail(email)}
        />
        <Input
          label = "Senha"
          value = {senha}
          onChangeText = {senha => setSenha(senha)}
        />
        <Input
          label = "ID da academia"
          value = {idAcademia}
          onChangeText = {idAcademia => setIdAcademia(idAcademia)}
        />
        <Button 
          color = '#A020F0'
          style={styles.button}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Cadastrar
        </Button>

        <Text style={styles.text}> Já possui uma conta? Faça o seu login </Text>

        <Button 
          color = '#A020F0'
          style={styles.button}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Login
        </Button>
      </Body>

    </Container>
  );
};

const styles = StyleSheet.create({
  text :{
    textAlign: 'center',
    margin: 8,
    fontSize: 16,
    marginBottom: 8,
    marginTop: 15,
    color: '#C0C0C0',
  },
  button: {
    color: '#A020F0',
    marginBottom: 8,
  }
})

export default Cadastro;