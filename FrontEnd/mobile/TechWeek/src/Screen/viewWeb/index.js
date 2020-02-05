import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import { WebView } from 'react-native-webview';
import {Ionicons, FontAwesome, Feather} from '@expo/vector-icons';


import Head from '../../components/head/headBack';
import Body from "../../components/body";


export default class ViewWeb extends React.Component{

    constructor(props){
        super(props)
    }

    static navigationOptions = {
        drawerLabel: "Web View",
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
    };

    render(){
        
        const {navigation} = this.props;

        const title = navigation.getParam('title', 'default value');
        const url = navigation.getParam('url', 'default value');

        return(
            <>
                <Head title={title} navigation={navigation}/>
                <WebView style={{flex:1}} source={{uri: url}} />
            </>
                
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

    text: {
        flexDirection:"row",
        fontSize: 30,
        
    },
    input:{
       
        backgroundColor: '#fff',
        borderColor: '#000',
        borderRadius: 5,
        borderWidth: .2,
    }
});