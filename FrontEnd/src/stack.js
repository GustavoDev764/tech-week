import React from 'react';
import { Easing, View, Text, Button, Image } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Ionicons, FontAwesome, Feather} from '@expo/vector-icons';
import {Header} from 'react-native-elements';

export class Page1 extends React.Component {
    
    static navigationOptions = {
        headerMode: "none",
        gestureEnabled:true,
        gestureDirection: "horizontal",
        transitionSpec: config,
        
      };

    openMenu = () => {
        return this.props.navigation.openDrawer();
    }

    render() {
      return (
        <View>
          <Header
                    containerStyle={{backgroundColor: '#3D6DCC',justifyContent: 'space-around',}}  
                    
                    centerComponent={{ text: 'Page1', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'menu', color: '#fff', onPress: this.openMenu, }}
            />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop:30, }}>
           
            <Text style={{fontSize:15}} onPress={() => this.props.navigation.navigate('Page2')}>Go to Page2</Text>
            
          </View>
        </View>
      );
    }
  }
  
  // ... other code from the previous section
  
export class Page2 extends React.Component {
     
      static navigationOptions = {

        headerMode: "none",
        gestureEnabled:true,
        gestureDirection: "horizontal",
        transitionSpec: config,
        
      };

      openMenu = () => {
          return this.props.navigation.openDrawer();
      }

      render() {
        return (
          <View>
            <Header
                    containerStyle={{backgroundColor: '#3D6DCC',justifyContent: 'space-around',}}  
                   
                    centerComponent={{ text: 'Page2', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'menu', color: '#fff', onPress: this.openMenu, }}
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop:30, }}>
              
          
              <Text style={{fontSize:15, marginBottom:10,}} onPress={() => this.props.navigation.navigate('Page1')}>Go to Page1</Text>
              <Text style={{fontSize:15, marginBottom:10,}} onPress={() => this.props.navigation.navigate('Inicial')}>Go to Inicial</Text>
            
                
            </View>
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

export const PagesStack = createStackNavigator(
    {
      Page1: {
          screen:Page1,
      },
      Page2: {
          screen:Page2,
          
      },
    },
    {

      headerMode: 'none',
      defaultNavigationOptions: {
        gestureEnabled: true,
        cardOverlayEnabled: true,
       
      },
      
    }
 );


