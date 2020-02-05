import React from 'react';
import {View, Image, Text, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import {Header, Card, Divider, Icon, Button, Avatar, SocialIcon, SearchBar  } from 'react-native-elements';
import {Ionicons, FontAwesome, Feather} from '@expo/vector-icons';

import { createStackNavigator } from 'react-navigation-stack';


//Importa todas as sub rotas de Inscrição
import Filtro from '../filtro';
import ViewWeb from '../viewWeb';

//Import Compnents Personalizado
import Head from '../../components/head';
import Body from '../../components/body';
import SearchInput from '../../components/searchBar';
import CardEvento from '../../components/cardEvento';

//lista de evento
const dataEvento = [
    {
        idEvento: "1",
        title: "Curso de JavaScript",
        image: "https://sujeitoprogramador.com/wp-content/uploads/2019/08/jsjsjs.png",
        nameInstruto: "Diego Fernandes",
        fotoInstruto: "data:image/jpeg;base64,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",
        github: "https://github.com/",
        linkedin: "https://www.linkedin.com/",
        dataIncio: "27/11/2017",
        dataTermino:"30/11/2017",
        descricao: "JavaScript é uma linguagem de programação flexível e poderosa que é implementada de forma consistente por vários navegadores da web. Junto com HTML e CSS.",
    },

    {
        idEvento: "2",
        title: "Curso de PHP 7",
        image: "https://www.institutonexus.com.br/wp-content/uploads/2019/11/php-1170x400.jpg",
        nameInstruto: "Gustavo Guanabara",
        fotoInstruto: "data:image/jpeg;base64,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",
        github: "https://github.com/",
        linkedin: "https://www.linkedin.com/",
        dataIncio: "27/11/2017",
        dataTermino:"03/12/2017",
        descricao: "PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web.",
    },

   
];

//lista de curso ao qual o usuario esta inscrito o valor dentro do array 
const listaIdCursosInscrito = [1];


export default class InscricaoScreen extends React.Component{
    

    constructor(props){
        super(props);
        
        this.state = {
            search: '',
        };
    }

    static navigationOptions = {
        drawerLabel: "Inscrição",
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
    };

    
    
    openMenu = () => {
        return this.props.navigation.openDrawer();
    }

    updateSearch = search => {
        this.setState({ search });
        console.log("Inscrição: "+search);
    };

    renderEvento = (data, i, listCurso)=>{
    return (
            <CardEvento
                {...this.props}
                listCurso    = {listCurso}
                key          = {i}
                idEvento     = {data.idEvento}
                nameCurso    = {data.title}
                imageEvento  = {data.image}
                nameInstruto = {data.nameInstruto}
                fotoInstruto = {data.fotoInstruto}
                github       = {data.github}
                linkedin     = {data.linkedin}
                dataIncio    = {data.dataIncio}
                dataTermino  = {data.dataTermino}
                descricao    = {data.descricao}
            
            />
            
        );
    }



    render() {

        const {search} = this.state;
        
        return(
            <View style={styles.container}>
                
                <Head 
                    openMenu={this.openMenu} 
                    title={'Inscrição'} 
                    isDrawerOpen={this.isDrawerOpen} 
                />

                

                <Body>

                    <SearchInput 
                        value={search} 
                        navigation={this.props.navigation} 
                        nameRoute={'Filtro'} 
                        onChangeText={this.updateSearch}
                    />

                    {
                        dataEvento.map( (data, i) =>{
                            return this.renderEvento(data, i, listaIdCursosInscrito);
                        })
                    }

                </Body>
                
            
            </View> 
        );
    }
}

const styles = StyleSheet.create({
         
    container: {
        flex:1, 
        
    },
});

export const IncricaoNavigationStack = createStackNavigator(
    {
        InscricaoScreen,
        Filtro,
        ViewWeb,
        
    },
    {
        headerMode: "none",
        gestureEnabled:true,
        gestureDirection: "horizontal",
        transitionSpec: config,

        navigationOptions:{
            drawerLabel: "Inscrição",
            drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />,
        }
      
    }
);

//Configuração Padrao
const config = {
   
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
};

