import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Header extends React.Component {
    
    render() 
    
     {
        return (
          <View style={styles.header}>
            <Text style={styles.header_text}>Performing Events</Text>

            <Text style={styles.main_text}>Come and see amazing local performers
             right here on our main stage! Acts and guests include local bands,
              demonstrations, and guest speakers!</Text>


              <Text style={styles.events_text}>
                Opening Statements: 10:00am-10:10am
                 </Text>
                <Text style={styles.events_text}>
                Adaptive Dance Crew: 10:10am-10:30am
                </Text>
                <Text style={styles.events_text}>
                Poteet Martial Arts: 10:30am-11:00am
                </Text>
                <Text style={styles.events_text}>
                Collective Voices: 1:45pm-2:00pm
                </Text>
                <Text style={styles.events_text}>
                Board Speech: 2:00pm-2:30pm
                </Text>
                <Text style={styles.events_text}>
                Creature Teacher: 2:30pm-3:30pm
                </Text>


            <Image
            style={{ width: 415.8, height: 136.95,  justifyContent: 'center', bottom: 0, position: 'absolute' }}
            source={require('../assets/images/stage.jpg')} />

            <Image
            style={{ width: 103.5, height: 150.5,  justifyContent: 'center', bottom: 135, left:30, position: 'absolute' }}
            source={require('../assets/images/dance.png')} />

            <Image
            style={{ width: 170.5, height: 150.5,  justifyContent: 'center', bottom: 140, left: 250, position: 'absolute' }}
            source={require('../assets/images/gecko.png')} />



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
        events_text: {
          top: 20,
          fontWeight: 'bold',
          fontSize: 15,
          textAlign: 'left',
          color: 'red',
          padding: 8
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
        item: {
          padding: 20,
          fontSize: 20,
          height: 44,
        },
      });