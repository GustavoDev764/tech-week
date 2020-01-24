import React from 'react';
import { Easing, View, Text, Button } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import SideBar from './SideBar';

//Rotas
import HomeScreen from './src/Screen/home';
import InscricaoScreen from './src/Screen/inscricao';
import Programacao from './src/Screen/programacao';
import Certificado from './src/Screen/certificado';
import LogOut from './src/Screen/logout';
import Map from  './src/Screen/Map';
import MeusCursos from './src/Screen/meuscursos';

//Rotas Auxiliares
import Filtro from './src/Screen/filtro';

class InicialScreen extends React.Component {
    
    static navigationOptions = {
        
        gestureEnabled:true,
        gestureDirection: "horizontal",
        transitionSpec: config,
        
      };

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      );
    }
  }
  
  // ... other code from the previous section
  
class DetailsScreen extends React.Component {
     
      static navigationOptions = {
        
        gestureEnabled:true,
        gestureDirection: "horizontal",
        transitionSpec: config,
        
      };

      render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
                <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.navigate('Inscricao')}
            />
          </View>
        );
      }
}


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
    Inicio:{
      screen: HomeScreen,
    },

    Inscricao:{
      screen: InscricaoScreen
    },

    MeusCursos:{
      screen: MeusCursos,
    },

    Programacao:{
      screen: Programacao,
    }, 

    Certificado:{
      screen:Certificado
    },
    
    Sair:{
      screen: LogOut
    },

    Mapa:{
      screen: Map,
      
    }
    
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

const AuxView = createStackNavigator(
    {
      Inicial: {
          screen:InicialScreen,
      },
      Details: {
          screen:DetailsScreen,
          
      },
    }
 );

export default createAppContainer(
  createSwitchNavigator(
    {
      AuxView: AuxView,
      App: MyDrawerNavigator,
   
    },
    {
      initialRouteName: 'App',
    }
  )
);


  
