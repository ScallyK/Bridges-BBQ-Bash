import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Header extends React.Component {
    
    render() 
    
     {
        return (
          <View style={styles.header}>
            <Text style={styles.header_text}>Cupcake Wars</Text>

            <Text style={styles.main_text}> The great Waxahachie Bake-Off! 
                Our celebrity judges taste some 
                of the best cupcakes around to 
                see who can usurp the cupcake 
                throne! Come meet our celebrity 
                chefs and taste some of these 
                scrumptious cakes for yourself!</Text>

                <Text style={styles.time_text}>
                Samples: 12-12:30 </Text>
                <Text style={styles.time_text}>
                Judging: 12:30-1:00
                </Text>
                <Text style={styles.time_text}>
                Winner Announcement: 1:15-1:45
                </Text>



            <Image
            style={{ width: 406.6, height: 145.8,  justifyContent: 'right', bottom: 250, position: 'absolute' }}
            source={require('../assets/images/cupcakes.jpg')} />



            <Image
            style={{ width: 415.8, height: 136.95,  justifyContent: 'center', bottom: 0, position: 'absolute' }}
            source={require('../assets/images/cupcakes.png')} />



            </View>

               )

        }
    }

    const styles = StyleSheet.create({
        header: {
          flex: 1,
          flexDirection: 'column',
          alignSelf: 'stretch',
          paddingTop: 20,
          paddingBottom: 5,
          backgroundColor: '#f3f3f3'
        },
        main_text: {
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center'
        },
        time_text: {
          fontWeight: 'bold',
          fontSize: 15,
          textAlign: 'left',
          color: 'red',
          padding: 8
      },
        header_text: {
          fontWeight: 'bold',
          fontSize: 30,
          textAlign: 'center'
        },
        item: {
          padding: 20,
          fontSize: 20,
          height: 44,
        },
      });