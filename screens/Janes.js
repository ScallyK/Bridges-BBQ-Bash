import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Linking} from 'react';


export default class Header extends React.Component {
    
    render() 
    
     {
        return (
          <View style={styles.header}>
            <Text style={styles.header_text}>The Calamity Janes</Text>

            <Text style={styles.main_text}> 
            The Calamity Janes are a powerful and 
            unique quintent comprised of
            Jenica Rayne, Lynne Hanson, 
            Danieelle Lennon and Les Casson.
            The Calamity Janes manage to
            blend soulful blues, folk, 
            and rock & roll to produce 
            a wealth of musical experiences
           that you're sure to never forget.
      
      
            </Text>

            <TouchableOpacity style={styles.bottomText3} onPress={() => Linking.openURL('http://calamityjanesband.com/about-us/danielle-lennon')}>

                <Text style={styles.time_text}>
                Danielle Lennon: About Me </Text>

            </TouchableOpacity>
            
            <TouchableOpacity style={styles.bottomText3} onPress={() => Linking.openURL('http://calamityjanesband.com/about-us/lynn-hanson')}>

                <Text style={styles.time_text}>
                Lynne Hanson: About Me
                </Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomText3} onPress={() => Linking.openURL('http://calamityjanesband.com/about-us/jennica-laynne')}>

                <Text style={styles.time_text}>
                Jenica Rayne: About Me
                </Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomText3} onPress={() => Linking.openURL('http://calamityjanesband.com/about-us/les-casson')}>

                <Text style={styles.time_text}>
                Les Casson: About Me
                </Text>

            </TouchableOpacity>



            <Image
            style={{ width: 415.8, height: 136.95,  justifyContent: 'center', bottom: 0, position: 'absolute' }}
            source={require('../assets/images/janeswall.png')} />



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