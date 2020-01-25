import React from 'react';
import { Easing, View, Text, Button, Image } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import SideBar from './SideBar';

import {Ionicons, FontAwesome, Feather} from '@expo/vector-icons';
import {Header} from 'react-native-elements';

//Rotas
import HomeScreen from './src/Screen/home';
import {IncricaoNavigationStack} from './src/Screen/inscricao';
import Programacao from './src/Screen/programacao';
import Certificado from './src/Screen/certificado';
import LogOut from './src/Screen/logout';
import Map from  './src/Screen/Map';
import MeusCursos from './src/Screen/meuscursos';





const config = {
    animation: 'timing',
    config: {
      duration:500,
      easing:Easing.linear,
    //   stiffness: 1000,
    //   damping: 500,
    //   mass: 3,
    //   overshootClamping: true,
    //   restDisplacementThreshold: 0.01,
    //   restSpeedThreshold: 0.01,
    },
  };



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
      headerMode: "none",
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
      // AuxView: AuxView,
      App: MyDrawerNavigator,
   
    },
    {
      initialRouteName: 'App',
    }
  )
);


  
