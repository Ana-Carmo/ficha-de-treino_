import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import { List, Text, FAB} from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    nome: 'João José',
    dataModificacao: '01/01/2022',
    dataTroca: '01/04/2022',
  },
  {
    id: 1,
    nome: 'Ana Silva',
    dataModificacao: '01/01/2022',
    dataTroca: '01/04/2022',
  },
  {
    id: 1,
    nome: 'Mário Souza',
    dataModificacao: '01/01/2022',
    dataTroca: '01/04/2022',
  },
];

const ListaAlunos = () => {

  const renderItem = ({ item }) => (
      <List.Item
        title = {
          item.nome
        }
        description = 
          {'Data do treino: ' + item.dataModificacao}
          center = {props => (
            <List.Icon 
              {...props}
            />
        )}
        right = {props => ( 
          <Text {...props} style={{alignSelf: 'left'}}>
           {''}
            {item.data} {''}
          </Text>
        )}
      />
  );

    return (
      <Container>
      <Header title={'Lista de Alunos'}/>
      <Body>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
  
      </Body>
      </Container>
    );
  };

export default ListaAlunos;