import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Map extends React.Component {
    render() {
      return (
            <View>

                <Image 
                source={require('../assets/images/floorplan.png')} 
                style={{ justifyContent: 'center', position: 'absolute', top: 65 }}
                />

            </View>


      );
      }
    }