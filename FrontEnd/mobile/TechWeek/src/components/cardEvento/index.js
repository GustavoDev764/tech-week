import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import {Card, Avatar, Button, SocialIcon} from 'react-native-elements';

import {Ionicons, Feather, FontAwesome} from '@expo/vector-icons';


export default class CardEvento extends React.Component{

    constructor(props){
        super(props);

    }

    isInscrinto = (id, listaCurso) => {
        var i = 0;
        var isInscrinto = false;
        while ( i < listaCurso.length && isInscrinto == false) {

            // console.log("id: "+id+" lista: "+listaCurso[i]);
            if(id == listaCurso[i]){
                isInscrinto = true;
            }

            i++;
        }

        return isInscrinto;
    }

    render(){

        const { 
            navigation,

            listCurso,

            idEvento,
            nameCurso,
            imageEvento,
            nameInstruto,
            fotoInstruto,
            github,
            linkedin,
            dataIncio,
            dataTermino,
            descricao,
            
         } = this.props;

         
        var isInscrinto = this.isInscrinto(idEvento, listCurso);

        return(
            
            <Card
                
                title={nameCurso}
                image={ {uri: imageEvento} }
                containerStyle={{borderRadius:5}}
                
            >
                                
                                
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>

                    {
                    
                    isInscrinto ? 
                        <Button
                        icon={<Feather name="check-circle" size={20} color="#FFF" style={{marginRight:10,}} />}
                        buttonStyle={{
                            borderRadius: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            backgroundColor:"#5cb85c",
                        }}
                        title='INSCRITO'/> 
                    :null
                    
                    }                         
                    

                    <Avatar
                        rounded
                        size={50}
                        source={{
                            uri: fotoInstruto,
                        }}
                    />

                    <View style={{flexDirection:"column"}}>
                                                
                        <Text style={{fontSize:15, fontWeight:"bold"}}>
                            {nameInstruto}
                        </Text>
                                    
                        <View style={{flexDirection:"row", }}>
                            
                            <SocialIcon
                                iconSize={15}
                                raised={false}
                                type='github'
                                onPress={()=>{ 
                                   return navigation.navigate('ViewWeb',{
                                       navigation: this.props.navigation,
                                       title: 'GitHub',
                                       url: github,
                                   });
                                }}
                            />
                            
                            <SocialIcon
                                iconSize={15}
                                raised={false}
                                type='linkedin'
                                onPress={()=>{
                                    return navigation.navigate('ViewWeb',{
                                        navigation: this.props.navigation,
                                        title: 'Linkedin',
                                        url: linkedin,
                                    });
                                }}
                                        />
                        </View>
                                            
                                                                                
                    </View>
                                            
                </View>

                <View style={{flexDirection:"row"}}>
                    <Text style={{marginRight:5,}}>Data: {dataIncio} ate</Text>
                                        
                    <Text>{dataTermino}</Text>
                </View>

                <View style={{flexDirection:"row"}}>
                    <Text style={{marginRight:5,}}>
                                Hora: 19:00 - 22:00
                    </Text>
                </View>
                                    
                <Text style={{marginBottom: 10, textAlign:"justify"}}>
                    {descricao}
                </Text>
                                
                                

                {isInscrinto ? <Button
                    icon={<Ionicons name="ios-close" size={30} color="#FFF" style={{marginRight:10,}} />}
                    buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    backgroundColor:"#dc3545",
                                                                        
                    }}
                    title='CANCELA INSCRIÇÃO'/> 
                    : <Button
                        icon={<Feather name="plus-circle" size={25} color="#FFF" style={{marginRight:10,}} />}
                        buttonStyle={{
                            borderRadius: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            backgroundColor:"#42cde0",
                        }}
                        onPress={()=>{alert("Increve no Curso")}}
                        title='INCREVA-SE'/>
                }
                    
                                    
                                    
            </Card>
        );
    }

}


const styles = StyleSheet.create({

});

