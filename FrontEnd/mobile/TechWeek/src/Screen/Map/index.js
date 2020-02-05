import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, ScrollView} from 'react-native';
import {Header} from 'react-native-elements';
import {Ionicons, FontAwesome, Feather} from "@expo/vector-icons";
import MapView, {Marker} from 'react-native-maps';

export default class Map extends React.Component{
    
    static navigationOptions = {
        drawerLabel: 'Mapa',
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
    };
    
    openMenu = () => {
        return this.props.navigation.openDrawer();
    }

    render() {
        return(
            <>
            <Header
                containerStyle={styles.head}  
                leftComponent={<Image
                source={require('../../../assets/logo.png') }
                style={styles.image}
                    
                />}
                centerComponent={{ text: 'Tech-Week 2020', style: { color: '#fff' } }}
                rightComponent={{ icon: 'menu', color: '#fff', onPress: this.openMenu, }}
            />
            
            <MapView style={{flex:1}}
                initialRegion={{
                latitude: -9.9310638,
                longitude: -67.8176709,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
                 }}
            >
                
                <Marker
                    coordinate={{latitude: -9.9310638,
                        longitude: -67.8176709,}}
                    title={'IFAC'}
                    description={"O Instituto Federal de Educação, Ciência e Tecnologia do Acre é uma instituição de ensino superior e técnico brasileira, sediada no estado do Acre e de caráter público. "}
                     
                    />
            </MapView>
                
       
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
});