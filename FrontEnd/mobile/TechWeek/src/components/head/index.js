import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import {FontAwesome} from '@expo/vector-icons';


export default class Head extends React.Component{


    constructor(prosp){
       super(prosp);    
    }

    render(){
        // "times" "bars"
        return(

            <Header
                containerStyle={styles.head}  
                leftComponent={<Image
                source={require('../../../assets/logo.png') }
                style={styles.logo}
                
                
                  />}
                centerComponent={<Text style={styles.text}>{this.props.title}</Text>}
                rightComponent={<TouchableOpacity onPress={this.props.openMenu}>
                                    <FontAwesome name={"bars"} style={styles.menu} />
                                </TouchableOpacity>}
            />

           
        );
    }

}

const styles = StyleSheet.create({

    head:{
        backgroundColor: '#3D6DCC',
        justifyContent: 'space-around',
    },

    logo:{
        width: 48,
        height: 48
    },

    
    menu:{
        color:"#FFF",
        fontSize:25,
    },

    text:{
        color:"#FFF",
        fontSize:20,
    }
});