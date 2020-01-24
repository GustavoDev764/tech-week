import React from 'react';
import {View, Image, Text, Button,StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Header, Card, Divider} from 'react-native-elements';
import {Ionicons, FontAwesome, Feather} from '@expo/vector-icons';
import MapView from 'react-native-maps';

export default class Filtro extends React.Component{

    static navigationOptions = {
        drawerLabel: 'Filtro',
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
    };


    openMenu = () => {
        return this.props.navigation.openDrawer();
    }

    render(){
        const { navigation  } = this.props;

        console.log(navigation);
        
        return(
            <View style={styles.container}>
                <Header
                    containerStyle={styles.head}  
                    leftComponent={<Ionicons name={"ios-arrow-round-back"} onPress={() => navigation.navigate('Inscricao')} size={60} color="#FFF" />}
                    centerComponent={{ text: 'Filtro', style: { color: '#fff' } }}
                    rightComponent={<Image
                    source={require('../../../assets/logo.png') }
                    style={styles.image}
                    
                    />}
                />
                <SafeAreaView style={{flex: 1,}}>
                    <ScrollView style={{backgroundColor: '#dae1e8',}} showsVerticalScrollIndicator={false}>
                        <Card title='Endereço'>
                            <Text style={{marginBottom: 10}}>
                              Nome: {navigation.getParam('name','default value')}
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
