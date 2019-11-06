import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Header extends React.Component {
    
    render() 
    
     {
        return (
          <View style={styles.header}>
            <Text style={styles.header_text}>Raffles and Prizes</Text>

            <Text style={styles.main_text}>Come win raffle prizes while
             exploring the rest of the event! Prizes include an all-inclusive
              vacation for two, sponsored by Tropical Travel! This lavish vacation spot includes ocean views, beautiful board, and endless food and drinks.
                Tickets can be purchased at The Bridges Foundation or Tropical Travel
                 with the links below.</Text>


                <Text style={styles.time_text}>
                     Silent Auction: 5:15pm - 6:00pm </Text>
                <Text style={styles.time_text}>
                     Raffle Drawing: 5:50 - 6:00pm </Text>
                     
                     


            <Image
            style={{ width: 150, height: 103,  justifyContent: 'right', bottom: 200, right: 50, position: 'absolute' }}
            source={require('../assets/images/beach.jpg')} />

            <Image
            style={{ width: 150, height: 103,  justifyContent: 'left', bottom: 200, left: 50, position: 'absolute' }}
            source={require('../assets/images/beach2.jpg')} />

            <Image
            style={{ width: 415.8, height: 136.95,  justifyContent: 'center', bottom: 0, position: 'absolute' }}
            source={require('../assets/images/vacation.jpg')} />



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
        header_text: {
          fontWeight: 'bold',
          fontSize: 30,
          textAlign: 'center'
        },
        time_text: {
            fontWeight: 'bold',
            fontSize: 15,
            textAlign: 'left',
            color: 'red',
            padding: 20
        },
        item: {
          padding: 20,
          fontSize: 20,
          height: 44,
        },
      });