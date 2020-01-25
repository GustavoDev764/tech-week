import React from 'react';
import {View, Image, Text, Button,StyleSheet, SafeAreaView, ScrollView, Picker, TouchableHighlight} from 'react-native';
import {Header, Card, Divider} from 'react-native-elements';
import {Ionicons, FontAwesome, Feather} from '@expo/vector-icons';
import MapView from 'react-native-maps';

export default class Filtro extends React.Component{

    static navigationOptions = {

        headerMode: "none",
        gestureEnabled:true,
        gestureDirection: "horizontal",
        transitionSpec: config,

        drawerLabel: 'Filtro',
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
            < >
                <Header
                    containerStyle={styles.head}  
                    leftComponent={<Ionicons name={"ios-arrow-round-back"} onPress={() => navigation.goBack()} size={60} color="#FFF" />}
                    centerComponent={{ text: 'Filtrar', style: { color: '#fff', fontSize:25} }}
                    rightComponent={<Button title={"Limpar"} color="#42c5ec" onPress={() => { this.updateTipo(""); this.updateLocal(""); this.updateData("");}}  />}
                />
                  
                <SafeAreaView style={{flex: 1,}}>
                    
                    <ScrollView style={{backgroundColor: '#dae1e8', }} showsVerticalScrollIndicator={false}>
                        
                        <View style={{marginBottom:82}}>

                            <Card
                            title='Tipo de Evento'
                            containerStyle={{borderRadius:10}}
                            >
                            
                                <View style={styles.input}>
                                            
                                    <Picker selectedValue = {this.state.tipo} onValueChange = {this.updateTipo}>
                                        <Picker.Item label = "Todos os Eventos" value = "" />
                                        <Picker.Item label = "Mesa-redonda" value = "Mesa-redonda" />
                                        <Picker.Item label = "Oficina" value = "Oficina" />
                                        <Picker.Item label = "Palestra" value = "Palestra" />
                                        <Picker.Item label = "Competição" value = "Competição" />
                                    </Picker>

                                </View>
                                
                                    
                            </Card>

                            <Card
                            title='Local do Evento'
                            containerStyle={{borderRadius:10}}
                            >
                            
                                <View style={styles.input}>
                                            
                                    <Picker selectedValue = {this.state.local} onValueChange = {this.updateLocal}>
                                        <Picker.Item label = "Todo os Locais" value = "" />
                                        <Picker.Item label = "Auditorio" value = "Auditorio" />
                                        <Picker.Item label = "Incubadora" value = "Incubadora" />
                                        <Picker.Item label = "Laboratorio infor. 1" value = "Laboratorio infor. 1" />
                                        <Picker.Item label = "Laboratorio infor. 2" value = "Laboratorio infor. 2" />
                                        <Picker.Item label = "Laboratorio infor. 3" value = "Laboratorio infor. 3" />
                                        <Picker.Item label = "Laboratorio infor. 4" value = "Laboratorio infor. 4" />
                                    </Picker>

                                </View>
                                
                                    
                            </Card>

                            <Card
                            title='Data do Evento'
                            containerStyle={{borderRadius:10}}
                            >
                            
                                <View style={styles.input}>
                                            
                                    <Picker selectedValue = {this.state.data} onValueChange = {this.updateData}>
                                        <Picker.Item label = "Todas as Datas" value = "" />
                                        <Picker.Item label = "29/08/2020 - Sabado" value = "29/08/2020 - Sabado" />
                                        <Picker.Item label = "30/08/2020 - Domingo" value = "30/08/2020 - Domingo" />
                                        <Picker.Item label = "31/08/2020 - Segunda" value = "31/08/2020 - Segunda" />
                                    </Picker>

                                </View>
                                
                                    
                            </Card>
                            
                           

                        </View>

                      
                            
                            
                            {/* 
                                
                            <View style={{flexDirection:"column", alignItems:"center", justifyContent:"space-between", paddingBottom:90 }}>
                                
                                <View style={{backgroundColor:"#FFF", paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20, width:"100%", maxHeight:500, borderRadius:10, marginBottom:15,}} >
                                    
                                    <View style={{flexDirection:"row", justifyContent:"center", marginBottom:10,}}>
                                        <Text style={{fontSize:18, fontWeight:"bold"}}>Tipo de Evento</Text>
                                    </View>
                                    <View style={styles.input}>
                                        
                                        <Picker selectedValue = {this.state.tipo} onValueChange = {this.updateTipo}>
                                            <Picker.Item label = "Todos os Eventos" value = "" />
                                            <Picker.Item label = "Mesa-redonda" value = "Mesa-redonda" />
                                            <Picker.Item label = "Oficina" value = "Oficina" />
                                            <Picker.Item label = "Palestra" value = "Palestra" />
                                            <Picker.Item label = "Competição" value = "Competição" />
                                        </Picker>

                                    </View>
                                </View>

                                <View style={{backgroundColor:"#FFF", paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20, width:"100%", height:"20%", borderRadius:10, marginBottom:15,}} >
                                    
                                    <View style={{flexDirection:"row", justifyContent:"center", marginBottom:10,}}>
                                        <Text style={{fontSize:18, fontWeight:"bold"}}>Local do Evento</Text>
                                    </View>
                                    <View style={styles.input}>
                                        
                                        <Picker selectedValue = {this.state.local} onValueChange = {this.updateLocal}>
                                            <Picker.Item label = "Todo os Locais" value = "" />
                                            <Picker.Item label = "Auditorio" value = "Auditorio" />
                                            <Picker.Item label = "Incubadora" value = "Incubadora" />
                                            <Picker.Item label = "Laboratorio infor. 1" value = "Laboratorio infor. 1" />
                                            <Picker.Item label = "Laboratorio infor. 2" value = "Laboratorio infor. 2" />
                                            <Picker.Item label = "Laboratorio infor. 3" value = "Laboratorio infor. 3" />
                                            <Picker.Item label = "Laboratorio infor. 4" value = "Laboratorio infor. 4" />
                                        </Picker>

                                    </View>
                                </View>

                                <View style={{backgroundColor:"#FFF", paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20, width:"100%", maxWidth:30, borderRadius:10, marginBottom:15,}} >
                                    
                                    <View style={{flexDirection:"row", justifyContent:"center", marginBottom:10,}}>
                                        <Text style={{fontSize:18, fontWeight:"bold"}}>Data do Evento</Text>
                                    </View>
                                    <View style={styles.input}>
                                        
                                        <Picker selectedValue = {this.state.data} onValueChange = {this.updateData}>
                                            <Picker.Item label = "Todas as Datas" value = "" />
                                            <Picker.Item label = "29/08/2020 - Sabado" value = "29/08/2020 - Sabado" />
                                            <Picker.Item label = "30/08/2020 - Domingo" value = "30/08/2020 - Domingo" />
                                            <Picker.Item label = "31/08/2020 - Segunda" value = "31/08/2020 - Segunda" />
                                        </Picker>

                                    </View>
                                </View> 

                                
                              

                            </View>

                            */}


                       
                    </ScrollView>
                    
                </SafeAreaView>
                <View style={{position:"absolute", bottom:"0%", backgroundColor:"#FFF", width:"100%", height:65, justifyContent:"center", alignItems:"center"}}>
                    <TouchableHighlight style={{flexDirection:"column", alignItems:"center", justifyContent:"center"}} onPress={()=>{alert("oi")}} underlayColor="white">
                        <View style={{borderRadius:10, width: 300, height: 50, backgroundColor: '#2196F3', justifyContent:"center", alignItems:"center"}}>
                           <Text style={{color:"#FFF", fontSize:18, fontWeight:"bold"}}>Filtrar</Text>
                        </View>
                    </TouchableHighlight>
                </View>
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
