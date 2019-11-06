import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Linking} from 'react';


export default class Header extends React.Component {
    
    render() 
    
     {
        return (
          <View style={styles.header}>
            <Text style={styles.header_text}>Guest Appearances</Text>

            <Text style={styles.main_text}> 
            Our special guest appearances are 
            sure to keep you captivated and entertained. 
            Appearances include 
            the Creature Teacher, Choir and Dance
            performances, as well as multiple 
            Demonstrations. Kick your feet back and
            enjoy the shows!
      
      
            </Text>

            <TouchableOpacity style={styles.bottomText3} onPress={() => Linking.openURL('https://www.bridgestf.org/index.html')}>

                <Text style={styles.time_text}>
                Adaptive Dance Crew</Text>

            </TouchableOpacity>
            
            <TouchableOpacity style={styles.bottomText3} onPress={() => Linking.openURL('https://poteettkd.com/')}>

                <Text style={styles.time_text}>
                Poteet Martial Arts
                </Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomText3} onPress={() => Linking.openURL('https://www.thecreatureteacher.org/')}>

                <Text style={styles.time_text}>
                The Creature Teacher
                </Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomText3} onPress={() => Linking.openURL('https://')}>

                <Text style={styles.time_text}>
                Collective Voices
                </Text>

            </TouchableOpacity>



            <Image
            style={{ width: 415.8, height: 170,  justifyContent: 'center', bottom: 0, position: 'absolute' }}
            source={require('../assets/images/stage.jpg')} />



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
            textAlign: 'center',
            top: 20
        },
        time_text: {
          fontWeight: 'bold',
          fontSize: 15,
          textAlign: 'left',
          color: 'dodgerblue',
          padding: 8,
          top: 30,
          fontFamily: 'verdana'
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