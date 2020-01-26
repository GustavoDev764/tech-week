import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import { Video } from 'expo-av';

export default class YourClass extends React.Component {

   
    render() {

        return (
            <View>
                <Video
                source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ width: 300, height: 300 }}
                />
                
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
      flex: 1,
    },
    contentContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
});

