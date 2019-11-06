import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Linking} from 'react';


export default class Header extends React.Component {
    
    render() 
    
     {
        return (
          <View style={styles.header}>
            <Text style={styles.header_text}>The HAZE</Text>

            <Text style={styles.main_text}> 
            Performing rock classics, heavy blues,
            groovy soul and outlaw country, these Dallas 
            area rockers will keep you on your feet. As
            more than the traditional bar band The Haze
            creates a truly unique sound, both diverse
            and intense.
      
      
            </Text>

            <TouchableOpacity style={styles.bottomText3} onPress={() => Linking.openURL('https://www.facebook.com/cody.duvall')}>

                <Text style={styles.time_text}>
                Cody Duvall: Drums </Text>

            </TouchableOpacity>
            
            <TouchableOpacity style={styles.bottomText3} onPress={() => Linking.openURL('https://www.facebook.com/marlon.nutting')}>

                <Text style={styles.time_text}>
                Marlon Nutting: Guitar
                </Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomText3} onPress={() => Linking.openURL('https://www.facebook.com/jodyjennings')}>

                <Text style={styles.time_text}>
                Jody Jennings: Vocalist & Guitar
                </Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomText3} onPress={() => Linking.openURL('https://www.facebook.com/TheHazeBand/')}>

                <Text style={styles.time_text}>
                Mark Hensley: Vocalist & Drums
                </Text>

            </TouchableOpacity>



            <Image
            style={{ width: 415.8, height: 170,  justifyContent: 'center', bottom: 0, position: 'absolute' }}
            source={require('../assets/images/hazewall.jpg')} />



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