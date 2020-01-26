import React from 'react';
import {View, Image, Text, Button,StyleSheet, SafeAreaView, ScrollView, Picker, TouchableHighlight} from 'react-native';
import {Header, Card, Divider} from 'react-native-elements';
import {Ionicons, FontAwesome, Feather} from '@expo/vector-icons';
import MapView from 'react-native-maps';

export default class Aulas extends React.Component{

    static navigationOptions = {

        headerMode: "none",
        gestureEnabled:true,
        gestureDirection: "horizontal",
        transitionSpec: config,

        drawerLabel: 'Aulas',
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
    };


    openMenu = () => {
        return this.props.navigation.openDrawer();
    }
    state = {tipo: ''}
    updateTipo = (tipo) => {
        this.setState({ tipo: tipo })
    }

    state = {local: ''}
    updateLocal = (local) => {
        this.setState({ local: local })
    }
    
    state = {data: ''}
    updateData = (data) => {
        this.setState({ data: data })
    }

    render(){
        const { navigation  } = this.props;

        console.log(navigation);
        
        return(
            <View>
                <Header
                    containerStyle={styles.head}  
                    leftComponent={<Ionicons name={"ios-arrow-round-back"} onPress={() => navigation.goBack()} size={60} color="#FFF" />}
                    centerComponent={{ text: 'Aulas', style: { color: '#fff', fontSize:25} }}
                    rightComponent={<Image
                        source={require('../../../assets/logo.png') }
                        style={styles.image}
                        
                        />}            
                />
                  
                <SafeAreaView style={{flex: 1,}}>
                    
                    <ScrollView style={{backgroundColor: '#dae1e8', }} showsVerticalScrollIndicator={false}>
                        
                        <View style={{marginBottom:82}}>

                      
                            
                           

                        </View>
                       
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
