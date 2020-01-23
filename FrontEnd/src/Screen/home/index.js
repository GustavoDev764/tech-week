import React from 'react';
import {View, Image, Text, Button,StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Header, Card, Divider} from 'react-native-elements';
import {Ionicons, FontAwesome, Feather} from '@expo/vector-icons';
import MapView from 'react-native-maps';

export default class HomeScreen extends React.Component{

    static navigationOptions = {
        drawerLabel: 'Inicio',
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
    };


    openMenu = () => {
        return this.props.navigation.openDrawer();
    }

    render(){
        return(
            <View style={styles.container}>
                <Header
                    containerStyle={styles.head}  
                    leftComponent={<Image
                    source={require('../../../assets/logo.png') }
                    style={styles.image}
                    
                    />}
                    centerComponent={{ text: 'Home', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'menu', color: '#fff', onPress: this.openMenu, }}
                />
                <SafeAreaView style={{flex: 1,}}>
                    <ScrollView style={{backgroundColor: '#dae1e8',}} showsVerticalScrollIndicator={false}>
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
                                icon={<Feather name="user" size={16} color="#000" />}
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='Abri no mapa' onPress={() => this.props.navigation.navigate('Mapa')}/>
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
                    

                       
                    </ScrollView>
                </SafeAreaView>
            </View>
             
        );
    }
}


const styles = StyleSheet.create({

    head:{
        backgroundColor: '#3D6DCC',
        justifyContent: 'space-around',
    },

    image:{
        width: 48,
        height: 48
    },

    title:{
        
    },
        
    container: {
        flex:1, 
        
    },
});
