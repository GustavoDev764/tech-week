import React from 'react';

import {View, Text, Button,StyleSheet} from 'react-native';
import {Card, Divider} from 'react-native-elements';
import {Feather} from '@expo/vector-icons';


//Import Compnents Personalizado
import Head from '../../components/head';
import Body from '../../components/body';


export default class HomeScreen extends React.Component{

    constructor(props){
        super(props);
    }

    static navigationOptions = {
        drawerLabel: "Inicio",
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
    };


    openMenu = () => {
        return this.props.navigation.openDrawer();
    }

    isDrawerOpen = () =>{
        const parent = this.props.navigation.dangerouslyGetParent();
        return isDrawerOpen = parent && parent.state && parent.state.isDrawerOpen;
    }

    render(){
        return(
            <View style={styles.container}>

                <Head openMenu={this.openMenu} title={'Home'} isDrawerOpen={this.isDrawerOpen} />

                <Body>
                    
                    <Card title='Endereço' containerStyle={styles.card}>

                        <Text style={styles.text}>
                            Cidade: Rio Branco/Acre
                        </Text>

                        <Divider style={styles.divider} />

                        <Text style={styles.text}>
                            Local: Instituto Federal de Educação, Ciência e Tecnologia do Acre - IFAC
                        </Text>

                        <Divider style={styles.divider} />

                        <Text style={styles.text}>
                            Data: sexta-feira, 16 de agosto de 2019
                        </Text>

                        <Button
                            icon={
                            <Feather name="user" size={16} color="#000" />}
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Abri no mapa' onPress={() => this.props.navigation.navigate('Map')}/>
                    </Card>

                    <Card title='Descrição do Evento' containerStyle={styles.card}>
                            
                        <Text style={styles.textArea}>
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
                        
                </Body>
            </View>
             
        );
    }
}


const styles = StyleSheet.create({
        
    container: {
        flex:1, 
    },

    icon:{
        fontSize:16,
    },  

    card:{
        borderRadius:5,
    },

    text:{
        marginBottom: 10,
    },

    divider:{
        backgroundColor: 'blue',
    },

    textArea:{
        marginBottom: 10,
        textAlign:"justify"
    }


});
