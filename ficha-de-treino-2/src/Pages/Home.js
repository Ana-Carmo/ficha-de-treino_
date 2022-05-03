import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import ListaAlunos from './ListaAlunos';
import Ficha from './Ficha';
import Perfil from './Perfil';
import Cadastro from './Cadastro';
import PaginaInicial from './PaginaInicial';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'paginaInicial', icon: 'home' },
    { key: 'perfil', icon: 'account' },
    { key: 'listaAlunos', icon: 'format-list-bulleted' },
    { key: 'ficha', icon: 'dumbbell' },    
  ]);

  const renderScene = BottomNavigation.SceneMap({
    paginaInicial: PaginaInicial,
    perfil: Perfil,
    listaAlunos: ListaAlunos,
    ficha : Ficha,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;