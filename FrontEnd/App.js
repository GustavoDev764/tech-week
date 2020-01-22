import React from 'react';
import { View, Text, Image, ActivityIndicator, SafeAreaView, ScrollView} from 'react-native';
import { Card, ListItem, Button, Icon, Header, Divider  } from 'react-native-elements';
import {FontAwesome} from '@expo/vector-icons';


// import {createAppContainer} from 'react-navigation';
// import {createDrawerNavigator} from 'react-navigation-drawer';

class CardScreen extends React.Component {
  
  render() {
  
    return (
      <>
      <Header
        containerStyle={{
          backgroundColor: '#3D6DCC',
          justifyContent: 'space-around',
        }}  
        leftComponent={<Image
          source={require('./assets/logo.png') }
          style={{ width: 48, height: 48 }}
          PlaceholderContent={<ActivityIndicator />}
        />}
        centerComponent={{ text: 'Tech-Week 2020', style: { color: '#fff' } }}
        rightComponent={{ icon: 'menu', color: '#fff' }}
      />
      <SafeAreaView style={{flex: 1,}}>
          <ScrollView style={{backgroundColor: 'pink'}} showsVerticalScrollIndicator={false}>
            <Card title='Endereço'>
              <Text style={{marginBottom: 10}}>
                  Cidade: Rio Branco/Acre
              </Text>

              <Divider style={{ backgroundColor: 'blue' }} />

              <Text style={{marginBottom: 10}}>
                  Local: Instituto Federal de Educação, Ciência e Tecnologia do Acre - IFAC
              </Text>

              <Divider style={{ backgroundColor: 'blue' }} />

              <Text style={{marginBottom: 10}}>
                  Data: sexta-feira, 16 de agosto de 2019
              </Text>

              <Button
                icon={<FontAwesome name='map-marker' color='#ffffff' size={25} style={{marginRight:10,}} />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Abri no mapa' />
            </Card>

            <Card title='Descrição do Evento' >
                <Text style={{marginBottom: 10, textAlign:"justify"}}>
                   A Semana de informática do Campus Rio Branco,
                   chamada de Techweek, estará realizando sua 6ª Edição em 2020.
                   Sempre voltada para as tendências tecnológicas,
                   tem o intuito de fornecer aos participantes uma
                   experiência de ampliação de conhecimentos.
                   Neste ano, o Evento terá foco na robótica,
                   com minicursos e sediando a Olimpíada Brasileira
                   de Robótica (OBR) na etapa estadual. Além da robótica,
                   diversas palestras e minicursos de outras áreas tecnológicas
                   irão ocorrer durante os 3 dias de evento,
                   que inicia às 14:00h do dia 28 de outubro com uma competição
                   destinado inteiramente a OBR e finaliza no dia 30 de outubro
                   que é destinado ao torneio de programação.
                </Text>

            </Card>

            <Card title='Endereço'>
              <Text style={{marginBottom: 10}}>
                  Cidade: Rio Branco/Acre
              </Text>

              <Divider style={{ backgroundColor: 'blue' }} />

              <Text style={{marginBottom: 10}}>
                  Local: Instituto Federal de Educação, Ciência e Tecnologia do Acre - IFAC
              </Text>

              <Divider style={{ backgroundColor: 'blue' }} />

              <Text style={{marginBottom: 10}}>
                  Data: sexta-feira, 16 de agosto de 2019
              </Text>

              <Button
                icon={<FontAwesome name='map-marker' color='#ffffff' size={25} style={{marginRight:10,}} />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Abri no mapa' />
            </Card>

            <Card
              title='Endereço'
              >
              <Text style={{marginBottom: 10}}>
                  Cidade: Rio Branco/Acre
              </Text>

              <Divider style={{ backgroundColor: 'blue' }} />

              <Text style={{marginBottom: 10}}>
                  Local: Instituto Federal de Educação, Ciência e Tecnologia do Acre - IFAC
              </Text>

              <Divider style={{ backgroundColor: 'blue' }} />

              <Text style={{marginBottom: 10}}>
                  Data: sexta-feira, 16 de agosto de 2019
              </Text>

              <Button
                icon={<FontAwesome name='map-marker' color='#ffffff' size={25} style={{marginRight:10,}} />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Abri no mapa' />
              </Card>
            </ScrollView>
        </SafeAreaView>
     </> 
    );
  }
}

export default CardScreen;


// class MyHomeScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: 'Home',
//     drawerIcon: ({ tintColor }) => (
//       <Image
//         source={require('./chats-icon.png')}
//         style={[styles.icon, { tintColor: tintColor }]}
//       />
//     ),
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     );
//   }
// }

// class MyNotificationsScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: 'Notifications',
//     drawerIcon: ({ tintColor }) => (
//       <Image
//         source={require('./notif-icon.png')}
//         style={[styles.icon, { tintColor: tintColor }]}
//       />
//     ),
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.goBack()}
//         title="Go back home"
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   icon: {
//     width: 24,
//     height: 24,
//   },
// });

// const MyDrawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: MyHomeScreen,
//   },
//   Notifications: {
//     screen: MyNotificationsScreen,
//   },
// });

// const MyApp = createAppContainer(MyDrawerNavigator);