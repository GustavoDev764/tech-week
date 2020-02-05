import React from 'react';
import {View, Text, StyleSheet, ScrollView, ImageBackground, Image} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import {Ionicons} from '@expo/vector-icons';


export default class SideBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ScrollView>
                <ImageBackground source={require("../../../assets/ImageBackground.png")} style={styles.imageBackground}>
                    <Image source={require("../../../assets/Profile.png")} style={styles.imageProfile}/>
                    <Text style={styles.name}> Sophie Stewart</Text>
                    <View style={styles.profileHead}>
                        <Text style={styles.followers}>734 Followers</Text>
                        <Ionicons name="md-people" size={16}  style={styles.icon}/>
                    </View>
                </ImageBackground>
                <View style={styles.container}>
                        <DrawerNavigatorItems {...this.props} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    imageBackground: {
        width: undefined,
        padding: 16,
        paddingTop: 15,
    },
    imageProfile:{
        width: 80,
        height:80,
        borderRadius: 90,
        borderWidth: 3,
        borderColor: "#FFF"
    },
    name:{
        color: "#FFF",
        fontSize:20,
        fontWeight: "800",
        marginVertical: 8,
    },
    profileHead: {
        flexDirection: "row",

    },

    followers: {
        color: "#ffffffc4",
        fontSize: 13,
        marginRight: 8,
    },
    icon:{
        color: "#ffffffc4",
    }
});