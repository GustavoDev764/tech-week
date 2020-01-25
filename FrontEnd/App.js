import React from 'react';
import { Easing } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import SideBar from './SideBar';

//Rotas
import HomeScreen from './src/Screen/home';
import {IncricaoNavigationStack} from './src/Screen/inscricao';
import Programacao from './src/Screen/programacao';
import Certificado from './src/Screen/certificado';
import LogOut from './src/Screen/logout';
import Map from  './src/Screen/Map';
import MeusCursos from './src/Screen/meuscursos';


const MyDrawerNavigator = createDrawerNavigator(
  {
    
    
    HomeScreen,
   
    IncricaoNavigationStack,

    MeusCursos,
    
    Programacao,
    
    Certificado,
   
    LogOut,
   
    Map,
    
    
  },
  {
      contentComponent: (props) =>{ return  <SideBar {...props} />},
      hideStatusBar: true,
      contentOptions:{
          activeBackgroundColor: "#f4a6ff7a",
          activeTintColor: "#53115bc7",

          itemsContainerStyle:{
            marginTop: 16,
            marginHorizontal: 8,
          },

          itemStyle:{
            borderRadius: 4,
          }

      }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
     
      App: MyDrawerNavigator,
   
    },
    {
      initialRouteName: 'App',
    }
  )
);