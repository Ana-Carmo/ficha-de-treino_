import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';

const Login = () => {

const [email, setEmail] = useState ('');
const [senha, setSenha] = useState('');

  return (
    <Container>    
      <Header title = {'Login - Ficha de treino'} />
      <Body>

        <Text style={styles.text}> Faça o seu login </Text>
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
        
        <Button color = '#A020F0' style={styles.button}  mode="contained" onPress={() => console.log      ('Pressed')}>
          Login
        </Button>

        <Text style={styles.text}> Ainda não possui uma conta? Faça o seu cadastro </Text>

        <Button color = '#A020F0' style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
          Cadastrar
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

export default Login;