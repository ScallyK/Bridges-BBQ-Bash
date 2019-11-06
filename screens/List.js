import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Map extends React.Component {
    render() {
      return (
            <View>

                <Image 
                source={require('../assets/images/list.png')} 
                style={{ justifyContent: 'center', position: 'absolute', width: 600, height: 700, }}
                />

            </View>


      );
      }
    }