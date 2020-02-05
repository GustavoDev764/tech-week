import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import {FontAwesome, Ionicons} from '@expo/vector-icons';


export default class HeadBack extends React.Component{


    constructor(prosp){
       super(prosp);    
    }

    render(){
        
        const { title, navigation} = this.props;

        

        return(

            <Header
                containerStyle={styles.head}  
                leftComponent={<Ionicons style={styles.icon} name={"ios-arrow-round-back"} onPress={() => navigation.goBack()} />}
                centerComponent={<Text style={styles.text}>{title}</Text>}
              
            />

           
        );
    }

}

const styles = StyleSheet.create({

    head:{
        backgroundColor: '#3D6DCC',
        justifyContent: 'space-around',
    },

    icon:{
        color:"#FFF",
        fontSize:55,
    },
   
    text:{
        color:"#FFF",
        fontSize:20,
    }
});