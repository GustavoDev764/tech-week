import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, ScrollView} from 'react-native';
import {Header} from 'react-native-elements';
import {Ionicons, FontAwesome, Feather} from "@expo/vector-icons";

export default class Certificado extends React.Component{
    
    static navigationOptions = {
        drawerLabel: 'Certificado',
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
    };
    
    openMenu = () => {
        return this.props.navigation.openDrawer();
    }

    render() {
        return(
            <View>
                <Header
                    containerStyle={styles.head}  
                    leftComponent={<Image
                    source={require('../../../assets/logo.png') }
                    style={styles.image}
                    
                    />}
                    centerComponent={{ text: 'Tech-Week 2020', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'menu', color: '#fff', onPress: this.openMenu, }}
                />
                <SafeAreaView style={{flex: 1,}}>
                    <ScrollView style={{backgroundColor: '#dae1e8'}} showsVerticalScrollIndicator={false}>

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