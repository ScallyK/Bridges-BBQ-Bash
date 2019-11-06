import React from 'react';
import { View, Image } from 'react-native';

export default class Map extends React.Component {
    render() {
      return (
            <View>

                <Image 
                source={require('../assets/images/judging.png')} 
                style={{ justifyContent: 'center', position: 'absolute', width: 425, height: 631 }}
                />

            </View>


      );
      }
    }