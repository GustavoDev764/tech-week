import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';


export default class Body extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <SafeAreaView>
                <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>

                        {this.props.children}

                    </View>  
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    SafeAreaView:{
        flex: 1,
        padding:0,
    },
    ScrollView:{
        backgroundColor: '#dae1e8',
    },
    
    container:{
        paddingBottom:100,
    }

});