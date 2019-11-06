import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Header extends React.Component {
    
    render() 
    
     {
        return (
          <View style={styles.header}>
            <Text style={styles.header_text}>Goat Yoga</Text>

            <Text style={styles.main_text}> Come get your Chi on and try
             yoga with baby goats! Goat yoga is Animal-Based, therapeutic
              take on common yoga practices with the addition of a furry
               friend. Experience a new sense of calm for only $30 per
                participant! </Text>

            <Text style={styles.time_text}>Early Bird: 9:00am - 9:45am</Text>
            <Text style={styles.time_text}>Regular Time: 10:00am - 10:45am</Text>


            <Image
            style={{ width: 150, height: 103,  justifyContent: 'right', bottom: 100, right: 50, position: 'absolute' }}
            source={require('../assets/images/goat.jpg')} />

            <Image
            style={{ width: 150, height: 103,  justifyContent: 'left', bottom: 300, left: 50, position: 'absolute' }}
            source={require('../assets/images/goatyoga.jpg')} />

            {/* <Image
            style={{ width: 415.8, height: 136.95,  justifyContent: 'center', bottom: 0, position: 'absolute' }}
            source={require('../assets/images/cupcakes.png')} /> */}



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
            padding: 10
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