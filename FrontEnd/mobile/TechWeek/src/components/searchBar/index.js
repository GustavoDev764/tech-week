import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {FontAwesome, Feather} from '@expo/vector-icons';

export default class SearchInput extends React.Component{

    constructor(props){
        super(props);
        
        
    }    

    render(){

        const { value, navigation, nameRoute, onChangeText } = this.props;

        return(
            <View style={styles.containerSeach}>
                <SearchBar
                        placeholder="Pesquisa Evento"
                        onChangeText={onChangeText}
                        containerStyle={styles.searchBar}   
                        inputContainerStyle={styles.inputSearh} 
                        placeholderTextColor={"#313131bd"}
                        inputStyle={{color:"#000"}}                    
                        value={value}
                        searchIcon={<FontAwesome name="search" onPress={()=>{alert("Busca Cursos")}} size={30} color="#313131bd" />}
                            
                />
                <View style={{height:59, marginRight:5, flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                    <Text onPress={()=>{ return navigation.navigate(nameRoute); }} style={{padding:0,}} >
                        <Feather name="settings" size={30} color="#313131bd" />
                    </Text>
                </View>
                   
            </View>
        );
    }
}
const styles = StyleSheet.create({

    containerSeach:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"#2196f37a",
    },

    inputSearh:{
        borderBottomColor: "#2196f37a",
        borderTopColor:"#2196f37a",
        
        backgroundColor:"#2196f37a",
    },  

    searchBar:{
        borderBottomColor: "#2196f300",
        borderTopColor:"#2196f300",
        backgroundColor:"#00000000",
        width:"89%",
                
       
    },

});